import Typewriter from '../components/Typewriter.jsx';
import { LINE_TOOLS, LINE_TOOLS_INTRO, LINE_TOOLS_MENU } from '../data/lineTools.js';

// 第 7 章、也是最後一章：待完成的線別工具。一頁講完。
//
// 版面兩層：
//   上層左右——引言（左）＋ 訂單管理系統首頁那個「線別工具」下拉選單截圖（右），
//   先讓人知道這些工具掛在哪、有哪三條線。
//   下層左右——寶僑（左）／瑪氏（右）各一張卡：LOGO → 工具名 +「待開發」→
//   現況 → 目標 → 那個工具的畫面截圖。兩張卡結構一樣，看的人可以左右對照。
// 紙潔還在準備中，不另外開一張卡，只在上層那張選單截圖裡自然帶到。
//
// 這頁字多圖多，內文用 1.25rem（比功能頁的 1.6rem 小兩階），1920×963 才塞得下；
// 筆電尺寸靠 useFitSteps 縮。
export default function LineTools({ active }) {
  const delay = (i) => (active ? { animationDelay: `${0.5 + i * 0.2}s` } : { opacity: 1, animation: 'none' });

  return (
    <section className="oms line-tools slide-content">
      <div className="rail">
        <span className="rail-index">04</span>
        <span className="rail-label">線別工具</span>
      </div>

      <div className="oms-head line-tools-head">
        <h2 className="thesis-heading">
          <Typewriter text="待完成的線別工具" active={active} />
        </h2>
      </div>

      <p className="prose line-tools-intro reveal-line" style={delay(0)}>
        {LINE_TOOLS_INTRO}
      </p>

      <figure className="compare-panel line-tools-menu reveal-line" style={delay(1)}>
        <img src={LINE_TOOLS_MENU.src} alt={LINE_TOOLS_MENU.alt} />
        <figcaption>訂單管理系統首頁的「線別工具」選單</figcaption>
      </figure>

      {LINE_TOOLS.map((tool, i) => (
        <article
          key={tool.id}
          className={`line-tool line-tool--${tool.id} reveal-line`}
          style={delay(2 + i)}
        >
          <header className="line-tool-head">
            {/* LOGO 放在白色小卡上：兩張都是透明底，直接放深色版面上一張看得清
                一張看不清（P&G 的藍在深底上很暗），白底才一致，也跟系統選單的
                白卡對得上 */}
            <span className="line-tool-logo">
              <img src={tool.logo.src} alt={tool.logo.alt} />
            </span>
            <h3 className="line-tool-name">
              {tool.name}
              <span className="line-tool-status">{tool.status}</span>
            </h3>
          </header>

          <div className="line-tool-block">
            <span className="tag">現況</span>
            <p className="prose">{tool.now}</p>
          </div>

          <div className="line-tool-block">
            <span className="tag">目標</span>
            <p className="prose">{tool.goal}</p>
          </div>

          <figure className="compare-panel line-tool-shot">
            <img src={tool.shot.src} alt={tool.shot.alt} />
          </figure>
        </article>
      ))}
    </section>
  );
}
