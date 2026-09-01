import { tools } from '../../data/tools.js';

const tool = tools.find((t) => t.id === 'sop-search');

// 章節的開場：大標題在左、圖在右。原本的「卡住的地方／怎麼解」
// 是 ToolSection 通用模板的欄位，SOP 這一章已經拆成五步驟自己講完
// 那個故事，這裡不用再重複，開場只留標題、狀態、跟一句最短的定位。
export default function SopTitle({ active }) {
  return (
    <section className="sop sop-title slide-content">
      <div className="rail">
        <span className="rail-index">{tool.index}</span>
        <span className="rail-label">{tool.kicker}</span>
      </div>

      <div className="sop-title-body">
        <header className="tool-head">
          <h2>{tool.name}</h2>
          <span className={`status status--${tool.status === '已上線' ? 'live' : 'wip'}`}>
            {tool.status}
          </span>
        </header>
        <p className="prose sop-title-lede">
          把散落在各處的作業流程，收成一個查得到、比得出、改得動的入口。
        </p>
      </div>

      {/* 這張是單一張平面 PNG，裡面的房子、資料夾、放大鏡沒辦法各自動起來。
          但畫面本來就有一圈紅色循環箭頭，所以與其讓整張圖漂來漂去，
          不如把那圈箭頭延伸成真的會轉的軌道：兩圈反向緩轉的虛線環，
          外圈掛一顆巡弋的紅點——那就是「檢索」這件事的視覺化。 */}
      <figure className={`sop-title-figure${active ? ' is-active' : ''}`}>
        <svg className="sop-orbit" viewBox="0 0 200 200" aria-hidden="true">
          <circle className="sop-orbit-ring sop-orbit-ring--outer" cx="100" cy="100" r="95" />
          <circle className="sop-orbit-ring sop-orbit-ring--inner" cx="100" cy="100" r="80" />
          <g className="sop-orbit-scanner">
            <circle cx="100" cy="5" r="3" />
          </g>
        </svg>
        <img src="sop-hero.png" alt="SOP 檢索網站" />
      </figure>
    </section>
  );
}
