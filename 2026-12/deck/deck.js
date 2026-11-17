/* AI 流程再造 邁向制度化 —— 簡報引擎
   系統畫面不是影片也不是截圖：是用 rrweb 把「在本機假資料系統上的操作」錄成網頁事件，這裡重播。
   所以放大不會糊，而且每一步由講者按鍵才往下走。
   錄影檔在 rec/*.json，裡面的記號（mark）是每一步的分界；錄製腳本在 repo 的 tools/ 底下。 */
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const sleep = ms => new Promise(r => setTimeout(r, ms));
const el = (tag, cls) => { const e = document.createElement(tag); if (cls) e.className = cls; return e; };
const load = name => fetch(`rec/${name}.json?v=${window.__V || 1}`).then(r => r.json());
function swap(node, html) {                                // 換字：先淡出、換、再淡入
  if (!node || node.dataset.h === html) return; node.dataset.h = html;
  node.classList.add('swap'); setTimeout(() => { node.innerHTML = html; node.classList.remove('swap'); }, 280);
}

// ── 舞台縮放 ──
function fit() {
  const k = Math.min(innerWidth / 1920, innerHeight / 1080); $('#stage').style.transform = `scale(${k}) translate(-50%,-50%)`;
  // 封面的三色帶畫在舞台外面，視窗比 16:9 寬或高的時候顏色一路延伸到邊緣
  const sl = (innerWidth - 1920 * k) / 2, st = (innerHeight - 1080 * k) / 2, y1 = Math.round(st + 360 * k), y2 = Math.round(st + 720 * k);
  const b = document.querySelectorAll('#bleed i'); if (!b.length) return;
  document.getElementById('bleed').style.setProperty('--bx', Math.round(sl + 1220 * k) + 'px'); document.getElementById('bleed').style.setProperty('--k', k);
  b[0].style.top = '0'; b[0].style.height = y1 + 'px'; b[1].style.top = y1 + 'px'; b[1].style.height = (y2 - y1) + 'px'; b[2].style.top = y2 + 'px'; b[2].style.bottom = '0';
}
addEventListener('resize', fit); fit();

// ── 重播器 ──
class Rec {
  constructor(events, host) {
    this.host = host; this.t0 = events[0].timestamp; this.end = events[events.length - 1].timestamp - this.t0;
    this.marks = {}; events.filter(e => e.type === 5).forEach(e => this.marks[e.data.payload.id] = { t: e.timestamp - this.t0, ...e.data.payload });
    this.rp = new rrweb.Replayer(events, { root: host, mouseTail: false, skipInactive: false, speed: 1, showWarning: false, triggerFocus: false });
    this.rp.pause(0); this.timer = null; this.at = null;
    host.inert = true; try { this.rp.iframe.setAttribute('tabindex', '-1'); } catch (e) {}
  }
  has(id) { return !!(id && this.marks[id]); }
  focusOf(id) { return this.has(id) ? (this.marks[id].focus || []) : []; }
  jump(id) { clearInterval(this.timer); if (!this.has(id)) return; this.at = id; this.rp.pause(Math.min(this.marks[id].t + 60, this.end)); }
  play(id, speed) {                                    // 從現在演到某個記號，演完停住
    return new Promise(done => {
      clearInterval(this.timer); if (!this.has(id)) return done();
      const to = Math.min(this.marks[id].t + 60, this.end - 5), now = this.rp.getCurrentTime();
      if (now >= to) { this.jump(id); return setTimeout(done, 120); }
      if (!speed) speed = Math.max(1, Math.min(5, (to - now) / 4500));
      const t0 = performance.now(), max = (to - now) / speed + 1500; this.at = id;
      this.rp.setConfig({ speed }); this.rp.play(now);
      this.timer = setInterval(() => { if (this.rp.getCurrentTime() >= to || performance.now() - t0 > max) { clearInterval(this.timer); this.rp.pause(); setTimeout(done, 120); } }, 20);
    });
  }
  left(id) { return this.has(id) ? Math.max(0, Math.min(this.marks[id].t + 60, this.end - 5) - this.rp.getCurrentTime()) : 0; }   // 離某個記號還有多久（錄影時間）
  box(sels) {                                              // 重播出來的網頁裡，這些元素合起來佔哪一塊（原始座標）
    let doc; try { doc = this.rp.iframe.contentDocument; } catch (e) { return null; }
    let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9, hit = 0;
    for (const s of sels || []) { let e; try { e = doc.querySelector(s); } catch (err) { continue; } if (!e) continue; const r = e.getBoundingClientRect(); if (!r.width && !r.height) continue;
      hit++; x0 = Math.min(x0, r.left); y0 = Math.min(y0, r.top); x1 = Math.max(x1, r.right); y1 = Math.max(y1, r.bottom); }
    if (!hit) return null;
    x0 = Math.max(0, x0); y0 = Math.max(0, y0); x1 = Math.min(1440, x1); y1 = Math.min(810, y1);
    return x1 > x0 && y1 > y0 ? [x0, y0, x1 - x0, y1 - y0] : null;
  }
}
// 鏡頭：把某一塊放進 vw×vh 的窗裡。沒有指定就看整頁上緣。
function zoomFor(vw, vh, box, { pad = 40, maxZ = 2.1 } = {}) {
  const base = vw / 1440; return box ? Math.max(base, Math.min(vw / (box[2] + pad * 2), vh / (box[3] + pad * 2), base * maxZ)) : base;
}
function aim(cam, vw, vh, box, opt = {}) {
  const z = opt.z || zoomFor(vw, vh, box, opt); let x = 0, y = 0;
  if (box) { x = box[0] + box[2] / 2 - vw / z / 2; y = box[1] + box[3] / 2 - vh / z / 2; }
  x = Math.max(0, Math.min(1440 - vw / z, x)); y = Math.max(0, Math.min(810 - vh / z, y));
  cam.style.transform = `scale(${z}) translate(${-x}px,${-y}px)`;
  return { z, x, y };
}

