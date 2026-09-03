import Typewriter from '../components/Typewriter.jsx';
import TypewriterLines, { typewriterLinesDuration } from './TypewriterLines.jsx';

const LINES = [
  '在等功能更新或是平台開放 API 的同時，',
  '思考如何透過 AI 輔助，著手進行數位轉型。',
  '把流程想清楚，AI 就能當那個幫你把想法接起來的工作夥伴。',
  '將複雜的事情視覺化，最終一定能達到自動化。',
];

export default function AiImportance3({ active }) {
  // logo 通電閃爍跟這句收尾話同一刻一起亮起，兩個元素共用同一個延遲數字——
  // 現在內文改成逐字打，每行實際耗時不再是固定值，改用跟 TypewriterLines
  // 同一套公式反推「這幾行打完的時間」，兩邊才會真的對上。
  const closingDelay = typewriterLinesDuration(LINES, 0.5) + 0.35;

  return (
    <section className="ai slide-content">
      <div className="rail">
        <span className="rail-label">AI的重要性</span>
      </div>

      <div className="ai-body">
        <h2 className="thesis-heading">
          <Typewriter
            segments={[
              { text: '善用' },
              { text: 'Claude Code', className: 'claude-accent', nowrapWith: true },
              { text: '將想法變成即戰力' },
            ]}
            active={active}
          />
        </h2>
        <TypewriterLines lines={LINES} startDelay={0.5} active={active} />
        <p className="ai-closing">
          <Typewriter
            segments={[
              { text: '藉由 ' },
              { text: 'CC', className: 'claude-accent' },
              { text: ' 輔助，加速自動化邁進。' },
            ]}
            active={active}
            speed={32}
            startDelay={closingDelay * 1000}
          />
        </p>
      </div>

      <figure
        className={`ai-figure ai-figure--logo${active ? ' is-active' : ''}`}
        style={active ? { '--ignite-delay': `${closingDelay}s` } : undefined}
      >
        <img src="claude-code-logo.png" alt="Claude Code" />
      </figure>
    </section>
  );
}
