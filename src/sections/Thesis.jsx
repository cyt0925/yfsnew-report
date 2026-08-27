import Typewriter from '../components/Typewriter.jsx';
import IsoDiagram from './IsoDiagram.jsx';

// 內文斷句斷在「一個讀得完的念頭」上，不是機械式數字數斷行——
// 逐行浮現時，每次出現的都是完整的一句，不會停在奇怪的地方讓人等下一行。
const PAIN_LINES = [
  '團隊每日花費大量時間，處理重複性資料搬移、人工核對與跨系統作業。',
  '當優秀的人力被困在繁瑣的例行事務中，',
  '不僅無形中消耗了工作熱情，也限制了團隊投入高價值業務開拓的空間。',
];

const SOLUTION_LINES = [
  '梳理跨部門與跨系統的銜接點，',
  '串接半自動化輔助工具與自動化串流。',
  '讓資料順暢流轉、減少無謂的人工轉手，',
  '打造高效率且具備彈性的敏捷協作架構。',
];

function RevealLines({ lines, startDelay = 0.5, active }) {
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

export default function Thesis({ revealed, active }) {
  return (
    <section className="thesis slide-content">
      <div className="rail">
        <span className="rail-label">我的觀察</span>
      </div>

      <div className="thesis-body">
        <div className="thesis-block">
          <h2 className="thesis-heading">
            <Typewriter text="作業重複的日常消耗" active={active} />
          </h2>
          <RevealLines lines={PAIN_LINES} startDelay={0.55} active={active} />
        </div>

        {revealed ? (
          <div className="thesis-block thesis-block--solution">
            <h2 className="thesis-heading">
              <Typewriter text="讓自動化成為營運與業務的常態" active />
            </h2>
            <RevealLines lines={SOLUTION_LINES} startDelay={0.85} active />
          </div>
        ) : (
          <p className="thesis-hint">／ 下一頁揭曉作法</p>
        )}
      </div>

      <figure className="thesis-figure">
        <IsoDiagram variant="scatter" className={revealed ? 'iso-hidden' : 'iso-visible'} />
        <IsoDiagram variant="converge" className={revealed ? 'iso-visible' : 'iso-hidden'} />
      </figure>
    </section>
  );
}
