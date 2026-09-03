import { useEffect, useRef } from 'react';
import Typewriter from '../../components/Typewriter.jsx';

// 五個核心功能共用同一個模板：為什麼要做 → 怎麼操作 → 做到了什麼。
// how 可以是一句話（prose）或一串步驟（編號列表）；points 一律是條列，
// 每條有粗體的一句話標題 + 一句補充說明，不用另外畫圖或截圖也讀得快。
//
// 有 video 的功能頁（目前只有「上傳整合表」）改走左右分欄：左邊放
// 為什麼要做／做到了什麼，右邊是示範影片，操作步驟直接掛在影片下緣
// 當字幕條——步驟講的就是畫面正在做的事，兩者貼在一起讀最省版面，
// 也不用再為「怎麼操作」單獨留一整塊。
export default function OmsFeature({
  n, kicker = '酷澎訂單管理系統', title, why, how, points, note, video, videoLabel, active,
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
    <div className="oms-block reveal-line" style={delay(video ? 0 : 1)}>
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
    <div className="oms-block oms-block--points reveal-line" style={delay(video ? 1 : 2)}>
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

  if (video) {
    return (
      <section className="oms oms-feature--split slide-content">
        <div className="rail">
          <span className="rail-index">02</span>
          <span className="rail-label">{kicker}</span>
        </div>

        {head}

        <div className="oms-col-left">
          {whyBlock}
          {pointsBlock}
        </div>

        <div className="oms-col-right">
          <div className="oms-block reveal-line" style={delay(0)}>
            <span className="tag">怎麼操作</span>
            <figure className={`oms-video-figure${active ? ' is-active' : ''}`}>
              <div className="oms-video-card">
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
                {/* 步驟編號用 CSS counter 產生，不寫死在文字裡：條目增減
                    都不用回來改號碼。 */}
                {howSteps && (
                  <ol className="oms-video-steps">
                    {howSteps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                )}
              </div>
            </figure>
          </div>
          {!howSteps && howBlock}
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
