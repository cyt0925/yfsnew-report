// 內文逐句淡入。斷句斷在「一個讀得完的念頭」上，不是機械式數字數斷行——
// 逐行浮現時，每次出現的都是完整的一句，不會停在奇怪的地方讓人等下一行。
export default function RevealLines({ lines, startDelay = 0.5, active }) {
  return (
    <div className="reveal-lines">
      {lines.map((line, i) => (
        <p
          key={line}
          className="prose reveal-line"
          style={active ? { animationDelay: `${startDelay + i * 0.28}s` } : { opacity: 1, animation: 'none' }}
        >
          {line}
        </p>
      ))}
    </div>
  );
}
