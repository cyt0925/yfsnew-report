import Typewriter from '../components/Typewriter.jsx';
import RevealLines from './RevealLines.jsx';
import IsoDiagram from './IsoDiagram.jsx';

const LINES = [
  '團隊每日花費大量時間，處理重複性資料搬移、人工核對與跨系統作業。',
  '當優秀的人力被困在繁瑣的例行事務中，',
  '不僅無形中消耗了工作熱情，也限制了團隊投入高價值業務開拓的空間。',
];

export default function ThesisPain({ active }) {
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
          <RevealLines lines={LINES} startDelay={0.55} active={active} />
        </div>
      </div>

      <figure className="thesis-figure">
        <IsoDiagram variant="scatter" className="iso-visible" />
      </figure>
    </section>
  );
}
