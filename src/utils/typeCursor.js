// 給需要「這句打完才接下一句」的頁面共用的小工具，避免每個檔案自己
// 手算一次「前面幾句的字數 * 速度 + 間隔」。呼叫一次 next(該行字數)
// 拿到這一行的起跑時間（毫秒），內部游標自動往後推。
export const SPEED = 14;
export const GAP = 120;

export function makeCursor(startSeconds = 0.5) {
  let cursor = startSeconds * 1000;
  return {
    next(len) {
      const delay = cursor;
      cursor += len * SPEED + GAP;
      return delay;
    },
    // 不推進游標，只看目前累積到哪——用在「文字打完之後」才要接的
    // 其他動畫（例如證據圖片、logo 點亮）算起跑秒數。
    peekSeconds(extraMs = 0) {
      return (cursor + extraMs) / 1000;
    },
  };
}
