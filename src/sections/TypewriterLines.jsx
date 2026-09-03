import Typewriter from '../components/Typewriter.jsx';

// 內文逐句「打」出來，取代原本 RevealLines 的整行淡入——
// 斷句斷在「一個讀得完的念頭」上，不是機械式數字數斷行，逐句出現時
// 每次浮現的都是完整的一句，不會停在奇怪的地方讓人等下一句。
// 每一行接著前一行的預估打完時間起跑（字數 * 速度 + 行間停頓），
// 讀起來像一台終端機把整段話依序打出來，不是好幾行同時各自跑。
const SPEED = 14;
const LINE_GAP = 120;

// 給需要在這段話打完之後接東西的頁面用（例如 AiImportance3 打完
// 才點亮下面的 logo）——回傳秒數，跟元件內部算的起跑時間共用同一套公式，
// 才不會兩邊各自猜一個數字、時間對不上。
export function typewriterLinesDuration(lines, startDelay = 0.5) {
  const totalMs = lines.reduce((sum, line) => sum + line.length * SPEED + LINE_GAP, 0);
  return startDelay + totalMs / 1000;
}

export default function TypewriterLines({ lines, startDelay = 0.5, active }) {
  let cumulative = startDelay * 1000;
  return (
    <div className="reveal-lines">
      {lines.map((line) => {
        const delay = cumulative;
        cumulative += line.length * SPEED + LINE_GAP;
        return (
          <p key={line} className="prose">
            <Typewriter text={line} active={active} speed={SPEED} startDelay={delay} />
          </p>
        );
      })}
    </div>
  );
}
