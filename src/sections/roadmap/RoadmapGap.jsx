import Typewriter from '../../components/Typewriter.jsx';
import { makeCursor, SPEED } from '../../utils/typeCursor.js';

// 這一頁是轉場的起點：做 SOP 檢索網站不是只上線就結束，
// 上線之後我自己也在用，讀著讀著就讀出了問題——這是酷澎系統的起點，
// 不是憑空冒出來的規劃，是從自己做的東西裡發現的。
const FLOW = [
  '平台建立PO',
  '檢視PO類型',
  '修改退貨資訊',
  '新PO匯入處理系統',
  '通知同仁分線別拉取',
  'PO彙總統合',
  '依回覆於時效內更改PO狀態及內容',
];

// 這三步是同一條「要繞三手」的路徑：先在酷澎那頭建單、
// 進我們系統批次匯入、最後又落回公槽的 Excel 手抄——用紅框把
// 這條隱藏的動線標出來，不用另外畫圖說明。
const KEY_STEPS = new Set(['平台建立PO', '新PO匯入處理系統', 'PO彙總統合']);

const LEAD_LINES = [
  '營運人員和我反應「PO 彙總統合」這步，全靠在共用 Excel 上反覆手動抄寫、層層疊加紀錄。',
  '要先去酷澎後台抓單，再到我們公司系統批次匯入，最後才回到公槽的 PO 總表 Excel 把新單抄進去——這中間繞了三手。',
];

const ACCENT_LINE =
  '對應 SOP 網站上，酷澎 PO 單確認作業流程（SOP-CP-CP-001）這份文件，步驟寫的是打開公槽那個 PO 總表 Excel，把新單抄進去，確實驗證了營運端所反應的情況。';

export default function RoadmapGap({ active }) {
  const cursor = makeCursor(0.5);
  const leadDelays = LEAD_LINES.map((line) => cursor.next(line.length));
  // 流程鏈是圖表，不是句子，逐字打反而讓箭頭跟步驟名稱脫節看不懂——
  // 維持整排一起淡入，只是起跑點接在前兩句打完之後。
  const flowDelaySeconds = cursor.peekSeconds(150);
  const accentDelay = cursor.next(ACCENT_LINE.length);
  const evidenceDelaySeconds = cursor.peekSeconds(200);
  const evidenceStyle = active
    ? { animationDelay: `${evidenceDelaySeconds}s` }
    : { opacity: 1, animation: 'none' };

  return (
    <section className="roadmap-detail slide-content">
      <div className="rail">
        <span className="rail-label">全貌</span>
      </div>

      <div className="roadmap-lead">
        <h2 className="thesis-heading">
          <Typewriter text="關鍵步驟缺乏系統支撐" active={active} />
        </h2>
        {LEAD_LINES.map((line, i) => (
          <p key={line} className="prose">
            <Typewriter text={line} active={active} speed={SPEED} startDelay={leadDelays[i]} />
          </p>
        ))}

        <p
          className="flow-chain reveal-line"
          style={active ? { animationDelay: `${flowDelaySeconds}s` } : { opacity: 1, animation: 'none' }}
        >
          {FLOW.map((step, i) => (
            <span key={step}>
              <span className={KEY_STEPS.has(step) ? 'flow-step flow-step--key' : 'flow-step'}>
                {step}
              </span>
              {i < FLOW.length - 1 && <span className="flow-arrow"> → </span>}
            </span>
          ))}
        </p>

        <p className="prose prose--accent">
          <Typewriter text={ACCENT_LINE} active={active} speed={SPEED} startDelay={accentDelay} />
        </p>
      </div>

      <div className="roadmap-evidence reveal-line" style={evidenceStyle}>
        <figure className="compare-panel">
          <img src="po-sop.png" alt="酷澎 PO 單確認作業流程，SOP-CP-CP-001 的目的與流程總覽" />
          <figcaption>SOP-CP-CP-001，目的與流程總覽</figcaption>
        </figure>
        <figure className="compare-panel">
          <img src="shot-165832.png" alt="步驟二的細節，路徑指向公槽裡的 PO 總表" />
          <figcaption>步驟二的細節，路徑指向公槽裡的 PO 總表</figcaption>
        </figure>
      </div>
    </section>
  );
}
