import RoadmapScene from './RoadmapScene.jsx';
import { tools } from '../data/tools.js';

export default function RoadmapOverview({ active }) {
  return (
    <section className="roadmap">
      <div className="roadmap-rail">
        <span className="rail-label">全貌</span>
        <h2 className="thesis-heading roadmap-heading">
          從觀察到落地的{tools.length}個切入點
        </h2>
      </div>
      <div className="roadmap-stage">{active && <RoadmapScene />}</div>
    </section>
  );
}