// ── 單一示範視窗（中控台、改單統計、習慣） ──
class Demo {
  constructor(root) {
    this.root = root; this.win = $('.win', root); this.cam = $('.cam', root); this.recs = {}; this.cur = null; this.z = 1; this.x = 0; this.y = 0;
    this.ring = el('div', 'ring'); this.cam.append(this.ring); this.sayEl = el('div', 'say'); root.append(this.sayEl);
  }
  async add(name) { const host = el('div', 'rr-host'); this.cam.insertBefore(host, this.ring); this.recs[name] = new Rec(await load(name), host); }
  use(name) { for (const k in this.recs) this.recs[k].host.classList.toggle('on', k === name); this.cur = this.recs[name]; }
  get vw() { return this.win.offsetWidth; } get vh() { return this.win.offsetHeight; }
  frame(sels, opt) { const box = this.cur && sels && sels.length ? this.cur.box(sels) : null; Object.assign(this, aim(this.cam, this.vw, this.vh, box, opt));
    this.ring.style.borderWidth = (3 / this.z) + 'px'; this.ring.style.borderRadius = (12 / this.z) + 'px'; return box; }
  spot(sels) { const b = this.cur && sels && sels.length ? this.cur.box(sels) : null; this.ring.classList.toggle('on', !!b);
    if (b) Object.assign(this.ring.style, { left: b[0] - 8 + 'px', top: b[1] - 8 + 'px', width: b[2] + 16 + 'px', height: b[3] + 16 + 'px' }); return b; }
  say(note, box) {
    const s = this.sayEl; if (!note) { s.classList.remove('on'); return; }
    s.innerHTML = `<b>${note[0]}</b>${note[1]}`;
    const b = box ? [(box[0] - this.x) * this.z, (box[1] - this.y) * this.z, box[2] * this.z, box[3] * this.z] : [30, 30, 0, 0];
    const w = s.offsetWidth, h = s.offsetHeight; let top = b[1] + b[3] + 28;
    if (top + h > this.vh - 16) top = b[1] - h - 28;
    if (top < 16) top = Math.max(16, this.vh - h - 24);
    s.style.left = Math.max(20, Math.min(this.vw - w - 20, b[0])) + 'px'; s.style.top = top + 'px'; s.classList.add('on');
  }
}
// 照劇本走的示範場景。每一步：play 演到哪個記號（往前走時）／at 直接停在哪個記號；focus 鏡頭看哪裡（預設用記號自己帶的）；note 說明。
function demoScene(sec, demo, steps, hook) {
  return { el: sec, steps: steps.length, async go(i, fwd) {
    const st = steps[i]; sec.classList.toggle('mini', !!st.mini);
    if (st.sub !== undefined) swap($('.dsub', sec), st.sub);
    if (hook) hook(i, st, fwd);
    if (st.rec) demo.use(st.rec);
    const rec = demo.cur, mark = st.play || st.at; demo.say(null);
    if (fwd && st.play && rec.has(st.play)) { demo.spot(null); if (st.pre) demo.frame(st.pre, st); await rec.play(st.play, st.speed); }
    else if (rec.has(mark)) { rec.jump(mark); await sleep(220); }
    const focus = st.wide ? null : (st.focus || rec.focusOf(mark));
    demo.frame(focus, st);
    const b = demo.spot(st.ring === false ? null : (st.ring || focus));
    demo.say(st.note, b);
  } };
}
// 純文字的場景：有 data-at="n" 的元素，走到第 n 步才出現
function staticScene(sec) {
  const n = Math.max(0, ...$$('[data-at]', sec).map(e => +e.dataset.at));
  return { el: sec, steps: n + 1, async go(i) { $$('[data-at]', sec).forEach(e => e.classList.toggle('in', +e.dataset.at <= i)); sec.classList.add('go'); },
    leave() { sec.classList.remove('go'); } };
}

