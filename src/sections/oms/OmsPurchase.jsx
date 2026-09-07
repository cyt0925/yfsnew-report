import { useEffect, useRef } from 'react';
import Typewriter from '../../components/Typewriter.jsx';
import { PURCHASE_FEATURE } from '../../data/omsFeatures.js';

// 「採購表格式轉換」跟簽名一樣拆成兩頁（`part` 0 / 1）：
//   part 0：上下——為什麼要做（含原本「做到了什麼」的內容，合成一段）在上，
//           Before／After 對照圖在下。
//   part 1：左右——怎麼操作 + 縮小版 Before／After 收在左欄，右欄放示範影片。
//
// Before／After 是同一組圖：瑪氏自己開的訂貨通知單（匯入）→ 公司採購範本（匯出）。
// After 那張 1749×113、超寬扁，跟 Before 並排會縮成一條線，所以一律上下疊，
// 中間一個轉換箭頭。兩頁都放，第二頁用 compact 版（沒有說明文字、字級小一階）。
function BeforeAfter({ before, after, caption, compact = false }) {
  return (
    <figure className={`ba${compact ? ' ba--compact' : ''}`}>
      <div className="ba-item">
        <span className="ba-label"><b>Before</b>{before.label}</span>
        <img className="ba-img" src={before.src} alt={before.alt} />
      </div>
      <span className="ba-arrow" aria-hidden="true">↓ 轉換</span>
      <div className="ba-item">
        <span className="ba-label"><b>After</b>{after.label}</span>
        <img className="ba-img" src={after.src} alt={after.alt} />
      </div>
      {caption && <figcaption className="ba-caption">{caption}</figcaption>}
    </figure>
  );
}

export default function OmsPurchase({ part = 0, active }) {
  const {
    eyebrow, kicker, title, standalone, why, how, before, after, caption, video, videoLabel,
  } = PURCHASE_FEATURE;
  const delay = (i) => (active ? { animationDelay: `${0.5 + i * 0.2}s` } : { opacity: 1, animation: 'none' });
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (active) {
      v.currentTime = 0;
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [active]);

  return (
    <section className={`oms${part === 1 ? ' oms-feature--split oms-purchase-detail' : ' oms-purchase-intro'} slide-content`}>
      <div className="rail">
        <span className="rail-index">03</span>
        <span className="rail-label">{kicker}</span>
      </div>

      <div className="oms-head">
        <span className="tag oms-kicker">{eyebrow}</span>
        <h2 className="thesis-heading">
          <Typewriter text={title} active={active} />
        </h2>
        {/* 「跟訂單管理系統完全獨立」這句只在第一頁講一次就好 */}
        {part === 0 && <p className="oms-note">{standalone}</p>}
      </div>

      {part === 0 ? (
        <>
          <div className="oms-block purchase-why reveal-line" style={delay(0)}>
            <span className="tag">為什麼要做</span>
            <p className="prose">{why}</p>
          </div>

          <div className="oms-block purchase-ba reveal-line" style={delay(1)}>
            <BeforeAfter before={before} after={after} caption={caption} />
          </div>
        </>
      ) : (
        <>
          <div className="oms-col-left">
            <div className="oms-block reveal-line" style={delay(0)}>
              <span className="tag">怎麼操作</span>
              <p className="prose">{how}</p>
            </div>
            <div className="oms-block reveal-line" style={delay(1)}>
              <BeforeAfter before={before} after={after} compact />
            </div>
          </div>

          <div className="oms-col-right">
            <div className="oms-block reveal-line" style={delay(0)}>
              <span className="tag">操作示範</span>
              <figure className={`oms-video-figure${active ? ' is-active' : ''}`}>
                <div className="oms-video-card">
                  {/* 這頁左欄（怎麼操作 + 對照圖）比 16:9 的影片高，所以走功能頁
                      那套：影片填滿卡片、object-fit: cover。差別是這裡是左右裁
                      不是上下裁——影片兩側本來就是空的綠底，裁掉不影響內容。 */}
                  <div className="oms-video-frame">
                    <video
                      ref={videoRef}
                      className="oms-video"
                      src={video}
                      muted
                      loop
                      playsInline
                      preload="auto"
                      aria-label={videoLabel}
                    />
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
