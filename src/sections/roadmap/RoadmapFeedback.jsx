import Typewriter from '../../components/Typewriter.jsx';

// 上一頁是我自己讀 SOP 看出來的；這一頁換成營運端同事講的，
// 兩種來源都指向同一個結論——所以下一頁的「決定做系統」才站得住腳。
//
// 版面分左右兩欄：
//   左欄（8 格）由上到下：三句回饋 → 一句結論 → 營運人員自己記的 Excel 總表。
//     Excel 那張 1624×568，放這裡可以維持原比例不裁；走滿版要 479px 高，
//     得把右邊的篩選選單裁掉，而那個選單（8/19下修、8/20-Y、8/21-Y新…）
//     正是「改了又改」的證據。
//   右欄（4 格）：營運同仁的 LINE 對話截圖，跟三句回饋齊頭放在原本空著的
//     右上角。它是「營運的無奈」——回饋是條列、對話是語氣，兩個放一起才完整。
const POINTS = [
  { index: '01', text: '從酷澎後台拉單、匯出到我們公司後台，抄過的單要再抄一次，還是不確定有沒有漏' },
  { index: '02', text: '酷澎偷偷改了數量或交期，得靠肉眼比對才發現，常常倉庫都出貨了才知道' },
  { index: '03', text: '驗收時兩邊數字對不起來' },
];

export default function RoadmapFeedback({ active }) {
  const delay = (i) => (active ? { animationDelay: `${0.5 + i * 0.3}s` } : { opacity: 1, animation: 'none' });

  return (
    <section className="roadmap-detail roadmap-feedback slide-content">
      <div className="rail">
        <span className="rail-label">全貌</span>
      </div>

      <div className="sop-head">
        <h2 className="thesis-heading">
          <Typewriter text="缺乏追蹤與防呆機制" active={active} />
        </h2>
      </div>

      <div className="feedback-main">
        <div className="findings findings--stacked">
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

        <figure className="compare-panel feedback-sheet reveal-line" style={delay(4)}>
          <img
            src="roadmap-excel-sheet.png"
            alt="營運人員自己紀錄的 Excel 總表：每張 PO 的改單、拉單狀態用底色跟備註手動標記，篩選選單裡是一長串 8/21-Y新、8/24-Y新 之類的版本標籤"
          />
          <figcaption>
            營運人員自己紀錄的 Excel 總表
            <span className="cap-sub">改單、拉單，原先都是靠這張表在看</span>
          </figcaption>
        </figure>
      </div>

      <figure className="compare-panel feedback-chat reveal-line" style={delay(2)}>
        <img
          src="roadmap-line-chat.png"
          alt="營運同仁的 LINE 對話：如果再調整就會標示 8/21-Y新，第 3 次 8/21-Y新1、第 4 次 8/21-Y新2 依此類推，直到出貨前一天才能走出這個永無止盡的修改地域"
        />
        <figcaption>營運同仁的對話紀錄</figcaption>
      </figure>
    </section>
  );
}