// ───────── 一條線：上 MOMO、下蝦皮特選 ─────────
const STATIONS = [
  { name: '匯入訂單', say: '把通路後台下載的檔案拖進上傳框。系統會自己辨識是哪一種檔案，先列出預覽，確認之後才寫入。',
    momo: '可以一次放進多份未出貨清單，系統合併成一批預覽。', shopee: '匯入時要先選履約方式：竹運出貨、竹運採購進貨，或供應商直送。' },
  { name: '比對差異', say: '通路調整了數量或到貨日，把新的檔案再上傳一次就好。系統會比對前後兩版，把有變動的地方標出來，由同仁確認。',
    momo: '差異在匯入預覽時一併列出。', shopee: '另外有「差異待確認」一格，逐筆看過、按下確認才算處理完。' },
  { name: '產出採購單', say: '系統依價格本和商品總表換算箱數，產出公司 EIP 系統要用的採購單，不必再用 Excel 查表。',
    momo: '可以勾選多張入庫單，合併成一張採購單。', shopee: '勾選的訂單會合併產出。這裡是兩張訂單合成一個採購單檔。' },
  { name: '回填單號', say: '在公司系統取得 EIP 採購單號之後回填，就可以下載要給原廠的採購單。',
    momo: '瑪氏調整數量後回傳的採購單可以直接上傳，系統會重新計算。', shopee: '回填之後這筆資料會鎖定，避免之後被誤改。' },
  { name: '核對缺貨', say: '把倉庫與物流提供的資料上傳，系統逐項比對數量與效期，把缺貨列出來，不必人工逐筆核對。',
    momo: '上傳勇信的配送明細表，核對箱數與效期。', shopee: '上傳庫存與效期表，系統依允收效期判斷可出數量，並產出拋單檔。' },
  { name: '標示單據', say: '缺貨結果會直接標在通路的單據上：不出貨的品項畫線，短出的改成實際數量並蓋章。',
    momo: '入庫通知單和嘜頭都由系統畫好，箱數也一併填上。', shopee: '產生要給蝦皮的 LINE 通知內容，蝦皮採購單也由系統標好。' },
];
const LAY = {                                              // 三種版面：兩邊一樣大、蝦皮放大、MOMO 放大
  both:   { momo: [96, 358],  rail: 454, shopee: [630, 358] },
  shopee: { momo: [96, 132],  rail: 228, shopee: [404, 584] },
  momo:   { momo: [96, 584],  rail: 680, shopee: [856, 132] },
};
const VW = 1920 - 356 - 40, KS = ['momo', 'shopee'];
// 每一步：st 第幾站；lay 版面；go 這一步各自演到哪個記號（沒寫就停在原地）；drop 先演到這個記號、讓檔案飛進去；veil 遮起來時寫的字
const LSTEPS = window.__LSTEPS = [
  { st: 0, lay: 'both', at: { momo: 's1_start', shopee: 's1_start' } },
  { st: 0, lay: 'both', drop: 's1_drop', go: { momo: 's1_preview', shopee: 's1_preview' } },
  { st: 0, lay: 'shopee', go: { shopee: 's1_fulfil' }, veil: { momo: 'MOMO 不需要選履約方式' } },
  { st: 0, lay: 'both', go: { momo: 's1_done', shopee: 's1_done' } },
  { st: 1, lay: 'both', drop: 's2_drop', go: { momo: 's2_preview', shopee: 's2_preview' } },
  { st: 1, lay: 'shopee', go: { shopee: 's2_diff' }, veil: { momo: 'MOMO 的差異在預覽時就已列出' } },
  { st: 1, lay: 'both', go: { momo: 's2_done', shopee: 's2_done' } },
  { st: 2, lay: 'both', go: { momo: 's3_list', shopee: 's3_list' } },
  { st: 2, lay: 'both', go: { momo: 's3_done', shopee: 's3_done' } },
  { st: 3, lay: 'both', go: { momo: 's4_typed', shopee: 's4_typed' } },
  { st: 3, lay: 'both', go: { momo: 's4_done', shopee: 's4_done' } },
  { st: 4, lay: 'both', drop: 's5_drop', go: { momo: 's5_preview', shopee: 's5_result' } },
  { st: 4, lay: 'both', go: { momo: 's5_result', shopee: 's5_ship' } },
  { st: 5, lay: 'shopee', go: { shopee: 's6_notify', momo: 's6_list' }, veil: { momo: '先看蝦皮特選' } },
  { st: 5, lay: 'both', drop: 's6_drop', go: { momo: 's6_done', shopee: 's6_pdf' }, focus: { momo: ['.pv'] } },
  { st: 5, lay: 'momo', cmp: 1 },
  { st: 5, lay: 'momo', cmp: 2 },
  { st: 5, lay: 'both', big: true },
];
const L = { recs: {}, i: 0 };
function lanesLayout(mode) {
  const l = LAY[mode];
  for (const k of KS) { const e = $('#lane-' + k); e.style.top = l[k][0] + 'px'; e.style.height = l[k][1] + 'px'; e.classList.toggle('mini', l[k][1] < 200); }
  $('#rail').style.top = l.rail + 'px';
}
function lanesAim(step) {
  const l = LAY[step.lay];
  const info = KS.filter(k => L.recs[k]).map(k => { const rec = L.recs[k], vh = l[k][1] - 28, box = rec.box((step.focus && step.focus[k]) || rec.focusOf(rec.at)); return { k, vh, box }; });
  const same = step.lay === 'both' && info.every(i => i.box);        // 兩邊一樣大的版面，拉近程度也要一樣
  const z = same ? Math.min(...info.map(i => zoomFor(VW, i.vh, i.box, { pad: 26 }))) : null;
  for (const i of info) aim($('#cam-' + i.k), VW, i.vh, i.box, { pad: 26, z });
}
function lanesTexts(step) {
  const s = STATIONS[step.st];
  $('#rail-no').textContent = step.st + 1; swap($('#rail-name'), s.name); swap($('#rail-say'), s.say);
  swap($('#only-momo'), `<b>只有 MOMO</b>${s.momo}`); swap($('#only-shopee'), `<b>只有蝦皮特選</b>${s.shopee}`);
  $$('#rail-stops .st').forEach((e, i) => { e.classList.toggle('done', i < step.st); e.classList.toggle('now', i === step.st); });
  $('#rail-fill').style.width = (100 + (VW - 200) * step.st / (STATIONS.length - 1)) + 'px';
  for (const k of KS) { const v = $('#veil-' + k), t = step.veil && step.veil[k]; v.classList.toggle('on', !!t); if (t) v.firstElementChild.textContent = t; }
  $('#cmp').classList.toggle('on', !!step.cmp); $('#cmp').classList.toggle('shown', step.cmp === 2);
  $('#lanes-big').classList.toggle('on', !!step.big);
}
function flyChip(k, name) {                                // 檔案飛進上傳框
  const chip = $('#chip-' + k), top = parseFloat($('#lane-' + k).style.top);
  chip.classList.toggle('pdf', /\.pdf/i.test(name)); chip.firstElementChild.textContent = /\.pdf/i.test(name) ? 'PDF' : 'XLS'; chip.lastElementChild.textContent = name;
  Object.assign(chip.style, { transition: 'none', left: '1480px', top: (top + (k === 'momo' ? -30 : 300)) + 'px', transform: 'rotate(-7deg) scale(1.08)' });
  void chip.offsetWidth; chip.style.transition = ''; chip.classList.add('on');
  Object.assign(chip.style, { left: '640px', top: (top + 90) + 'px', transform: 'rotate(0) scale(.94)' });
  setTimeout(() => chip.classList.remove('on'), 1050);
}
// 第 n 步時，某一邊應該停在哪個記號：往回找最近一個有指定、而且錄影裡真的有的記號
function lanesMarkAt(n, k) {
  for (let i = n; i >= 0; i--) { const s = LSTEPS[i], id = (s.go && s.go[k]) || (s.at && s.at[k]); if (id && L.recs[k].has(id)) return id; }
  return Object.keys(L.recs[k].marks)[0];
}
const lanesScene = { el: $('#s-lanes'), steps: LSTEPS.length, async go(n, fwd) {
  const step = LSTEPS[n]; L.i = n; lanesLayout(step.lay); lanesTexts(step);
  if (fwd && (step.go || step.drop)) {
    if (step.drop) {
      const ks = KS.filter(k => L.recs[k].has(step.drop) && step.go && step.go[k]);
      await Promise.all(ks.map(k => L.recs[k].play(step.drop)));
      for (const k of ks) flyChip(k, L.recs[k].marks[step.drop].file || '檔案');
      if (ks.length) await sleep(1000);
    }
    // 兩邊都有動作時，用同樣的時間演完（長的加速、短的放慢），看起來才是一起跑
    const ks = KS.filter(k => step.go && step.go[k] && L.recs[k].has(step.go[k])), left = k => L.recs[k].left(step.go[k]);
    const wall = Math.min(Math.max(1, ...ks.map(left)), 5000);
    await Promise.all(ks.map(k => L.recs[k].play(step.go[k], ks.length > 1 ? Math.max(.5, Math.min(6, left(k) / wall)) : undefined)));
    for (const k of KS) if (L.recs[k].at !== lanesMarkAt(n, k)) L.recs[k].jump(lanesMarkAt(n, k));
  } else { for (const k of KS) L.recs[k].jump(lanesMarkAt(n, k)); await sleep(220); }
  lanesAim(step); setTimeout(() => { if (L.i === n) lanesAim(step); }, 500);
} };

