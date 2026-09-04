# 簡報（yfsnew-report）

**開工前先讀 [`HANDOVER.md`](HANDOVER.md)** —— 為什麼這樣做、踩過的坑、還沒做完的事都在那。
這份只放最容易踩錯的幾條，細節不重複。

## 這是什麼

Vite + React 做的簡報，給主管月會報告用。二維導覽：左右鍵換章節，上下鍵在章節內換步驟，共 8 章。

簡報在講的系統是**另一個 repo** `cyt0925/yfs`（SOP 檢索網站 + 酷澎訂單管理系統），
本機在 `../sop` 和 `../coupang`。

## 紅線

- **改酷澎那幾頁的文案前，先去讀 `../coupang/coupang-oms/README.md` 跟實際程式碼。**
  簡報寫過的內容都跟程式碼核對過，不要憑印象改——之前寫錯過一次（見 HANDOVER.md 第四節）。
- **不要自己改使用者寫的文案**，要調先討論。
- 敘事是連著的，第 4 章「全貌」是**轉場**不是目錄，不要當目錄搬走。

## 開發

```bash
npm install
npm run dev

npm run shot                    # 逐頁截圖 + 版面檢查（全部 24 頁 × 三種尺寸，約 5 分鐘）
npm run shot -- --only 5        # 只截第 5 章（約 50 秒）
npm run shot -- --only 5.2,3.1  # 只截指定的 章.步驟
```

- 開發分支：`claude/artifacts-vs-claude-code-lyit8u`
- 部署：**GitHub Pages 的 `gh-pages` 分支**（README 寫的 Netlify 已過時），
  用 worktree 手動推，步驟見 HANDOVER.md 第五節。推完提醒使用者 Ctrl+F5。
- 線上：<https://cyt0925.github.io/yfsnew-report/>

## 合作方式

- 改完要**實際跑起來用 Playwright 截圖確認**排版，不要只看程式碼就說做好了。
  用 `npm run shot`（`scripts/shot.mjs`），不要每次重寫一次性的截圖腳本——
  那支腳本裡記了兩個很容易踩的量測陷阱，重寫大概率會再踩一次。
  改哪一章就 `--only <章>`，不用每次掃全部。
- 使用者對版面很敏感，會逐頁檢查。
- 溝通用繁體中文。
