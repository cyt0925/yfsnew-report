import Typewriter from '../components/Typewriter.jsx';

// 總結頁（線別工具之後、謝謝大家之前）：不重講功能，講「做這些事的核心概念」。
//
// 版面：上面一句概念當大標題；下面一條進度軌道，把整份簡報的東西排成一條線——
//   亮紅實線 = 已經做到的（SOP 網站 → 訂單管理系統 → 延伸應用），
//   灰色虛線 = 還沒到的（各線別工具），
//   軌道終點 = 目標。
// 軌道下面兩個括號把「做到了／還差」各用一句話講完，對應使用者要的
// 「做到了……即便現在離目標還……」那種說法，但用圖講，不靠整段文字。
//
// 節點的副標刻意用「看懂流程／變成系統／延伸應用」這種概念詞，不寫「已上線」
// 之類的狀態——訂單管理系統的實際上線狀態沒有確認過，不要替使用者宣稱。
const NODES = [
  { name: 'SOP 檢索網站', sub: '看懂流程', done: true },
  { name: '酷澎訂單管理系統', sub: '變成系統', done: true },
  { name: '簽名・採購表轉換', sub: '延伸應用', done: true, now: true },
  { name: '寶僑・瑪氏工具', sub: '待開發', done: false },
  { name: '紙潔', sub: '準備中', done: false },
];

export default function Summary({ active }) {
  const delay = (i) => (active ? { animationDelay: `${0.6 + i * 0.18}s` } : { opacity: 1, animation: 'none' });

  return (
    <section className={`summary slide-content${active ? ' is-active' : ''}`}>
      <div className="rail">
        <span className="rail-label">總結</span>
      </div>

      <div className="summary-head">
        <span className="tag">我做這些事的核心</span>
        <h2 className="thesis-heading">
          <Typewriter
            segments={[
              { text: '先把流程看懂，' },
              { text: '再把它變成系統', className: 'heading-accent' },
            ]}
            active={active}
          />
        </h2>
      </div>

      <div className="summary-map">
        <ol className="summary-track">
          {NODES.map((n, i) => (
            <li
              key={n.name}
              className={`summary-node ${n.done ? 'summary-node--done' : 'summary-node--todo'}${n.now ? ' summary-node--now' : ''} reveal-line`}
              style={delay(i)}
            >
              <span className="summary-dot" aria-hidden="true" />
              {n.now && <span className="summary-now">現在在這裡</span>}
              <span className="summary-name">{n.name}</span>
              <span className="summary-sub">{n.sub}</span>
            </li>
          ))}
          <li className="summary-node summary-node--goal reveal-line" style={delay(NODES.length)}>
            <span className="summary-dot" aria-hidden="true" />
            <span className="summary-name">目標</span>
            <span className="summary-goal">重複的事交給系統，<br />人只做需要判斷的事</span>
          </li>
        </ol>

        <div className="summary-brace summary-brace--done reveal-line" style={delay(NODES.length + 1)}>
          <span className="summary-brace-label">做到了</span>
          <p>流程有地方看、修改留下紀錄、改單會被標出來</p>
        </div>
        <div className="summary-brace summary-brace--todo reveal-line" style={delay(NODES.length + 2)}>
          <span className="summary-brace-label">還差</span>
          <p>各線別的重複作業，還要一條條搬進系統</p>
        </div>
      </div>
    </section>
  );
}