// ───────── 各場景的劇本 ─────────
const PORTAL = [
  { rec: 'portal', at: 'p_start', mini: true, wide: true, ring: false },
  { at: 'p_start', wide: true, ring: false, sub: '酷澎、蝦皮特選、MOMO 共用的首頁。' },
  { at: 'p_today', sub: '今天該處理的事，系統先列出來。', note: ['今日事項', '快到貨還沒完成的訂單、通路改過的訂單、還沒產出的出貨檔，都會列在這裡。點一下就到那一頁處理。'] },
  { at: 'p_channels', sub: '三個通路的狀況放在同一頁。', note: ['各通路系統', '今天進了幾張新訂單、還有幾張等待出貨，不必分別登入各個後台查看。'] },
  { play: 'p_charts', sub: '訂單與出貨的趨勢。', note: ['訂單與出貨', '近 30 天每天進了多少訂單、未來 7 天要出多少箱，可以提早安排人力。'] },
  { play: 'p_bottom', sub: '改單次數與操作紀錄。', note: ['本月改單與操作紀錄', '這個月處理了幾次改單，以及最近誰在哪個系統做了什麼，都查得到。'] },
];
const STATS = [
  { rec: 'stats', at: 'r_list', wide: true, ring: false, sub: '通路改了數量或到貨日，同仁處理完之後，要記下這一次做了什麼。' },
  { play: 'r_open', sub: '每張訂單都有自己的修改紀錄。', note: ['修改紀錄', '打開訂單，系統已經列出這張單被改了哪些地方。'] },
  { play: 'r_filled', sub: '用點選的方式記錄，不必打字。', note: ['記下這一次處理', '選擇處理的階段、做了什麼、主要原因。幾個點選就完成。'] },
  { play: 'r_done', sub: '沒有記錄，就不能結案。', note: ['處理完成', '紀錄填完才能按「處理完成」。這一步由系統把關，不靠同仁自己記得。'] },
  { play: 't_cards', sub: '一筆一筆的紀錄，累積成統計。', note: ['改單統計', '這段期間有幾張訂單、其中幾張被修改過、總共處理了幾次。'] },
  { play: 't_lines', sub: '哪一條線別改單最多。', note: ['各線別', '每條線別的處理次數、平均每張訂單改幾次、最常見的原因，一眼就能比較。'] },
  { play: 't_reasons', sub: '改單的原因是什麼。', note: ['主因與階段', '原因看得出來，才能回頭和通路、廠商討論如何減少改單。'] },
  { at: 't_reasons', ring: false, real: true, sub: '以上為示範資料。' },
];
const HABITS = [
  { rec: 'guide', at: 'g_due' }, { rec: 'stats', at: 'r_filled' }, { rec: 'guide', at: 'g_help' }, { rec: 'guide', at: 'g_history' },
];

