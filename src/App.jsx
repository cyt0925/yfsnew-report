import { useCallback, useEffect, useState } from 'react';
import LogicCore from './effects/logic-core/LogicCore.jsx';
import Thesis from './sections/Thesis.jsx';
import ToolSection from './sections/ToolSection.jsx';
import { tools } from './data/tools.js';
import './index.css';

function Hero({ active }) {
  return (
    <section className="hero slide">
      <div className="hero-sphere">
        {/* 只在這張投影片顯示時才掛載 3D 場景。翻頁後場景仍在背景跑動畫，
            白白吃掉效能，在低階顯示晶片或投影機上還可能拖慢翻頁動畫本身。 */}
        {active && <LogicCore />}
      </div>

      <svg className="hero-house" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M50,3 L95,34 L95,97 L5,97 L5,34 Z" />
      </svg>

      <div className="hero-scrim" />

      <div className="brand-mark">
        <img src="logo.png" alt="永豐商店" />
        <span>YFS</span>
      </div>

      <div className="hero-content">
        <p className="eyebrow">儲備幹部試用期報告</p>
        <h1>敏捷營運</h1>
        <h2>永豐商店 SOP 優化與實務落地</h2>
        <div className="divider" />
        <div className="meta">
          <span><b>Jerry Tsai</b> 蔡政穎</span>
        </div>
      </div>
    </section>
  );
}

const SLIDES = ['hero', 'thesis', ...tools.map((t) => t.id)];
const SLIDE_COUNT = SLIDES.length;

export default function App() {
  const [index, setIndex] = useState(0);

  const go = useCallback((delta) => {
    setIndex((i) => Math.min(Math.max(i + delta, 0), SLIDE_COUNT - 1));
  }, []);

  useEffect(() => {
    function onKeyDown(e) {
      if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault();
        go(1);
      } else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        go(-1);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [go]);

  return (
    <div className="deck">
      {/* translateX 用「軌道自身寬度」的百分比，不用 vw：
          vw 是視窗單位，實測在翻頁動畫進行中配合背景 WebGL 場景時，
          瀏覽器合成執行緒偶爾會用到過期的視窗寬度，導致翻頁差了整整一頁的距離、
          前一張投影片的邊緣穿幫。百分比是相對軌道本身版面計算，不吃這個問題。 */}
      <div
        className="deck-track"
        style={{
          width: `${SLIDE_COUNT * 100}vw`,
          transform: `translateX(-${index * (100 / SLIDE_COUNT)}%)`,
        }}
      >
        <Hero active={index === 0} />
        <div className="slide">
          <Thesis />
        </div>
        {tools.map((tool) => (
          <div className="slide" key={tool.id}>
            <ToolSection tool={tool} />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="deck-nav deck-nav--prev"
        onClick={() => go(-1)}
        disabled={index === 0}
        aria-label="上一頁"
      >
        ‹
      </button>
      <button
        type="button"
        className="deck-nav deck-nav--next"
        onClick={() => go(1)}
        disabled={index === SLIDE_COUNT - 1}
        aria-label="下一頁"
      >
        ›
      </button>

      <div className="deck-counter">
        {String(index + 1).padStart(2, '0')} / {String(SLIDE_COUNT).padStart(2, '0')}
      </div>
    </div>
  );
}
