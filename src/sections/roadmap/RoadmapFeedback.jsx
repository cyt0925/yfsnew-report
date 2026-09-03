import Typewriter from '../../components/Typewriter.jsx';

// 上一頁是我自己讀 SOP 看出來的；這一頁換成營運端同事講的，
// 兩種來源都指向同一個結論——所以下一頁的「決定做系統」才站得住腳。
// 三句回饋沿用跟 SOP 痛點頁一樣的大字卡片，圖放最下面、放大——
// 這張截圖本身就是證據，值得佔滿版面。
const POINTS = [
  { index: '01', text: '從酷澎後台拉單、匯出到我們公司後台，抄過的單要再抄一次，還是不確定有沒有漏' },
  { index: '02', text: '酷澎偷偷改了數量或交期，得靠肉眼比對才發現，常常倉庫都出貨了才知道' },
  { index: '03', text: '驗收時兩邊數字對不起來' },
];

export default function RoadmapFeedback({ active }) {
  const delay = (i) => (active ? { animationDelay: `${0.5 + i * 0.3}s` } : { opacity: 1, animation: 'none' });

  return (
    <section className="roadmap-detail slide-content">
      <div className="rail">
        <span className="rail-label">全貌</span>
      </div>

      <div className="sop-head">
        <h2 className="thesis-heading">
          <Typewriter text="缺乏追蹤與防呆機制" active={active} />
        </h2>
      </div>

      <div className="findings">
        {POINTS.map((p, i) => (
          <article
            key={p.index}
            className="finding reveal-line"
            style={active ? { animationDelay: `${0.55 + i * 0.3}s` } : { opacity: 1, animation: 'none' }}
          >
            <span className="finding-index">{p.index}</span>
            <h3>{p.text}</h3>
          </article>
        ))}
      </div>

      <p className="prose prose--accent roadmap-detail-lede reveal-line" style={delay(3)}>
        這三件事背後其實是同一個原因，流程本身沒有留下可以追的軌跡。
      </p>

      <figure className="compare-panel roadmap-evidence-below reveal-line" style={delay(4)}>
        <img src="shot-165840.png" alt="公槽裡的 PO 總表，實際長這樣" />
        <figcaption>公槽裡的 PO 總表，實際長這樣</figcaption>
      </figure>
    </section>
  );
}
