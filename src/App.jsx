import { useCallback, useEffect, useRef, useState } from 'react';
import LogicCore from './effects/logic-core/LogicCore.jsx';
import ThesisPain from './sections/ThesisPain.jsx';
import ThesisSolution from './sections/ThesisSolution.jsx';
import AiImportance1 from './sections/AiImportance1.jsx';
import AiImportance2 from './sections/AiImportance2.jsx';
import AiImportance3 from './sections/AiImportance3.jsx';
import RoadmapOverview from './sections/RoadmapOverview.jsx';
import ToolSection from './sections/ToolSection.jsx';
import { tools } from './data/tools.js';
import './index.css';

function Hero({ active }) {
  return (
    <section className="hero">
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
        <h1>AI 流程再造</h1>
        <h2>永豐商店 SOP 優化與實務落地</h2>
        <div className="divider" />
        <div className="meta">
          <span><b>Jerry Tsai</b> 蔡政穎</span>
        </div>
      </div>
    </section>
  );
}

// 每個章節（橫向）底下可以有好幾個步驟（縱向）。
// 目前只有「我的觀察」有兩步（痛點／解法），其餘章節都是單步，
// 但整套導覽邏輯是通用的，之後要幫任何章節加子頁面，不用改導覽本身。
const CHAPTERS = [
  { id: 'hero', steps: 1 },
  { id: 'thesis', steps: 2 },
  { id: 'ai-importance', steps: 3 },
  { id: 'roadmap', steps: 1 },
  ...tools.map((t) => ({ id: t.id, steps: 1 })),
];
const CHAPTER_COUNT = CHAPTERS.length;

