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

      {/* 圖示本身不會動，所以拿它當「入口」：一圈虛線軌道先轉起來，
          接著整個圖示縮小、飛向左上角，同一個位置長出真正的網站介面——
          等於是在說「這不是一張示意圖，是一個做出來的東西」。停留幾秒後
          再收回圖示，循環播放，不需要真人操作也能看懂那句「查得到」。 */}
      <figure className={`sop-title-figure${active ? ' is-active' : ''}`}>
        <div className="sop-title-stage">
          <div className="sop-title-icon-layer">
            <svg className="sop-orbit" viewBox="0 0 200 200" aria-hidden="true">
              <circle className="sop-orbit-ring sop-orbit-ring--outer" cx="100" cy="100" r="95" />
              <circle className="sop-orbit-ring sop-orbit-ring--inner" cx="100" cy="100" r="80" />
              <g className="sop-orbit-scanner">
                <circle cx="100" cy="5" r="3" />
              </g>
            </svg>
            <img src="sop-hero.png" alt="SOP 檢索網站" />
          </div>

          <div className="sop-title-webmock-layer" aria-hidden="true">
            <div className="wm">
              <div className="wm-header">
                <span className="wm-header-icon" />
                <div className="wm-header-text">
                  <span className="wm-title" />
                  <span className="wm-sub" />
                </div>
                <div className="wm-stats">
                  <span /><span /><span /><span />
                </div>
              </div>
              <div className="wm-toolbar">
                <span className="wm-search" />
                <span className="wm-tab wm-tab--active" />
                <span className="wm-tab" />
              </div>
              <div className="wm-body">
                <div className="wm-sidebar">
                  <span className="wm-filter-title" />
                  <span className="wm-chip" />
                  <span className="wm-chip" />
                  <span className="wm-chip" />
                  <span className="wm-filter-title" />
                  <span className="wm-chip" />
                  <span className="wm-chip" />
                </div>
                <div className="wm-list">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div className="wm-row" key={i}>
                      <span className="wm-row-title" style={{ '--w': `${72 - i * 6}%` }} />
                      <span className="wm-tag wm-tag--a" />
                      <span className="wm-tag wm-tag--b" />
                      {i % 2 === 0 && <span className="wm-tag wm-tag--c" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </figure>
    </section>
  );
}
