import Typewriter from '../../components/Typewriter.jsx';

// 收尾：跟 SopJudgement 同一種「整頁只留幾句話」的節奏——
// 前兩頁鋪了觀察跟同事回饋，這裡收成一個決定，字大、留白多。
export default function RoadmapDecision({ active }) {
  const delay = (i) => (active ? { animationDelay: `${0.5 + i * 0.45}s` } : { opacity: 1, animation: 'none' });

  return (
    <section className="roadmap-detail slide-content">
      <div className="rail">
        <span className="rail-label">全貌</span>
      </div>

      <div className="sop-head sop-head--narrow">
        <h2 className="thesis-heading">
          <Typewriter text="所以，決定做系統" active={active} />
        </h2>
      </div>

      <div className="verdict">
        <p className="verdict-line reveal-line" style={delay(0)}>
          SOP 已經把該做什麼寫得很清楚了，
          <br />
          缺的不是規範，是<b>維持這條流程的東西</b>。
        </p>
        <p className="verdict-line verdict-line--sub reveal-line" style={delay(1)}>
          現在維持它的是人的細心和記憶，這並不可靠。
          <br />
          所以我決定，把 SOP 裡靠人維持的環節，換成靠<em>系統</em>維持。
        </p>
        <p className="prose prose--accent verdict-tagline reveal-line" style={delay(2)}>
          SOP 繼續負責定義規則，系統負責確保規則真的被執行、而且留得下紀錄。
        </p>
      </div>
    </section>
  );
}