// ───────── 導覽 ─────────
const CHAPTERS = ['課題', '成果', '中控台', '蝦皮特選與 MOMO', '改單統計', '留下做法', '配合同仁', '提出需求', '下一步', '總結'];
const SC = [];            // { id, ch 章節, topic 回應哪個課題, scene }
let si = 0, step = 0, busy = false, queued = 0;
function chrome() {
  const s = SC[si]; $('#foot').classList.toggle('hide', s.ch < 0); document.body.dataset.scene = s.id; document.body.dataset.step = step;
  $$('#chapters span').forEach((e, i) => e.classList.toggle('now', i === s.ch));
  $('#tp1').classList.toggle('on', (s.topic || []).includes(1)); $('#tp2').classList.toggle('on', (s.topic || []).includes(2));
  const total = SC.reduce((a, x) => a + x.scene.steps, 0), now = SC.slice(0, si).reduce((a, x) => a + x.scene.steps, 0) + step + 1;
  $('#pageno').textContent = `${now} / ${total}`;
}
async function goto(i, st, fwd) {
  if (i < 0 || i >= SC.length) return;
  busy = true;
  // 換章節時，一條細的三色直條掃過畫面（跟封面同一組顏色）；同一章裡換頁只做淡入
  const sw = document.getElementById('sweep'), wipe = i !== si && SC[i].ch !== SC[si].ch && SC[i].ch >= 0 && (SC[si].ch >= 0 || SC[si].id === 's-cover');
  if (wipe) { sw.classList.remove('run'); void sw.offsetWidth; sw.classList.add('run'); await sleep(240); }
  if (i !== si || !SC[i].scene.el.classList.contains('on')) { SC[si].scene.leave && SC[si].scene.leave(); $$('.scene').forEach(e => e.classList.toggle('on', e === SC[i].scene.el)); }
  si = i; step = st; chrome();
  try { await SC[i].scene.go(st, !!fwd); } catch (err) { console.error(err); }
  busy = false;
  if (queued) { const q = queued; queued = 0; q > 0 ? next() : prev(); }
}
function next() { if (busy) { queued = 1; return; } if (step < SC[si].scene.steps - 1) goto(si, step + 1, true); else if (si < SC.length - 1) goto(si + 1, 0, true); }
function prev() { if (busy) { queued = -1; return; } if (step > 0) goto(si, step - 1, false); else if (si > 0) goto(si - 1, SC[si - 1].scene.steps - 1, false); }
addEventListener('keydown', e => {
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  if (['ArrowRight', 'ArrowDown', ' ', 'PageDown', 'Enter'].includes(e.key)) { e.preventDefault(); next(); }
  else if (['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace'].includes(e.key)) { e.preventDefault(); prev(); }
  else if (e.code === 'KeyF') { e.preventDefault(); document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen?.(); }
  else if (e.key === 'Home') goto(0, 0, false);
  else if (e.key === 'End') goto(SC.length - 1, 0, false);
});
setInterval(() => { const ae = document.activeElement; if (ae && ae.tagName === 'IFRAME') { ae.blur(); window.focus(); } }, 200);
addEventListener('click', e => { if (e.clientX < innerWidth * .15) prev(); else next(); });

