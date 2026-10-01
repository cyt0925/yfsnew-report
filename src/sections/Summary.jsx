import Typewriter from '../components/Typewriter.jsx';

// 總結頁（線別工具之後、謝謝大家之前）：不重講功能，講做這些事的核心概念。
// 版面跟 SOP「我個人的想法是」那頁同一套（.verdict）：小標、一句大字＋紅字、
// 一段小字＋底線關鍵詞。文案是使用者定的（核心句要有 Input／Output）。
// 曾經做過一版「進度軌道」圖解，使用者看過後改回純文字；後來使用者給了一張
// 插圖（summary-illustration.jpg，原檔 1536×1024 壓到 1200 寬），放右邊空白處，
// 文字收到左邊 7 格。插圖借用痛點頁筆電圖那套 .ai-figure--image（四邊羽化＋
// 掃描進場＋慢速浮動），兩張圖首尾呼應。
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
        {/* 斷行是手動排的：在逗號處斷，紅字那句再從「步驟，」後面斷一次，
            不然寬螢幕會把幾個字單獨擠到下一行。 */}
        <p className="verdict-line reveal-line" style={delay(0)}>
          我認為目前所做的一切，
          <br />
          不外乎都是為了一個目標
          <br />
          就是重新釐清流程的 <em>Input</em> 與 <em>Output</em>，
          <br />
          <b>再找出中間可被系統化、標準化的重複步驟，</b>
          <br />
          <b>逐步交由系統處理</b>。
        </p>
        <p className="verdict-line verdict-line--sub reveal-line" style={delay(1)}>
          我希望做到的，是把原本只存在於個人經驗或 Excel 裡的流程，轉化成<em>視覺化</em>、<em>能共同維護</em>，<em>能保有紀錄</em>的系統化流程。
        </p>
        <p className="verdict-line verdict-line--sub summary-closing reveal-line" style={delay(2)}>
          即使目前距離完整自動化還有一段距離，但只要善用 AI，同時保有自己的思考，系統終究能成為流程的一部分。
        </p>
      </div>

      <figure className={`summary-figure ai-figure--image${active ? ' is-active' : ''}`}>
        <img
          src="summary-illustration.jpg"
          alt="坐在筆電前思考的人，左邊是散落的 Excel 與文件，右邊是流程圖、儀表板跟 AI 助手"
        />
      </figure>
    </section>
  );
}
