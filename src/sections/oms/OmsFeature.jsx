import { useEffect, useRef } from 'react';
import Typewriter from '../../components/Typewriter.jsx';

// 五個核心功能共用同一個模板：為什麼要做 → 怎麼操作 → 做到了什麼。
// how 可以是一句話（prose）或一串步驟（編號列表）；points 一律是條列，
// 每條有粗體的一句話標題 + 一句補充說明，不用另外畫圖或截圖也讀得快。
//
// 版面預設是左右分欄（layout="split"）：左邊放為什麼要做／做到了什麼，
// 右邊是示範影片，「怎麼操作」直接掛在影片下緣當字幕條——講的就是畫面
// 正在做的事，兩者貼在一起讀最省版面，也不用再為它單獨留一整塊。
// 影片還沒補上的功能一樣走這個版面，右欄先放同比例的佔位卡，之後把
// video 欄位填進 omsFeatures.js 就會自動換成真的影片，版面不用再動。
//
// layout="stacked" 是原本的滿版堆疊版面，留給第 6、7 章（簽名、採購表）：
// 那兩章是獨立產品、條目也比較多（簽名頁有 5 條），分欄後的 1.6rem 會爆版。
export default function OmsFeature({
  n, kicker = '酷澎訂單管理系統', title, why, how, points, note,
  video, videoLabel, layout = 'split', active,
}) {
  const delay = (i) => (active ? { animationDelay: `${0.5 + i * 0.2}s` } : { opacity: 1, animation: 'none' });
  const howSteps = Array.isArray(how) ? how : null;
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (active) {
      v.currentTime = 0;
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [active]);

  const head = (
    <div className="oms-head">
      <span className="tag oms-kicker">功能 {n}</span>
      <h2 className="thesis-heading">
        <Typewriter text={title} active={active} />
      </h2>
      {note && <p className="oms-note">{note}</p>}
    </div>
  );

  const whyBlock = (
    <div className="oms-block reveal-line" style={delay(0)}>
      <span className="tag">為什麼要做</span>
      <p className="prose">{why}</p>
    </div>
  );

  const howBlock = (
    <div className="oms-block reveal-line" style={delay(1)}>
      <span className="tag">怎麼操作</span>
      {howSteps ? (
        <ol className="oms-steps">
          {howSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      ) : (
        <p className="prose">{how}</p>
      )}
    </div>
  );

  const pointsBlock = (
    <div
      className="oms-block oms-block--points reveal-line"
      style={delay(layout === 'split' ? 1 : 2)}
    >
      <span className="tag">做到了什麼</span>
      <ul className="oms-points">
        {points.map((p) => (
          <li key={p.lead} className="oms-point">
            <b>{p.lead}</b>{p.text}
          </li>
        ))}
      </ul>
    </div>
  );

  if (layout === 'split') {
    return (
      <section className="oms oms-feature--split slide-content">
        <div className="rail">
          <span className="rail-index">02</span>
          <span className="rail-label">{kicker}</span>
        </div>

        {/* 標題收進左欄，右欄從同一條上緣起跑：「怎麼操作」對齊「功能 01」，
            影片上緣就對齊大標題，兩邊像同一列的兩個格子。 */}
        <div className="oms-col-left">
          {head}
          {whyBlock}
          {pointsBlock}
        </div>

        <div className="oms-col-right">
          <div className="oms-block reveal-line" style={delay(0)}>
            <span className="tag">怎麼操作</span>
            <figure className={`oms-video-figure${active ? ' is-active' : ''}`}>
              <div className="oms-video-card">
                {video ? (
                  <video
                    ref={videoRef}
                    className="oms-video"
                    src={video}
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-label={videoLabel || `${title}操作示範`}
                  />
                ) : (
                  <div className="oms-video oms-video--pending" role="img" aria-label={`${title}操作示範（影片待補）`}>
                    <span className="oms-video-pending-mark" aria-hidden="true" />
                    <span className="oms-video-pending-label">示範影片</span>
                  </div>
                )}
                {/* 敘述貼在影片下緣。步驟編號用 CSS counter 產生，不寫死在
                    文字裡：條目增減都不用回來改號碼。how 只有一句話的功能
                    （02、03）就直接放成一段字，不硬套成只有一項的編號列表。 */}
                {howSteps ? (
                  <ol className="oms-video-steps">
                    {howSteps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                ) : (
                  <div className="oms-video-steps oms-video-steps--prose">
                    <p>{how}</p>
                  </div>
                )}
              </div>
            </figure>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="oms slide-content">
      <div className="rail">
        <span className="rail-index">02</span>
        <span className="rail-label">{kicker}</span>
      </div>

      {head}
      {whyBlock}
      {howBlock}
      {pointsBlock}
    </section>
  );
}
