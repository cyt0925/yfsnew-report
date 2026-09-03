import Typewriter from '../../components/Typewriter.jsx';
import { makeCursor, SPEED } from '../../utils/typeCursor.js';

// 這四張都是真的畫面截圖（不是我畫的示意圖）：46 份文件人工讀過一輪後，
// 歸納出「一般出貨」「酷澎出貨」兩條主幹，每條主幹配一張主線圖（共用步驟
// 一條串到底）跟一張細節圖（比對哪個通路缺了什麼步驟／酷澎那條特有的
// PO 生命週期怎麼跟主幹接上）。兩條主幹用同一個節奏排版，方便對照著看。
const ROWS = [
  {
    tag: '一般出貨',
    panels: [
      { src: 'general-main.png', caption: '主線圖：27 份通路出貨 SOP 共用的 8 個步驟' },
      { src: 'general-compare.png', caption: '比對圖：哪個通路多了或少了哪一步，一眼看出來' },
    ],
  },
  {
    tag: '酷澎出貨',
    panels: [
      { src: 'coupang-main.png', caption: '主線圖：酷澎訂單獨有的 PO 生命週期' },
      { src: 'coupang-stage.png', caption: '階段圖：單一階段的細節與延伸文件' },
    ],
  },
];

export default function SopCompare({ active }) {
  const cursor = makeCursor(0.5);
  const bodyLines = [
    '比對 27 份出貨 SOP，把各通路和品牌的做法收斂成「一般出貨」與「酷澎出貨」兩大主幹，先建立共同基準。',
    '用視覺化把大家負責的線別攤開對照，呈現哪個通路多了特殊步驟、哪份漏了某個環節，目標概念是像一張流程體檢表，能更精準抓出可以優化的地方。',
    '（先以手邊現有資料做第一輪對照，部分細節若有出入，會再找負責的同仁核對調整。）',
  ];
  const bodyDelays = bodyLines.map((line) => cursor.next(line.length));
  const galleryStart = cursor.peekSeconds(200);
  const delay = (i) => (active ? { animationDelay: `${galleryStart + i * 0.3}s` } : { opacity: 1, animation: 'none' });

  return (
    <section className="sop sop-compare slide-content">
      <div className="rail">
        <span className="rail-index">01</span>
        <span className="rail-label">SOP檢索網站</span>
      </div>

      <div className="sop-head">
        <h2 className="thesis-heading">
          <Typewriter text="視覺化跨線對比，釐清核心邏輯" active={active} />
        </h2>
      </div>

      <div className="sop-compare-body">
        <p className="prose">
          <Typewriter text={bodyLines[0]} active={active} speed={SPEED} startDelay={bodyDelays[0]} />
        </p>
        <p className="prose">
          <Typewriter text={bodyLines[1]} active={active} speed={SPEED} startDelay={bodyDelays[1]} />
        </p>
        <p className="prose prose--accent">
          <Typewriter text={bodyLines[2]} active={active} speed={SPEED} startDelay={bodyDelays[2]} />
        </p>
      </div>

      <div className="compare-gallery">
        {ROWS.map((row, ri) => (
          <div key={row.tag} className="compare-row reveal-line" style={delay(ri)}>
            <span className="tag">{row.tag}</span>
            <div className="compare-imgs">
              {row.panels.map((p) => (
                <figure key={p.src} className="compare-panel">
                  <img src={p.src} alt={p.caption} />
                  <figcaption>{p.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
