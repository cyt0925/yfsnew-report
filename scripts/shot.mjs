// 逐頁截圖 + 版面檢查。改完版面跑這支，不要只看程式碼就說做好了。
//
//   npm run shot                    # 全部 24 頁 × 三種視窗尺寸
//   npm run shot -- --only 5        # 只截第 5 章（酷澎）整章
//   npm run shot -- --only 5.2,3.1  # 只截指定的 章.步驟
//   npm run shot -- --size 1440x700 # 只跑一種尺寸
//   npm run shot -- --url http://localhost:4173   # 對已經跑著的站截圖
//
// 沒帶 --url 就自己把 `npm run dev` 叫起來、跑完關掉。
// 有任何一頁被 .step 的 overflow:hidden 切到就 exit 1。
//
// 兩個踩過的坑，改這支腳本前先看一眼：
//
// 1. **24 頁全部同時掛在 DOM 裡**（靠 transform 位移，不是條件渲染）。
//    所以 `document.querySelector('.oms')` 之類的選擇器會抓到「第一個」而不是
//    「正在看的那一個」，量出來每頁數字都一樣。要用畫面中心點反查。
//
// 2. **縮放是貼在 section 上，不是 .step 上**（App.jsx 的 fitStepsToViewport
//    設定 step.firstElementChild 的 zoom）。而且 `.step` 是 overflow:hidden 的
//    置中 flex 容器，它的 scrollHeight 不能拿來判斷有沒有被切到——量 section
//    自己的 getBoundingClientRect()，比對 top/bottom 有沒有超出視窗才準。

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const argv = process.argv.slice(2);
const arg = (name, fallback) => {
  const i = argv.indexOf(`--${name}`);
  return i === -1 || !argv[i + 1] ? fallback : argv[i + 1];
};

const SIZES = arg('size', '1920x963,1440x700,1366x650')
  .split(',')
  .map((s) => s.split('x').map(Number))
  .map(([width, height]) => ({ width, height }));

// 篩選器吃「5」（整章）或「5.2」（章.步驟），都是 0-based，跟 App.jsx 的座標一致
const ONLY = arg('only', '').split(',').filter(Boolean);
const OUT = arg('out', join(ROOT, 'shots'));
const URL = arg('url', '');

// 動畫（打字機 + 逐行淡入）最久跑到約 2.5 秒，等它定格再截，不然截到一半的字
const SETTLE_MS = Number(arg('settle', 3000));
const KEY_MS = 550;

const wanted = (c, s) =>
  ONLY.length === 0 || ONLY.includes(String(c)) || ONLY.includes(`${c}.${s}`);

// Playwright 預設找得到瀏覽器就用預設的；找不到（例如 CI 容器把瀏覽器裝在
// PLAYWRIGHT_BROWSERS_PATH 底下的版本號資料夾）再自己去翻一支出來。
async function launch() {
  try {
    return await chromium.launch();
  } catch (err) {
    const base = process.env.PLAYWRIGHT_BROWSERS_PATH;
    if (!base || !existsSync(base)) throw err;
    for (const dir of readdirSync(base)) {
      const exe = join(base, dir, 'chrome-linux', 'chrome');
      if (existsSync(exe)) return chromium.launch({ executablePath: exe });
    }
    throw err;
  }
}

async function reachable(url) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(1500) });
    return res.ok;
  } catch {
    return false;
  }
}

async function startDevServer() {
  const proc = spawn('npm', ['run', 'dev', '--', '--port', '5173'], {
    cwd: ROOT,
    stdio: 'ignore',
    detached: true,
  });
  const url = 'http://localhost:5173/';
  for (let i = 0; i < 40; i++) {
    if (await reachable(url)) return { url, stop: () => process.kill(-proc.pid) };
    await new Promise((r) => setTimeout(r, 500));
  }
  process.kill(-proc.pid);
  throw new Error('dev server 起不來');
}

// 章節數與每章的步驟數直接從 DOM 數出來，不要在這裡再抄一份 CHAPTERS——
// App.jsx 加一頁的時候這支腳本才不會默默漏掉那一頁。
const readDeck = () =>
  [...document.querySelectorAll('.chapter')].map((ch, i) => ({
    chapter: i,
    steps: ch.querySelectorAll('.step').length,
  }));

const measure = () => {
  // 24 頁同時在 DOM 裡，用畫面中心點反查「正在看的」是哪一頁
  const sec = document.elementFromPoint(innerWidth / 2, innerHeight / 2)?.closest('section');
  if (!sec) return { error: '畫面中心找不到 section' };
  const r = sec.getBoundingClientRect();
  return {
    cls: sec.className.replace(/\s*slide-content\s*/, ' ').trim(),
    title: sec.querySelector('h1, h2')?.innerText.replace(/\s+/g, ' ').slice(0, 20) || '',
    // 縮放貼在 section 上，不是 .step 上
    zoom: sec.style.zoom ? Number(sec.style.zoom).toFixed(3) : '1',
    scaled: sec.style.transform ? 'scale' : '',
    h: Math.round(r.height),
    vh: innerHeight,
    // 真正的「被切到」：section 的上下緣有沒有跑出視窗
    over: Math.round(Math.max(0, -r.top) + Math.max(0, r.bottom - innerHeight)),
  };
};

const server = URL ? { url: URL, stop: () => {} } : await startDevServer();
mkdirSync(OUT, { recursive: true });

const browser = await launch();
let clipped = 0;
let shots = 0;

for (const size of SIZES) {
  const page = await browser.newPage({ viewport: size });
  await page.goto(server.url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  const deck = await page.evaluate(readDeck);
  const label = `${size.width}x${size.height}`;
  console.log(`\n── ${label} ── ${deck.length} 章 / ${deck.reduce((n, d) => n + d.steps, 0)} 頁`);

  // 一個瀏覽頁走完全部：往右換章（換章會把步驟歸零），往下走完該章的步驟。
  // 每頁重開瀏覽器會慢上好幾倍，不要那樣做。
  for (const { chapter, steps } of deck) {
    if (chapter > 0) {
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(KEY_MS);
    }
    for (let step = 0; step < steps; step++) {
      if (step > 0) {
        await page.keyboard.press('ArrowDown');
        await page.waitForTimeout(KEY_MS);
      }
      if (!wanted(chapter, step)) continue;

      await page.waitForTimeout(SETTLE_MS);
      const m = await page.evaluate(measure);
      const name = `${chapter}.${step}-${label}`;
      await page.screenshot({ path: join(OUT, `${name}.png`) });
      shots++;

      const flags = [
        m.zoom !== '1' ? `縮到 ${m.zoom}` : '',
        m.scaled,
        m.over > 0 ? `!! 被切掉 ${m.over}px` : '',
      ].filter(Boolean).join('  ');
      if (m.over > 0) clipped++;
      console.log(
        `  ${`${chapter}.${step}`.padEnd(5)} ${(m.title || m.cls || '').padEnd(22)}` +
        ` h=${String(m.h).padStart(4)}/${m.vh}  ${flags}`
      );
    }
  }
  await page.close();
}

await browser.close();
server.stop();

console.log(`\n${shots} 張 → ${OUT}`);
if (clipped > 0) {
  console.error(`${clipped} 頁被 .step 的 overflow:hidden 切到，版面要修。`);
  process.exit(1);
}
console.log('沒有頁面被切到。');
