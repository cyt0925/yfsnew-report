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

      <figure className="sop-title-figure">
        <img src="sop-hero.png" alt="SOP 檢索網站" />
      </figure>
    </section>
  );
}
