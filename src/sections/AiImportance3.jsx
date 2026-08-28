import Typewriter from '../components/Typewriter.jsx';
import RevealLines from './RevealLines.jsx';

const LINES = [
  '在等大預算或是平台哪天開放 API 的同時，也能著手進行數位轉型。',
  '把流程想清楚，AI 就能當那個幫你把想法接起來的系統架構夥伴。',
  '將複雜的事情視覺化，最終一定能達到自動化。',
];

export default function AiImportance3({ active }) {
  return (
    <section className="ai ai--wide slide-content">
      <div className="rail">
        <span className="rail-label">AI的重要性</span>
      </div>

      <div className="ai-body">
        <h2 className="thesis-heading">
          <Typewriter text="所以結論是" active={active} />
        </h2>
        <RevealLines lines={LINES} startDelay={0.5} active={active} />
        <p
          className="ai-closing reveal-line"
          style={active ? { animationDelay: `${0.5 + LINES.length * 0.28 + 0.35}s` } : { opacity: 1, animation: 'none' }}
        >
          <b>AI</b> 讓我做到了這件事。
        </p>
      </div>
    </section>
  );
}
