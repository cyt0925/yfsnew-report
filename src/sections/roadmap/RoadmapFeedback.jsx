import Typewriter from '../../components/Typewriter.jsx';

// 上一頁是我自己讀 SOP 看出來的；這一頁換成營運端同事講的，
// 兩種來源都指向同一個結論——所以下一頁的「決定做系統」才站得住腳。
// 圖放右邊、跟前面幾頁（查找、前端操作）同一個排版邏輯：文字左、實證右。
const POINTS = [
  '從酷澎後台拉單、匯出到我們公司後台，抄過的單要再抄一次，還是不確定有沒有漏',
  '酷澎偷偷改了數量或交期，得靠肉眼比對才發現，常常倉庫都出貨了才知道',
  '驗收時兩邊數字對不起來',
];

export default function RoadmapFeedback({ active }) {
  const delay = (i) => (active ? { animationDelay: `${0.5 + i * 0.3}s` } : { opacity: 1, animation: 'none' });

  return (
    <section className="roadmap-detail slide-content">
      <div className="rail">
        <span className="rail-label">全貌</span>
      </div>

      <div className="roadmap-split-body">
        <h2 className="thesis-heading">
          <Typewriter text="結構有洞" active={active} />
        </h2>
        <p className="prose reveal-line" style={delay(0)}>
          營運端同事也反映過，SOP 上看不出來的是這幾件事。
        </p>

        <div className="point-list">
          {POINTS.map((p, i) => (
            <p key={p} className="point-line reveal-line" style={delay(1 + i)}>
              {p}
            </p>
          ))}
        </div>

        <p className="prose prose--accent reveal-line" style={delay(4)}>
          這三件事背後其實是同一個原因，流程本身沒有留下可以追的軌跡。
        </p>
      </div>

      <figure className="compare-panel roadmap-evidence-solo reveal-line" style={delay(1)}>
        <img src="shot-165840.png" alt="公槽裡的 PO 總表，實際長這樣" />
        <figcaption>公槽裡的 PO 總表，實際長這樣</figcaption>
      </figure>
    </section>
  );
}
