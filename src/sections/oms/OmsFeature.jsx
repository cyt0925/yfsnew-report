import Typewriter from '../../components/Typewriter.jsx';

// 五個核心功能共用同一個模板：為什麼要做 → 怎麼操作 → 做到了什麼。
// how 可以是一句話（prose）或一串步驟（編號列表）；points 一律是條列，
// 每條有粗體的一句話標題 + 一句補充說明，不用另外畫圖或截圖也讀得快。
export default function OmsFeature({
  n, kicker = '酷澎訂單管理系統', title, why, how, points, tip, note, active,
}) {
  const delay = (i) => (active ? { animationDelay: `${0.5 + i * 0.2}s` } : { opacity: 1, animation: 'none' });
  const howSteps = Array.isArray(how) ? how : null;
  let idx = 0;

  return (
    <section className="oms slide-content">
      <div className="rail">
        <span className="rail-index">02</span>
        <span className="rail-label">{kicker}</span>
      </div>

      <div className="oms-head">
        <span className="tag oms-kicker">功能 {n}</span>
        <h2 className="thesis-heading">
          <Typewriter text={title} active={active} />
        </h2>
        {note && <p className="oms-note">{note}</p>}
      </div>

      <div className="oms-block reveal-line" style={delay(idx++)}>
        <span className="tag">為什麼要做</span>
        <p className="prose">{why}</p>
      </div>

      <div className="oms-block reveal-line" style={delay(idx++)}>
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

      <div className="oms-block oms-block--points reveal-line" style={delay(idx++)}>
        <span className="tag">做到了什麼</span>
        <ul className="oms-points">
          {points.map((p) => (
            <li key={p.lead} className="oms-point">
              <b>{p.lead}</b>{p.text}
            </li>
          ))}
        </ul>
      </div>

      {tip && (
        <div className="oms-tip reveal-line" style={delay(idx++)}>
          <span className="oms-tip-label">現場亮點</span>
          <p>{tip}</p>
        </div>
      )}
    </section>
  );
}
