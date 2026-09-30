
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
// 進我們系統批次匯入、最後又落回各線別自己的 Excel 手抄——用紅框把
// 這條隱藏的動線標出來，不用另外畫圖說明。
const KEY_STEPS = new Set(['平台建立PO', '新PO匯入處理系統', 'PO彙總統合']);

export default function RoadmapGap({ active }) {
  const delay = (i) => (active ? { animationDelay: `${0.5 + i * 0.3}s` } : { opacity: 1, animation: 'none' });

  return (
    <section className="roadmap-detail slide-content">
      <div className="rail">
        <span className="rail-label">全貌</span>
      </div>

      {/* 這頁沒有大標題（使用者拿掉的）：開頭直接講營運端的流程，底下流程鏈
          用紅框標出繞三手的那三步，再一句話點出「SOP 文件寫的就是這件事」。 */}
      <div className="roadmap-lead roadmap-lead--untitled">
        {/* 三個加粗的動作就是底下流程鏈紅框的那三步（建單 → 匯入 → 回 Excel），
            文字跟圖用同一組重點互相對照；「非常繁瑣」標主色當這段的落點。 */}
        <p className="prose roadmap-intro reveal-line" style={delay(0)}>
          營運人員和我反應，他們要先去<b>酷澎後台抓單</b>，再到<b>我們公司系統批次匯入</b>，最後依據線別<b>回到各自製作的 Excel 做紀錄</b>，<em className="roadmap-intro-hot">非常繁瑣</em>。
        </p>

        <p className="flow-chain reveal-line" style={delay(1)}>
          {FLOW.map((step, i) => (
            <span key={step}>
              <span className={KEY_STEPS.has(step) ? 'flow-step flow-step--key' : 'flow-step'}>
                {step}
              </span>
              {i < FLOW.length - 1 && <span className="flow-arrow"> → </span>}
            </span>
          ))}
        </p>

        {/* 這句是整頁的重點（使用者要求強調）：字級比內文大一階、文件名用
            主色標紅，讓「營運講的 = SOP 寫的」這個對應一眼就抓到。 */}
        <p className="prose prose--accent roadmap-callout reveal-line" style={delay(2)}>
          以上的情況，剛好對應到 SOP 網站上，
          <b className="roadmap-callout-doc">酷澎 PO 單確認作業流程（SOP-CP-CP-001）</b>
          這份文件
        </p>
      </div>

      <div className="roadmap-evidence reveal-line" style={delay(3)}>
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
