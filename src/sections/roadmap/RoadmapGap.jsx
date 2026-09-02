import Typewriter from '../../components/Typewriter.jsx';

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

export default function RoadmapGap({ active }) {
  const delay = (i) => (active ? { animationDelay: `${0.5 + i * 0.3}s` } : { opacity: 1, animation: 'none' });

  return (
    <section className="roadmap-detail slide-content">
      <div className="rail">
        <span className="rail-label">全貌</span>
      </div>

      <div className="roadmap-lead">
        <h2 className="thesis-heading">
          <Typewriter text="PO彙總統合，底下沒有系統" active={active} />
        </h2>
        <p className="prose reveal-line" style={delay(0)}>
          做 SOP 檢索網站的時候，酷澎 PO 單確認作業流程（SOP-CP-CP-001）這份文件我讀了很多次。
        </p>

        <p className="flow-chain reveal-line" style={delay(1)}>
          {FLOW.map((step, i) => (
            <span key={step}>
              <span className={step === 'PO彙總統合' ? 'flow-step flow-step--key' : 'flow-step'}>
                {step}
              </span>
              {i < FLOW.length - 1 && <span className="flow-arrow"> → </span>}
            </span>
          ))}
        </p>

        <p className="prose prose--accent reveal-line" style={delay(2)}>
          PO彙總統合這六個字，底下沒有系統。步驟寫的是打開公槽那個 PO 總表 Excel，把新單抄進去。
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
