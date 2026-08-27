import LogicCore from './effects/logic-core/LogicCore.jsx';
import Thesis from './sections/Thesis.jsx';
import ToolSection from './sections/ToolSection.jsx';
import { tools } from './data/tools.js';
import './index.css';

export default function App() {
  return (
    <>
      <section className="hero">
        <div className="hero-sphere">
          <LogicCore />
        </div>

        <svg className="hero-house" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path d="M50,3 L95,34 L95,97 L5,97 L5,34 Z" />
        </svg>

        <div className="hero-scrim" />

        <div className="brand-mark">
          <img src="logo.png" alt="永豐商店" />
          <span>YungFeng Store</span>
        </div>

        <div className="hero-content">
          <p className="eyebrow">儲備幹部試用期報告</p>
          <h1>敏捷營運</h1>
          <h2>永豐商店 SOP 優化與實務落地</h2>
          <div className="divider" />
          <div className="meta">
            <span><b>04</b> 自動化工具</span>
            <span><b>2026</b> 試用期報告</span>
          </div>
        </div>

        <div className="scroll-cue">
          <span className="line" />
          <span>SCROLL</span>
        </div>
      </section>

      <main className="report">
        <Thesis />
        {tools.map((tool) => (
          <ToolSection key={tool.id} tool={tool} />
        ))}
      </main>
    </>
  );
}
