import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Typewriter from './components/Typewriter.jsx';
import LogicCore from './effects/logic-core/LogicCore.jsx';
import ThesisPain from './sections/ThesisPain.jsx';
import ThesisSolution from './sections/ThesisSolution.jsx';
import AiImportance1 from './sections/AiImportance1.jsx';
import AiImportance2 from './sections/AiImportance2.jsx';
import AiImportance3 from './sections/AiImportance3.jsx';
import RoadmapOverview from './sections/RoadmapOverview.jsx';
import RoadmapGap from './sections/roadmap/RoadmapGap.jsx';
import RoadmapFeedback from './sections/roadmap/RoadmapFeedback.jsx';
import RoadmapDecision from './sections/roadmap/RoadmapDecision.jsx';
import OmsTitle from './sections/oms/OmsTitle.jsx';
import OmsFeature from './sections/oms/OmsFeature.jsx';
import OmsSign from './sections/oms/OmsSign.jsx';
import OmsPurchase from './sections/oms/OmsPurchase.jsx';
import SopTitle from './sections/sop/SopTitle.jsx';
import SopPain from './sections/sop/SopPain.jsx';
import SopJudgement from './sections/sop/SopJudgement.jsx';
import SopCollect from './sections/sop/SopCollect.jsx';
import SopCompare from './sections/sop/SopCompare.jsx';
import SopMaintain from './sections/sop/SopMaintain.jsx';
import { FEATURES } from './data/omsFeatures.js';
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
        <h1>
          <Typewriter text="AI 流程再造" active={active} />
        </h1>
        <h2>
          <Typewriter text="永豐商店 SOP 優化與實務落地" active={active} />
        </h2>
        <div className="divider" />
        <div className="meta">
          <span><b>Jerry Tsai</b> 蔡政穎</span>
        </div>
      </div>
    </section>
  );
}

// 每個章節（橫向）底下可以有好幾個步驟（縱向）。
// 「全貌」章節刻意排在 SOP 檢索網站後面、酷澎系統前面：它不是目錄，
// 是轉場——先講完 SOP 檢索網站做了什麼，再講我在自己做的網站上讀 SOP
// 時看到了什麼問題，帶出「所以決定做酷澎系統」這個決定，敘事是連著的。
// 酷澎系統章節內用上下鍵展開五個核心功能（開場頁 + 功能 01–05）；
// 「驗收單自動簽名」跟「採購表格式轉換」刻意不塞進同一條下滑動線——
// 它們是另外兩個獨立章節，靠左右鍵切，不搶「五個功能」這條主線的節奏。
const SOP_STEPS = 6;
const ROADMAP_STEPS = 4;
const OMS_STEPS = 1 + FEATURES.length;
const CHAPTERS = [
  { id: 'hero', steps: 1 },
  { id: 'thesis', steps: 2 },
  { id: 'ai-importance', steps: 3 },
  { id: 'sop-search', steps: SOP_STEPS },
  { id: 'roadmap', steps: ROADMAP_STEPS },
  { id: 'coupang-oms', steps: OMS_STEPS },
  { id: 'coupang-sign', steps: 1 },
  { id: 'coupang-purchase', steps: 1 },
];
const CHAPTER_COUNT = CHAPTERS.length;
const SOP_CHAPTER = 3;
const ROADMAP_CHAPTER = 4;
const OMS_CHAPTER = 5;
const SIGN_CHAPTER = 6;
const PURCHASE_CHAPTER = 7;

// ── 讓每一頁在矮螢幕上也塞得下 ──
// 每一頁的尺寸都是照著約 950px 高的視窗調出來的（詳見 HANDOVER）。筆電的視窗
// 高度常常只剩 600～730px（瀏覽器工具列吃掉一截，再乘上系統顯示縮放 125%／150%），
// 內容一超出 .step 的 overflow:hidden 就直接把標題或圖切掉。
//
// 做法是「每頁各自縮到剛好」，不是整份一起縮：塞得下的頁面一個像素都不動，
// 維持原本調好的尺寸；只有真的比視窗高的那幾頁才縮，而且只縮到剛好塞得下。
// 整份一起縮的話，明明還有餘裕的頁面也跟著變小，在筆電上讀起來太吃力。
const FIT_MARGIN = 16; // 需要縮的頁面上下各留 8px，內容不要真的貼著螢幕邊緣

// 先試 zoom：zoom 會重新排版（版面照樣鋪滿整個寬度，只是字和間距一起變小），
// 比 transform: scale 好，後者是把整頁當圖片縮，左右會多出兩條空白。
//
// 但有些頁面 zoom 救不了——維護頁那三張截圖是照原生比例縮放的，高度完全由欄寬
// 決定；zoom 縮小以後版面變寬，圖跟著變高，抵銷掉縮放，量出來還是一樣高。
// 這種頁面就退回 transform: scale，那是純視覺縮放、不重排，一定塞得下，
// 代價是左右各留一點空白（會走到這條路的頁面縮放幅度都很小，看不太出來）。
function computeFit(content, vh) {
  content.style.zoom = '';
  content.style.transform = '';
  const natural = content.getBoundingClientRect().height;
  // 塞得下就完全不動。滿版頁（封面、全貌）自然高度剛好等於視窗高，也走這條。
  if (natural <= vh || natural === 0) return { zoom: '', transform: '' };

  const ratio = String((vh - FIT_MARGIN) / natural);
  content.style.zoom = ratio;
  if (content.getBoundingClientRect().height <= vh) return { zoom: ratio, transform: '' };

  content.style.zoom = '';
  return { zoom: '', transform: `scale(${ratio})` };
}

