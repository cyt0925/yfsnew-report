import { useEffect, useState } from 'react';

/**
 * 逐字打出來的效果——現在整份簡報的標題跟內文都靠這個元件，不只標題。
 *
 * 幾個實務上必須處理的細節：
 * 1. 台上如果講快了想直接翻頁，不能被動畫卡住 —— active 一旦變 false
 *    （這張投影片離開時），立刻顯示完整文字，不強迫看完動畫。
 * 2. 靠 setInterval 逐字加字數，而不是 CSS animation-steps，
 *    是因為 CJK 字元寬度不一致，steps() 平均切格會讓字元跳動的節奏忽快忽慢。
 * 3. startDelay：多行文字要「一行接一行」打出來時，靠這個錯開起跑時間。
 *    在真的開始打字之前，游標完全不顯示（typewriter-cursor--pending）——
 *    不然還沒輪到的那幾行會同時閃著游標乾等，看起來像當機。
 *
 * segments（第四個細節）：預設吃一整串 text，效果跟最早的版本一樣。
 * 有時句子中間一段要上色或加粗（例如關鍵字），還不能被瀏覽器從中間斷行——
 * 這種情況改傳 segments，每個 segment 可以帶 className（上色/加粗），
 * 並用 nowrapWith: true 跟「前一個」segment 黏成同一個不可斷行的區塊。
 */
export default function Typewriter({ text, segments, speed = 26, active = true, startDelay = 0 }) {
  const parts = segments || [{ text }];
  const fullText = parts.map((p) => p.text).join('');
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(startDelay <= 0);

  useEffect(() => {
    if (!active) {
      setCount(fullText.length);
      setStarted(true);
      return undefined;
    }
    setCount(0);
    setStarted(startDelay <= 0);
    let intervalId;
    const timeoutId = setTimeout(() => {
      setStarted(true);
      intervalId = setInterval(() => {
        setCount((c) => {
          if (c + 1 >= fullText.length) {
            clearInterval(intervalId);
            return fullText.length;
          }
          return c + 1;
        });
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [fullText, active, speed, startDelay]);

  const done = count >= fullText.length;

  // 把每個 segment 算出可見片段，再依 nowrapWith 把相鄰片段黏成群組；
  // 只有群組內超過一個 segment 時才包一層 white-space:nowrap，
  // 單一 segment（包含最常見的「沒有 segments prop、直接傳 text」）
  // 完全不包 nowrap，跟原本的斷行行為一模一樣。
  let consumed = 0;
  const visibleParts = parts.map((p) => {
    const start = consumed;
    consumed += p.text.length;
    const visibleLen = Math.max(0, Math.min(p.text.length, count - start));
    return { className: p.className, nowrapWith: p.nowrapWith, str: p.text.slice(0, visibleLen) };
  });

  const groups = [];
  visibleParts.forEach((p) => {
    if (p.nowrapWith && groups.length > 0) {
      groups[groups.length - 1].push(p);
    } else {
      groups.push([p]);
    }
  });

  const cursorClass = [
    'typewriter-cursor',
    !started && 'typewriter-cursor--pending',
    done && 'typewriter-cursor--done',
  ]
    .filter(Boolean)
    .join(' ');

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
      <span className={cursorClass} aria-hidden="true" />
    </span>
  );
}
