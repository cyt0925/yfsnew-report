import Typewriter from '../components/Typewriter.jsx';
import RoadmapScene from './RoadmapScene.jsx';

export default function RoadmapOverview({ active }) {
  return (
    <section className="roadmap">
      <div className="roadmap-rail">
        <span className="rail-label">全貌</span>
        <h2 className="thesis-heading roadmap-heading">
          <Typewriter text="把流程變成實作的過程" active={active} />
        </h2>
      </div>
      <div className="roadmap-stage">{active && <RoadmapScene />}</div>
    </section>
  );
}
