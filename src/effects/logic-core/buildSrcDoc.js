import rawHtml from './source.raw.js';

// 不用開頭斜線的絕對路徑：這個 iframe 是用 srcDoc 內嵌的，沒有自己的網址，
// 相對路徑會依外層頁面的網址解析。用絕對路徑「/vendor/...」在網站根目錄部署沒問題，
// 但部署到 GitHub Pages 這種「網站在子路徑下」（如 /yfsnew-report/）的環境會抓錯地方。
// ES module 的 import 路徑規格要求明確的 "./"、"../" 或 "/" 開頭，
// 光寫 "vendor/..."（無前綴的 bare specifier）瀏覽器會直接拒絕解析。
const THREE_MODULE_URL = './vendor/three-0.136.0.module.js';

// 場景原生的重點色是青色 0x00E5FF（核心發光體、環繞方塊、點光源共用）。
// CSS 的 hue-rotate 是矩陣近似，從青色轉到紅色會嚴重失真，
// 所以直接換掉材質顏色，拿到精確的永豐商店品牌紅。
const SOURCE_ACCENT = /0x00E5FF/g;
const BRAND_ACCENT = '0xD10F27';

// 核心原本是一個普通長方體（THREE.BoxGeometry(2, 4, 2)），等距鏡頭下看起來像六角柱。
// 換成永豐商店 logo 的五邊形房子外框，拉伸出立體感（ExtrudeGeometry），
// 比例是從 logo.png 實際量出來的：屋頂三角形佔整體高度約 40%，寬高比約 163:151。
const SOURCE_CORE_GEOMETRY = 'const coreGeo = new THREE.BoxGeometry(2, 4, 2);';

// logo 房子裡的四個白色幾何（左上圓、右上圓角方、左下圓角方、右下圓）。
// 位置與尺寸同樣是從 logo.png 量出來的像素座標換算成場景座標，
// 貼在房子朝向鏡頭那一面（z = +houseD/2）並稍微凸出，做成嵌板的感覺。
const SOURCE_CORE_ANCHOR = 'group.add(core);';
const CORE_WITH_LOGO_INLAYS = `group.add(core);

            // logo 內的白色幾何嵌板
            // 鏡頭在 (20, 20, 20)，平面上是 45 度角。把核心轉 45 度，
            // 讓房子正面（也就是 logo 那一面）正對鏡頭，四個白色幾何才不會被壓扁。
            core.rotation.y = Math.PI / 4;

            // 這一面背對主光源，受光材質會變灰。logo 的白色本來就是實心平塗，
            // 所以用不受光的 MeshBasicMaterial，維持乾淨的純白。
            const inlayMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
            const inlayDepth = 0.14;
            const roundedSquareShape = function (size, radius) {
                const s = new THREE.Shape();
                const h = size / 2, r = Math.min(radius, h);
                s.moveTo(-h + r, -h);
                s.lineTo(h - r, -h);
                s.quadraticCurveTo(h, -h, h, -h + r);
                s.lineTo(h, h - r);
                s.quadraticCurveTo(h, h, h - r, h);
                s.lineTo(-h + r, h);
                s.quadraticCurveTo(-h, h, -h, h - r);
                s.lineTo(-h, -h + r);
                s.quadraticCurveTo(-h, -h, -h + r, -h);
                return s;
            };
            const circleShape = function (radius) {
                const s = new THREE.Shape();
                s.absarc(0, 0, radius, 0, Math.PI * 2, false);
                return s;
            };
            const inlays = [
                { shape: circleShape(0.527),               x: -0.606, y: 1.987 },
                { shape: roundedSquareShape(0.922, 0.19),  x:  0.619, y: 1.974 },
                { shape: roundedSquareShape(0.922, 0.19),  x: -0.619, y: 0.829 },
                { shape: circleShape(0.527),               x:  0.632, y: 0.829 }
            ];
            inlays.forEach(function (item) {
                const geo = new THREE.ExtrudeGeometry(item.shape, {
                    depth: inlayDepth, bevelEnabled: false, curveSegments: 24
                });
                const mesh = new THREE.Mesh(geo, inlayMat);
                // 房子的頂點座標在平移前是 y 0..houseH，平移後整體下移 houseH / 2。
                mesh.position.set(item.x, item.y - houseH / 2, houseD / 2);
                core.add(mesh);
            });`;
const HOUSE_CORE_GEOMETRY = `const houseW = 4.32, houseH = 4, houseD = 2, roofY = houseH * 0.603;
            const houseShape = new THREE.Shape();
            houseShape.moveTo(-houseW / 2, roofY);
            houseShape.lineTo(0, houseH);
            houseShape.lineTo(houseW / 2, roofY);
            houseShape.lineTo(houseW / 2, 0);
            houseShape.lineTo(-houseW / 2, 0);
            houseShape.lineTo(-houseW / 2, roofY);
            const coreGeo = new THREE.ExtrudeGeometry(houseShape, { depth: houseD, bevelEnabled: false, curveSegments: 1 });
            coreGeo.translate(0, -houseH / 2, -houseD / 2);`;

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
  html = html.replace(SOURCE_CORE_GEOMETRY, HOUSE_CORE_GEOMETRY);
  html = html.replace(SOURCE_CORE_ANCHOR, CORE_WITH_LOGO_INLAYS);

  html = html.replace(/<script[^>]*cdn\.tailwindcss\.com[^>]*><\/script>/gi, '');
  html = html.replace(/<script[^>]*code\.iconify\.design[^>]*><\/script>/gi, '');
  html = html.replace(/<link[^>]*fonts\.googleapis\.com[^>]*>/gi, '');
  html = html.replace(/(<img[^>]*\s)src="https:\/\/images\.unsplash\.com[^"]*"/gi, '$1');

  html = html.replace(/<\/head>/i, `${ISOLATION_STYLE}</head>`);
  html = html.replace(/<\/body>/i, `${ISOLATION_SCRIPT}</body>`);

  return html;
}
