import { useEffect, useState } from 'react';

/**
 * 逐字打出來的標題效果。
 *
 * 兩個實務上必須處理的細節：
 * 1. 台上如果講快了想直接翻頁，不能被動畫卡住 —— active 一旦變 false
 *    （這張投影片離開時），立刻顯示完整文字，不強迫看完動畫。
 * 2. 靠 setInterval 逐字加字數，而不是 CSS animation-steps，
 *    是因為 CJK 字元寬度不一致，steps() 平均切格會讓字元跳動的節奏忽快忽慢。
 *
 * 第三個細節（segments）：預設吃一整串 text，效果跟以前完全一樣。
 * 有時標題中間一段要上色（例如英文品牌詞），還不能被瀏覽器從中間斷行——
 * 這種情況改傳 segments，每個 segment 可以帶 className（上色），
 * 並用 nowrapWith: true 跟「前一個」segment 黏成同一個不可斷行的區塊
 * （只有明講 nowrapWith 的才會被包進 nowrap，沒特別要求的 segment
 *  維持正常斷行，不影響其他地方單純傳 text 的用法）。
 */
export default function Typewriter({ text, segments, speed = 55, active = true }) {
  const parts = segments || [{ text }];
  const fullText = parts.map((p) => p.text).join('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setCount(fullText.length);
      return;
    }
    setCount(0);
    const id = setInterval(() => {
      setCount((c) => {
        if (c + 1 >= fullText.length) {
          clearInterval(id);
          return fullText.length;
        }
        return c + 1;
      });
    }, speed);
    return () => clearInterval(id);
  }, [fullText, active, speed]);

  const done = count >= fullText.length;

  // 把每個 segment 算出可見片段，再依 nowrapWith 把相鄰片段黏成群組；
  // 只有群組內超過一個 segment 時才包一層 white-space:nowrap，
  // 單一 segment（包含最常見的「沒有 segments prop、直接傳 text」）
  // 完全不包 nowrap，跟原本的斷行行為一模一樣。
  let consumed = 0;
  const visibleParts = parts.map((p, i) => {
    const start = consumed;
    consumed += p.text.length;
    const visibleLen = Math.max(0, Math.min(p.text.length, count - start));
    return { className: p.className, nowrapWith: p.nowrapWith, str: p.text.slice(0, visibleLen) };
  });

  const groups = [];
  visibleParts.forEach((p, i) => {
    if (p.nowrapWith && groups.length > 0) {
      groups[groups.length - 1].push(p);
    } else {
      groups.push([p]);
    }
  });

  return (
    <span aria-label={fullText}>
      <span aria-hidden="true">
        {groups.map((g, gi) => {
          const spans = g.map((p, pi) => (
            <span key={pi} className={p.className}>
              {p.str}
            </span>
          ));
          return g.length > 1 ? (
            <span key={gi} style={{ whiteSpace: 'nowrap' }}>
              {spans}
            </span>
          ) : (
            <span key={gi} className={g[0].className}>
              {g[0].str}
            </span>
          );
        })}
      </span>
      <span className={`typewriter-cursor${done ? ' typewriter-cursor--done' : ''}`} aria-hidden="true" />
    </span>
  );
}