function Chapter({ stepCount, localStep, children }) {
  return (
    <div className="chapter">
      <div
        className="chapter-track"
        style={{
          height: `${stepCount * 100}vh`,
          transform: `translateY(-${localStep * (100 / stepCount)}%)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function App() {
  const [pos, setPos] = useState({ chapter: 0, step: 0 });
  // 每個 (章節, 步驟) 座標各自的「抵達次數」，只在真的落腳在那一格時才 +1。
  // 拿來當 key 逼元件重新掛載，讓打字機／逐行淡入動畫在每次抵達時重播——
  // 只算 CSS animation 播完就定格，不會因為切走又切回來自動重來。
  const [visits, setVisits] = useState({ '0.0': 1 });

  useEffect(() => {
    const key = `${pos.chapter}.${pos.step}`;
    setVisits((v) => ({ ...v, [key]: (v[key] || 0) + 1 }));
  }, [pos.chapter, pos.step]);

  const goChapter = useCallback((delta) => {
    setPos((p) => {
      const next = Math.min(Math.max(p.chapter + delta, 0), CHAPTER_COUNT - 1);
      return next === p.chapter ? p : { chapter: next, step: 0 };
    });
  }, []);

  // 在章節底部再往下（或頂部再往上）就不動——換章節的權力完全留給左右鍵，
  // 這樣簡報時「這一章講完了」的邊界很明確，不會因為滑鼠多滾一下就跳章。
  const goStep = useCallback((delta) => {
    setPos((p) => {
      const stepCount = CHAPTERS[p.chapter].steps;
      const next = p.step + delta;
      if (next < 0 || next >= stepCount) return p;
      return { ...p, step: next };
    });
  }, []);

  // 給簡報遙控器（實體翻頁筆多半只送 PageUp/PageDown，沒有獨立的上下鍵訊號）
  // 跟空白鍵用的「一路往前／往後」：先走完當前章節的步驟，才換章節。
  const goLinear = useCallback((delta) => {
    setPos((p) => {
      const stepCount = CHAPTERS[p.chapter].steps;
      if (delta > 0) {
        if (p.step < stepCount - 1) return { ...p, step: p.step + 1 };
        if (p.chapter < CHAPTER_COUNT - 1) return { chapter: p.chapter + 1, step: 0 };
        return p;
      }
      if (p.step > 0) return { ...p, step: p.step - 1 };
      if (p.chapter > 0) {
        const prevSteps = CHAPTERS[p.chapter - 1].steps;
        return { chapter: p.chapter - 1, step: prevSteps - 1 };
      }
      return p;
    });
  }, []);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goChapter(1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goChapter(-1);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        goStep(1);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        goStep(-1);
      } else if (e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        goLinear(1);
      } else if (e.key === 'PageUp') {
        e.preventDefault();
        goLinear(-1);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [goChapter, goStep, goLinear]);

  // 滑鼠滾輪／觸控板控制上下（同一章節內的步驟），不是換章節。
  // 一定要節流：觸控板輕輕一撥，瀏覽器會連續丟出幾十個 wheel 事件（慣性滾動），
  // 沒擋住的話一撥就飛過好幾格。做法是鎖住輸入，直到上一次的翻動畫播完。
  const wheelLockRef = useRef(false);
  useEffect(() => {
    function onWheel(e) {
      if (Math.abs(e.deltaY) < 12) return;
      e.preventDefault();
      if (wheelLockRef.current) return;
      wheelLockRef.current = true;
      goStep(e.deltaY > 0 ? 1 : -1);
      setTimeout(() => {
        wheelLockRef.current = false;
      }, 700);
    }
    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, [goStep]);

  const currentSteps = CHAPTERS[pos.chapter].steps;
  const visitKey = (chapter, step) => visits[`${chapter}.${step}`] || 0;

  return (
    <div className="deck">
      {/* translateX／translateY 都用「軌道自身版面」的百分比，不用 vw / vh：
          視窗單位在翻頁動畫進行中配合背景 WebGL 場景時，瀏覽器合成執行緒
          偶爾會用到過期的視窗尺寸，導致翻頁差了一整格、前一張投影片的邊緣穿幫。
          百分比是相對軌道本身版面計算，不吃這個問題。 */}
      <div
        className="deck-track"
        style={{
          width: `${CHAPTER_COUNT * 100}vw`,
          transform: `translateX(-${pos.chapter * (100 / CHAPTER_COUNT)}%)`,
        }}
      >
        <Chapter stepCount={1} localStep={0}>
          <div className="step">
            <Hero active={pos.chapter === 0} />
          </div>
        </Chapter>

        <Chapter stepCount={2} localStep={pos.chapter === 1 ? pos.step : 0}>
          <div className="step">
            <ThesisPain key={visitKey(1, 0)} active={pos.chapter === 1 && pos.step === 0} />
          </div>
          <div className="step">
            <ThesisSolution key={visitKey(1, 1)} active={pos.chapter === 1 && pos.step === 1} />
          </div>
        </Chapter>

        <Chapter stepCount={3} localStep={pos.chapter === 2 ? pos.step : 0}>
          <div className="step">
            <AiImportance1 key={visitKey(2, 0)} active={pos.chapter === 2 && pos.step === 0} />
          </div>
          <div className="step">
            <AiImportance2 key={visitKey(2, 1)} active={pos.chapter === 2 && pos.step === 1} />
          </div>
          <div className="step">
            <AiImportance3 key={visitKey(2, 2)} active={pos.chapter === 2 && pos.step === 2} />
          </div>
        </Chapter>

        <Chapter stepCount={1} localStep={0}>
          <div className="step">
            <RoadmapOverview active={pos.chapter === 3} />
          </div>
        </Chapter>

        {tools.map((tool) => (
          <Chapter key={tool.id} stepCount={1} localStep={0}>
            <div className="step">
              <ToolSection tool={tool} />
            </div>
          </Chapter>
        ))}
      </div>

      {currentSteps > 1 && (
        <div className="step-dots">
          {Array.from({ length: currentSteps }, (_, i) => (
            <span key={i} className={`step-dot${i === pos.step ? ' step-dot--active' : ''}`} />
          ))}
        </div>
      )}

      <button
        type="button"
        className="deck-nav deck-nav--prev"
        onClick={() => goChapter(-1)}
        disabled={pos.chapter === 0}
        aria-label="上一章"
      >
        ‹
      </button>
      <button
        type="button"
        className="deck-nav deck-nav--next"
        onClick={() => goChapter(1)}
        disabled={pos.chapter === CHAPTER_COUNT - 1}
        aria-label="下一章"
      >
        ›
      </button>

      <div className="deck-counter">
        {String(pos.chapter + 1).padStart(2, '0')} / {String(CHAPTER_COUNT).padStart(2, '0')}
      </div>
    </div>
  );
}
