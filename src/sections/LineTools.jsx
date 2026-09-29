import Typewriter from '../components/Typewriter.jsx';
import { LINE_TOOLS, LINE_TOOLS_INTRO, LINE_TOOLS_NOTE, LINE_TOOLS_MENU } from '../data/lineTools.js';

// 第 7 章、也是最後一章：待完成的線別工具。一頁講完。
//
// 版面是 grid 四列：
//   列 1：標題。
//   列 2：引言＋「紙潔：準備中」（左 7 格），「線別工具」選單裁圖（右 5 格）。
//         那張裁圖只有 486×87，跟左邊兩行字一樣高，不會撐高這一列。
//   列 3：寶僑（左 6 格）／瑪氏（右 6 格）的文字卡：LOGO → 工具名 +「待開發」→ 現況 → 目標。
//   列 4：兩個工具的畫面截圖。
// 選單圖曾經是整個首頁截圖（1419×353），太佔高度拿掉過一次；現在這張是只裁
// 選單本身，才放得回來。
// 截圖跟文字卡是不同的 grid 子項，不是同一張卡裡的最後一塊：這樣兩張截圖天生
// 就在同一列、上緣切齊；文字量不同的差距落在列 3 的下方，不會把截圖推上推下。
// 兩張截圖再鎖同一個比例（P&G 那張的 1883:566），瑪氏那張 contain 進去、上下
// 各留 16px 深色邊，下緣也就齊了，而且沒有裁掉任何內容。
// 紙潔還在準備中，不開卡。
//
// 這頁字多圖多，內文用 1.35rem（比功能頁的 1.6rem 小一階），1920×963 才塞得下；
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
          <Typewriter
            segments={[
              { text: '待完成', className: 'heading-accent' },
              { text: '的線別工具' },
            ]}
            active={active}
          />
        </h2>
      </div>

      <div className="line-tools-intro reveal-line" style={delay(0)}>
        <p className="prose">{LINE_TOOLS_INTRO}</p>
        <p className="line-tools-note">{LINE_TOOLS_NOTE}</p>
      </div>

      <figure className="line-tools-menu reveal-line" style={delay(0)}>
        <img src={LINE_TOOLS_MENU.src} alt={LINE_TOOLS_MENU.alt} />
      </figure>

      {LINE_TOOLS.map((tool, i) => (
        <article
          key={tool.id}
          className={`line-tool line-tool--${tool.id} reveal-line`}
          style={delay(1 + i)}
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
        </article>
      ))}

      {LINE_TOOLS.map((tool, i) => (
        <figure
          key={`${tool.id}-shot`}
          className={`compare-panel line-tool-shot line-tool-shot--${tool.id} reveal-line`}
          style={delay(1 + i)}
        >
          <img src={tool.shot.src} alt={tool.shot.alt} />
        </figure>
      ))}
    </section>
  );
}
