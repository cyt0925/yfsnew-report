import Typewriter from '../components/Typewriter.jsx';
import RevealLines from './RevealLines.jsx';
import IsoDiagram from './IsoDiagram.jsx';

const LINES = [
  '梳理跨部門與跨系統的銜接點，',
  '串接半自動化輔助工具與自動化串流。',
  '讓資料順暢流轉、減少無謂的人工轉手，',
  '打造高效率且具備彈性的敏捷協作架構。',
];

export default function ThesisSolution({ active }) {
  return (
    <section className="thesis slide-content">
      <div className="rail">
        <span className="rail-label">我的觀察</span>
      </div>

      <div className="thesis-body">
        <div className="thesis-block thesis-block--solution">
          <h2 className="thesis-heading">
            <Typewriter text="讓自動化成為營運與業務的常態" active={active} />
          </h2>
          <RevealLines lines={LINES} startDelay={0.55} active={active} />
        </div>
      </div>

      <figure className="thesis-figure">
        <IsoDiagram variant="converge" className="iso-visible" />
      </figure>
    </section>
  );
}
