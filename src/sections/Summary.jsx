import Typewriter from '../components/Typewriter.jsx';

// 總結頁（線別工具之後、謝謝大家之前）：不重講功能，講做這些事的核心概念。
// 版面跟 SOP「我個人的想法是」那頁同一套（.verdict）：小標、一句大字＋紅字、
// 一段小字＋底線關鍵詞。文案是使用者定的（核心句要有 Input／Output）。
// 曾經做過一版「進度軌道」圖解，使用者看過後改回純文字。
export default function Summary({ active }) {
  const delay = (i) => (active ? { animationDelay: `${0.5 + i * 0.45}s` } : { opacity: 1, animation: 'none' });

  return (
    <section className="sop sop-judgement summary slide-content">
      <div className="rail">
        <span className="rail-label">總結</span>
      </div>

      <div className="sop-head sop-head--narrow">
        <h2 className="thesis-heading">
          <Typewriter text="總結" active={active} />
        </h2>
      </div>

      <div className="verdict summary-verdict">
        <p className="verdict-line reveal-line" style={delay(0)}>
          {/* 在逗號處手動斷三行：不斷的話 1920 寬會把「Output，」單獨擠到第二行 */}
          我目前在做的事情，
          <br />
          都是先釐清每個流程的 <em>Input</em> 跟 <em>Output</em>，
          <br />
          <b>再把中間重複的步驟交給系統</b>。
        </p>
        <p className="verdict-line verdict-line--sub reveal-line" style={delay(1)}>
          我做到的，是把原本只存在某個人腦袋裡、或某張 Excel 裡的流程，變成<em>大家都看得到</em>、<em>改了會留紀錄</em>的東西。
          <br />
          即便現在離完整的自動化還很遠，<span className="nowrap">寶僑、瑪氏、紙潔的工具</span>也都還沒做完，但方向已經確定了，接下來就是一條一條搬進來。
        </p>
      </div>
    </section>
  );
}
