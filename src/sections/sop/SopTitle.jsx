import { useEffect, useRef, useState } from 'react';
import { tools } from '../../data/tools.js';

const tool = tools.find((t) => t.id === 'sop-search');

// 影片開頭有幾格白畫面，在全黑的簡報上會閃一下，所以每輪都從這裡起跳。
const START = 0.45;
// 給「不要動畫」的觀眾看的定格：這個時間點畫面已經是完整的網站。
const STILL = 3;

// 章節的開場：大標題在左、示範影片在右。
// 影片本身就是那段動畫——品牌 logo 縮到左上角，實際的 SOP 檢索網站
// 從那裡長出來，最後淡出、接回下一輪。等於是在說「這不是示意圖，
// 是一個做出來、打得開的東西」。
export default function SopTitle({ active }) {
  const videoRef = useRef(null);
  // 影片的第一格是白的。在跳到 START 之前先不要顯示，不然一進這頁會閃一下白。
  const [ready, setReady] = useState(false);

  // 只有這一頁在台上時才播：整份簡報的章節都掛在 DOM 上（只是被平移到
  // 畫面外），不控制的話影片會在背景一直跑，白白吃掉解碼資源。
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

  // 不用 loop 屬性：那會從第 0 秒重播，白畫面每一輪都會閃一次。
  const replay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = START;
    v.play().catch(() => {});
  };

  return (
    <section className="sop sop-title slide-content">
      <div className="rail">
        <span className="rail-index">{tool.index}</span>
        <span className="rail-label">{tool.kicker}</span>
      </div>

      <div className="sop-title-body">
        <header className="tool-head">
          <h2>{tool.name}</h2>
          <span className={`status status--${tool.status === '已上線' ? 'live' : 'wip'}`}>
            {tool.status}
          </span>
        </header>
        <p className="prose sop-title-lede">
          把散落在各處的作業流程，收成一個查得到、比得出、改得動的入口。
        </p>
      </div>

      <figure className={`sop-title-figure${active ? ' is-active' : ''}`}>
        <video
          ref={videoRef}
          className={`sop-title-video${ready ? ' is-ready' : ''}`}
          src="sop-loop.webm"
          muted
          playsInline
          preload="auto"
          onSeeked={() => setReady(true)}
          onEnded={replay}
          aria-label="SOP 檢索網站介面展示"
        />
      </figure>
    </section>
  );
}
