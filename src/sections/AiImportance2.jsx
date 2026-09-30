import Typewriter from '../components/Typewriter.jsx';
import RevealLines from './RevealLines.jsx';
import CrtTerminal from '../effects/crt/CrtTerminal.jsx';

// 使用者重寫過的版本（跟第 1 章痛點頁合併時一起改的）：四段、每段一個念頭，
// 段落自己在欄寬內折行。
const LINES = [
  '製作本地端系統，補足現有流程中的半自動化需求。',
  '只需保留必要的人工操作，其餘重複性工作交由系統自動計算或完成，讓同仁將時間投入在更需要判斷與決策的工作上。',
  '我認為可以透過統一的介面集中操作，整合原本分散的資料與流程，同時完整留存修改紀錄，降低人工操作與資料遺漏的風險。',
  '在不增加 IT 排程負擔的情況下，快速導入並看見實際效益，也減少長時間資料比對所造成的視覺疲勞。',
];

export default function AiImportance2({ active }) {
  return (
    <section className="ai ai--terminal slide-content">
      <div className="rail">
        <span className="rail-label">AI的重要性</span>
      </div>

      <div className="ai-body">
        <h2 className="thesis-heading">
          <Typewriter text="自主開發：流程優化" active={active} />
        </h2>
        <RevealLines lines={LINES} startDelay={0.5} active={active} />
      </div>

      <figure className="ai-figure">
        {/* 只在這一步顯示時才掛載，離開就卸載 —— 跟封面的 3D 場景、
            總覽的路線圖是同一套原則：不用的時候不要背景燒 GPU。 */}
        {active && (
          <CrtTerminal speed={1} typeSpeed={1.05} motion={0.85} hue={0} saturation={1} brightness={1} opacity={1} />
        )}
        <div className="claude-badge">
          <img src="claude-code-logo.png" alt="Claude Code" />
          <span>Claude Code · Anthropic</span>
        </div>
      </figure>
    </section>
  );
}
