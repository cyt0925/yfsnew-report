import { useEffect, useRef } from 'react';
import Typewriter from '../../components/Typewriter.jsx';

// 五個核心功能共用同一個模板：為什麼要做 → 怎麼操作 → 做到了什麼。
// how 可以是一句話（prose）或一串步驟（編號列表）；points 一律是條列，
// 每條有粗體的一句話標題 + 一句補充說明，不用另外畫圖或截圖也讀得快。
//
// 有 video 的功能頁（目前只有「上傳整合表」）改走左右分欄：左邊放
// 為什麼要做／做到了什麼，右邊把「怎麼操作」跟示範影片放在一起——
// 操作步驟本來就是影片裡發生的事，文字負責講清楚畫面在做什麼。
export default function OmsFeature({
  n, kicker = '酷澎訂單管理系統', title, why, how, points, tip, note, video, videoLabel, active,
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

  const tipBlock = tip && (
    <div className="oms-tip reveal-line" style={delay(video ? 2 : 3)}>
      <span className="oms-tip-label">現場亮點</span>
      <p>{tip}</p>
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
          {tipBlock}
        </div>

        <div className="oms-col-right">
          {howBlock}
          <figure className={`oms-video-figure${active ? ' is-active' : ''}`}>
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
          </figure>
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
      {tipBlock}
    </section>
  );
}
