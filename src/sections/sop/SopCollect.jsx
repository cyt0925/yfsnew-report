import Typewriter from '../../components/Typewriter.jsx';

// 「集中」跟「查得到」放同一頁：這兩件事是基礎工程，
// 真正的差異點在下一頁的「比得出」，所以這裡不佔兩張投影片的篇幅。
// 46 / 500 兩個數字獨立出來放大——那是這一頁唯一需要被記住的東西。
const BLOCKS = [
  {
    tag: '集中',
    lines: [
      '把部門散落各處的作業流程，收攏成一套統一結構：目的、角色職責、逐步驟操作、附圖、異常處理。',
      '不是把 Word 貼上網，是拆成一致的格式——格式一致，內容才搜得到、才比得了。',
    ],
  },
  {
    tag: '查得到',
    lines: [
      '打關鍵字就找：退貨、補貨、嘜頭、EIP、缺貨，直接跳到那一步。',
      '也能依品牌、通路、出貨模式、物流方式篩選。想知道走竹運的有哪幾份，兩個點擊就出來。',
    ],
  },
];

const STATS = [
  { value: '46', unit: '份', label: '收錄 SOP' },
  { value: '500', unit: '張+', label: '操作截圖' },
];

export default function SopCollect({ active }) {
  return (
    <section className="sop sop-collect slide-content">
      <div className="rail">
        <span className="rail-index">01</span>
        <span className="rail-label">SOP檢索網站</span>
      </div>

      <div className="sop-head">
        <h2 className="thesis-heading">
          <Typewriter text="先做「集中」，才有後面的事" active={active} />
        </h2>
      </div>

      <div className="sop-blocks">
        {BLOCKS.map((b, i) => (
          <div
            key={b.tag}
            className="sop-block reveal-line"
            style={active ? { animationDelay: `${0.55 + i * 0.4}s` } : { opacity: 1, animation: 'none' }}
          >
            <span className="tag">{b.tag}</span>
            {b.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        ))}
      </div>

      <div className="sop-stats">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className="sop-stat reveal-line"
            style={active ? { animationDelay: `${1.5 + i * 0.22}s` } : { opacity: 1, animation: 'none' }}
          >
            <span className="sop-stat-value">
              {s.value}
              <span className="sop-stat-unit">{s.unit}</span>
            </span>
            <span className="sop-stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
