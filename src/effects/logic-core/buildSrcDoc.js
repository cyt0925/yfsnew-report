import rawHtml from './source.raw.js';

const THREE_MODULE_URL = '/vendor/three-0.136.0.module.js';

// 場景原生的重點色是青色 0x00E5FF（核心發光體、環繞方塊、點光源共用）。
// CSS 的 hue-rotate 是矩陣近似，從青色轉到紅色會嚴重失真，
// 所以直接換掉材質顏色，拿到精確的永豐商店品牌紅。
const SOURCE_ACCENT = /0x00E5FF/g;
const BRAND_ACCENT = '0xD10F27';

// 這份 HTML 是 @designcodeio/threeui（MIT）的 Logic Core 場景原始碼。
// 原版是一個完整的示範網頁，執行時會去外部 CDN 抓 three.js、Tailwind、圖示與示範圖片，
// 而 3D 場景只是頁面裡某張卡片中的一小塊（#three-canvas-container）。
//
// 我們只要那個 3D 場景，而且要它在沒有外網的情況下也跑得起來，所以：
//   1. three.js 改指向站內自帶的版本，其餘外部資源全部拔掉
//   2. 場景載入後把 #three-canvas-container 搬到 body 底下鋪滿整個畫面，
//      其餘示範內容隱藏（原本的巢狀祖先若被隱藏，裡面的場景也會跟著不見，
//      所以是「搬出來」而不是直接隱藏外層）
//   3. 搬完觸發一次 resize，讓場景依新的尺寸重算相機與畫布

const ISOLATION_STYLE = `
  <style data-yfs-isolation>
    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #050505;
    }
    body[data-yfs-isolated] > *:not(#three-canvas-container) {
      display: none !important;
    }
    body[data-yfs-isolated] > #three-canvas-container {
      display: block !important;
      position: fixed !important;
      inset: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
    }
    #three-canvas-container canvas {
      display: block;
      width: 100% !important;
      height: 100% !important;
    }
  </style>
`;

const ISOLATION_SCRIPT = `
  <script data-yfs-isolation>
    (function () {
      var promote = function () {
        var el = document.getElementById('three-canvas-container');
        if (!el) return;
        if (el.parentNode !== document.body) document.body.appendChild(el);
        document.body.setAttribute('data-yfs-isolated', '');
        window.dispatchEvent(new Event('resize'));
      };
      // 場景是在 DOMContentLoaded 時初始化的，等它掛好 canvas 再搬。
      if (document.readyState === 'complete') {
        requestAnimationFrame(promote);
      } else {
        window.addEventListener('load', function () { requestAnimationFrame(promote); }, { once: true });
      }
    })();
  <\/script>
`;

export function buildLogicCoreSrcDoc() {
  let html = rawHtml;

  html = html.replace('https://cdn.skypack.dev/three@0.136.0', THREE_MODULE_URL);
  html = html.replace(SOURCE_ACCENT, BRAND_ACCENT);

  html = html.replace(/<script[^>]*cdn\.tailwindcss\.com[^>]*><\/script>/gi, '');
  html = html.replace(/<script[^>]*code\.iconify\.design[^>]*><\/script>/gi, '');
  html = html.replace(/<link[^>]*fonts\.googleapis\.com[^>]*>/gi, '');
  html = html.replace(/(<img[^>]*\s)src="https:\/\/images\.unsplash\.com[^"]*"/gi, '$1');

  html = html.replace(/<\/head>/i, `${ISOLATION_STYLE}</head>`);
  html = html.replace(/<\/body>/i, `${ISOLATION_SCRIPT}</body>`);

  return html;
}