// 量高度很貴（要先把縮放清掉，逼瀏覽器把 24 頁重新排版一次），但結果只跟視窗尺寸
// 有關，所以量過就存起來。翻頁時只是把存好的值重新貼回去，不會卡住翻頁動畫。
const fitCache = new Map();
let fitCacheKey = '';

function fitStepsToViewport(remeasure = false) {
  const vh = window.innerHeight;
  const key = `${window.innerWidth}x${vh}`;
  if (remeasure || key !== fitCacheKey) {
    fitCache.clear();
    fitCacheKey = key;
  }
  document.querySelectorAll('.step').forEach((step, i) => {
    const content = step.firstElementChild;
    if (!content) return;
    let fit = fitCache.get(i);
    if (!fit) {
      fit = computeFit(content, vh);
      fitCache.set(i, fit);
    }
    content.style.zoom = fit.zoom;
    content.style.transform = fit.transform;
  });
}

// signal 帶的是 visits：每次翻到一頁，那一頁會換 key 重新掛載（動畫要重播），
// 掛出來的是全新的 DOM 節點，上面沒有縮放，所以每次翻頁都要重貼一次。
// 用 useLayoutEffect 在瀏覽器畫出來之前就貼好，不會閃一下原尺寸。
function useFitSteps(signal) {
  useLayoutEffect(() => {
    fitStepsToViewport();
  }, [signal]);

  useEffect(() => {
    const onResize = () => fitStepsToViewport();
    // 圖片和影片載入前高度是 0，量到的自然高度會偏矮——這幾頁的高度就是被截圖
    // 撐出來的，所以每載入一份素材就重量一次。load 事件不會冒泡，要用捕獲階段接。
    const onLoad = () => fitStepsToViewport(true);
    window.addEventListener('resize', onResize);
    document.addEventListener('load', onLoad, true);
    if (document.fonts) document.fonts.ready.then(() => fitStepsToViewport(true));
    return () => {
      window.removeEventListener('resize', onResize);
      document.removeEventListener('load', onLoad, true);
    };
  }, []);
}

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

  useFitSteps(visits);

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

        {(() => {
          const step = pos.chapter === SOP_CHAPTER ? pos.step : 0;
          const on = (i) => pos.chapter === SOP_CHAPTER && pos.step === i;
          return (
            <Chapter stepCount={SOP_STEPS} localStep={step}>
              <div className="step">
                <SopTitle key={visitKey(SOP_CHAPTER, 0)} active={on(0)} />
              </div>
              <div className="step">
                <SopPain key={visitKey(SOP_CHAPTER, 1)} active={on(1)} />
              </div>
              <div className="step">
                <SopJudgement key={visitKey(SOP_CHAPTER, 2)} active={on(2)} />
              </div>
              <div className="step">
                <SopCollect key={visitKey(SOP_CHAPTER, 3)} active={on(3)} />
              </div>
              <div className="step">
                <SopCompare key={visitKey(SOP_CHAPTER, 4)} active={on(4)} />
              </div>
              <div className="step">
                <SopMaintain key={visitKey(SOP_CHAPTER, 5)} active={on(5)} />
              </div>
            </Chapter>
          );
        })()}

        {(() => {
          const step = pos.chapter === ROADMAP_CHAPTER ? pos.step : 0;
          const on = (i) => pos.chapter === ROADMAP_CHAPTER && pos.step === i;
          return (
            <Chapter stepCount={ROADMAP_STEPS} localStep={step}>
              <div className="step">
                <RoadmapOverview active={on(0)} />
              </div>
              <div className="step">
                <RoadmapGap key={visitKey(ROADMAP_CHAPTER, 1)} active={on(1)} />
              </div>
              <div className="step">
                <RoadmapFeedback key={visitKey(ROADMAP_CHAPTER, 2)} active={on(2)} />
              </div>
              <div className="step">
                <RoadmapDecision key={visitKey(ROADMAP_CHAPTER, 3)} active={on(3)} />
              </div>
            </Chapter>
          );
        })()}

        {(() => {
          const step = pos.chapter === OMS_CHAPTER ? pos.step : 0;
          const on = (i) => pos.chapter === OMS_CHAPTER && pos.step === i;
          return (
            <Chapter stepCount={OMS_STEPS} localStep={step}>
              <div className="step">
                <OmsTitle key={visitKey(OMS_CHAPTER, 0)} active={on(0)} />
              </div>
              {FEATURES.map((feature, i) => (
                <div className="step" key={feature.n}>
                  <OmsFeature {...feature} key={visitKey(OMS_CHAPTER, i + 1)} active={on(i + 1)} />
                </div>
              ))}
            </Chapter>
          );
        })()}

        <Chapter stepCount={1} localStep={0}>
          <div className="step">
            <OmsSign key={visitKey(SIGN_CHAPTER, 0)} active={pos.chapter === SIGN_CHAPTER} />
          </div>
        </Chapter>

        <Chapter stepCount={1} localStep={0}>
          <div className="step">
            <OmsPurchase key={visitKey(PURCHASE_CHAPTER, 0)} active={pos.chapter === PURCHASE_CHAPTER} />
          </div>
        </Chapter>
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
