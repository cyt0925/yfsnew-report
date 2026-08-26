# 敏捷營運：永豐商店 SOP 優化與實務落地

儲備幹部試用期報告的互動式簡報網站。

## 開發

```bash
npm install
npm run dev      # 本機預覽
npm run build    # 產出靜態檔案到 dist/
npm run preview  # 預覽 build 結果
```

## 部署

`npm run build` 後把整個 `dist/` 資料夾拖到 Netlify 即可，不需要額外設定。

## 品牌配色

取自 `public/logo.png`：

| 用途 | 色碼 |
| --- | --- |
| 主色（紅） | `#D10F27` |
| 底色（黑） | `#0A0A0B` |
| 文字（白） | `#F5F2EE` |

## 封面 3D 效果

封面的等距（isometric）核心場景來自 [`@designcodeio/threeui`](https://www.npmjs.com/package/@designcodeio/threeui)（MIT）的
Logic Core，程式碼放在 `src/effects/logic-core/`。

原版是一整頁示範網站，執行時會去外部 CDN 抓 three.js、Tailwind、圖示與示範圖片，
而 3D 場景只是頁面裡一張卡片中的一小塊。這裡做了三件事把它變成可獨立運作的背景：

1. **three.js 改成站內自帶**（`public/vendor/three-0.136.0.module.js`），其餘外部資源全部移除，
   整頁離線也能跑，不會因為 CDN 故障或公司網路阻擋而開天窗。
2. **把場景元素搬到最上層鋪滿畫面**，其餘示範內容隱藏。
   （是「搬出來」而不是隱藏外層 — 祖先元素一旦 `display:none`，裡面的場景也會跟著消失。）
3. **材質顏色直接換成品牌紅** `#D10F27`。原本用 CSS `hue-rotate` 濾鏡調色，
   但那是矩陣近似，從場景原生的青色轉到紅色會嚴重失真，改材質才能拿到精確的品牌色。
