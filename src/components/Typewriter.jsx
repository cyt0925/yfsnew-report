import { useEffect, useState } from 'react';

/**
 * 逐字打出來的標題效果。
 *
 * 兩個實務上必須處理的細節：
 * 1. 台上如果講快了想直接翻頁，不能被動畫卡住 —— active 一旦變 false
 *    （這張投影片離開時），立刻顯示完整文字，不強迫看完動畫。
 * 2. 靠 setInterval 逐字加字數，而不是 CSS animation-steps，
 *    是因為 CJK 字元寬度不一致，steps() 平均切格會讓字元跳動的節奏忽快忽慢。
 */
export default function Typewriter({ text, speed = 55, active = true }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setCount(text.length);
      return;
    }
    setCount(0);
    const id = setInterval(() => {
      setCount((c) => {
        if (c + 1 >= text.length) {
          clearInterval(id);
          return text.length;
        }
        return c + 1;
      });
    }, speed);
    return () => clearInterval(id);
  }, [text, active, speed]);

  const done = count >= text.length;

  return (
    <span aria-label={text}>
      <span aria-hidden="true">{text.slice(0, count)}</span>
      <span className={`typewriter-cursor${done ? ' typewriter-cursor--done' : ''}`} aria-hidden="true" />
    </span>
  );
}