// ───────── 啟動 ─────────
(async function boot() {
  $('#chapters').innerHTML = CHAPTERS.map(c => `<span>${c}</span>`).join('');
  $('#rail-stops').innerHTML = STATIONS.map((s, i) => `<div class="st" style="left:${456 + (VW - 200) * i / (STATIONS.length - 1)}px">${s.name}<i></i></div>`).join('');
  const dPortal = new Demo($('#d-portal')), dStats = new Demo($('#d-stats')), dHabit = new Demo($('#d-habit'));
  const safe = p => p.catch(err => console.warn('錄影載入失敗', err));
  await Promise.all([
    safe(dPortal.add('portal')), safe(dStats.add('stats')), safe(dHabit.add('guide')), safe(dHabit.add('stats')),
    safe(load('momo').then(ev => L.recs.momo = new Rec(ev, $('#rr-momo')))), safe(load('shopee').then(ev => L.recs.shopee = new Rec(ev, $('#rr-shopee')))),
  ]);
  dPortal.use('portal'); dStats.use('stats'); if (dHabit.recs.guide) dHabit.use('guide');
  const habitScene = { el: $('#s-habit'), steps: HABITS.length + 1, async go(i) {
    $$('#s-habit .habit').forEach((e, k) => { e.classList.toggle('now', k === i); e.classList.toggle('seen', k < i || i >= HABITS.length); });
    $('#habit-wrap').classList.toggle('on', i >= HABITS.length);
    const h = HABITS[Math.min(i, HABITS.length - 1)]; if (!dHabit.recs[h.rec]) return;
    dHabit.use(h.rec); dHabit.cur.jump(h.at); await sleep(220);
    const focus = h.focus || dHabit.cur.focusOf(h.at); dHabit.frame(focus, { pad: 30 }); dHabit.spot(null);
  } };
  const S = id => staticScene($('#' + id));
  SC.push(
    { ch: -1, scene: S('s-cover') },
    { ch: 0, scene: S('s-topics') },
    { ch: 1, scene: S('s-nums') }, { ch: 1, scene: S('s-timeline') }, { ch: 1, scene: S('s-promise') },
    { ch: 2, topic: [1], scene: demoScene($('#s-portal'), dPortal, PORTAL) },
    { ch: 3, topic: [1], scene: lanesScene },
    { ch: 4, topic: [1], scene: demoScene($('#s-stats'), dStats, STATS, (i, st) => $('#stats-real').classList.toggle('on', !!st.real)) },
    { ch: 5, topic: [1], scene: habitScene },
    { ch: 6, topic: [2], scene: S('s-fit') },
    { ch: 7, topic: [1, 2], scene: S('s-ask') },
    { ch: 8, scene: S('s-next') },
    { ch: 9, topic: [1, 2], scene: S('s-answer') },
    { ch: -1, scene: S('s-thanks') },
  );
  SC.forEach(s => s.id = s.scene.el.id);
  // 網址後面加 #場景/步驟 可以直接跳過去（排練用），例如 #s-lanes/4
  const m = location.hash.match(/^#([\w-]+)(?:\/(\d+))?/); const start = m ? Math.max(0, SC.findIndex(s => s.id === m[1])) : 0;
  await goto(start, m && m[2] ? Math.min(+m[2], SC[start].scene.steps - 1) : 0, false);
  Object.assign(window, { __ready: true, __next: next, __prev: prev, __goto: goto, __busy: () => busy, __SC: SC, __pos: () => [si, step] });
})();
