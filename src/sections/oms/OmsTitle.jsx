import { useEffect, useRef, useState } from 'react';
import Typewriter from '../../components/Typewriter.jsx';
import { tools } from '../../data/tools.js';

const tool = tools.find((t) => t.id === 'coupang-oms');

// 這支影片開頭先加了一段定格（完整 logo 撐住 0.9 秒才開始縮小），
// 原本的版本縮得太快，logo 幾乎沒被看清楚就跑走了。定格片段本身
// 沒有白畫面問題，所以直接從 0 開始播，不用像 sop-loop 那樣跳過起始幀。
const START = 0;
// 給「不要動畫」的觀眾看的定格：這個時間點畫面已經是完整的網站。
const STILL = 3.47;

// 章節開場：跟 SOP 檢索網站那頁同一個概念——logo 縮到左上角，
// 酷澎訂單管理系統的畫面從那裡長出來，右邊放這支示範影片，
// 左邊把整個系統的兩條作業動線攤開，再往下逐一展開五個功能。
// 「驗收單簽名」跟「採購表轉換」刻意不畫進這條動線——它們是左右鍵
// 才切得到的獨立章節，這裡只用一句話帶過去，不搶這頁的焦點。
const FLOW = ['上傳整合表', '首頁 PO 總表', '編輯出貨數量', '匯出給倉庫', '驗收狀態自動判定'];

export default function OmsTitle({ active }) {
  const delay = (i) => (active ? { animationDelay: `${0.5 + i * 0.3}s` } : { opacity: 1, animation: 'none' });

  const videoRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!active) {
      v.pause();
      return undefined;
    }

    const start = () => {
      try {
        v.currentTime = reduced ? STILL : START;
      } catch {
        /* metadata 還沒好就設 currentTime 會丟例外，交給下面的事件再試一次 */
      }
      if (!reduced) v.play().catch(() => {});
    };

    if (v.readyState >= 1) start();
    else v.addEventListener('loadedmetadata', start, { once: true });

    return () => v.removeEventListener('loadedmetadata', start);
  }, [active]);

  const replay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = START;
    v.play().catch(() => {});
  };

  return (
    <section className="oms oms-title slide-content">
      <div className="rail">
        <span className="rail-index">{tool.index}</span>
        <span className="rail-label">{tool.kicker}</span>
      </div>

      <div className="oms-title-body">
        <header className="tool-head">
          <h2>
            <Typewriter text={tool.name} active={active} />
          </h2>
        </header>
        <p className="prose reveal-line" style={delay(0)}>
          不談抽象的技術模組，跟著 OP 每天的作業動線走：上傳、比對、編輯、匯出，
          最後接回驗收，形成一個閉環。
        </p>

        <p className="flow-chain reveal-line" style={delay(1)}>
          {FLOW.map((step, i) => (
            <span key={step}>
              <span className="flow-step">{step}</span>
              {i < FLOW.length - 1 && <span className="flow-arrow"> → </span>}
            </span>
          ))}
        </p>

        <p className="prose prose--accent reveal-line" style={delay(2)}>
          另外還有兩個獨立單元——「驗收單自動簽名」與「採購表格式轉換」，
          左右鍵可以直接切過去看。
        </p>
      </div>

      <figure className={`oms-title-figure${active ? ' is-active' : ''}`}>
        <video
          ref={videoRef}
          className={`oms-title-video${ready ? ' is-ready' : ''}`}
          src="oms-loop.webm"
          muted
          playsInline
          preload="auto"
          onSeeked={() => setReady(true)}
          onEnded={replay}
          aria-label="酷澎訂單管理系統介面展示"
        />
      </figure>
    </section>
  );
}
