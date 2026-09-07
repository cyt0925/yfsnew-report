import { useEffect, useRef } from 'react';
import Typewriter from '../../components/Typewriter.jsx';
import { SIGN_FEATURE } from '../../data/omsFeatures.js';

// 「驗收單自動簽名」拆成兩頁（`part` 0 / 1）：
//   part 0：上下——為什麼要做在上，SOP 檢索網站上那份舊流程的截圖在下。
//           那張圖上的字很小，走滿版才讀得到，擠在半個欄寬裡沒有意義。
//   part 1：左右——怎麼操作、做到了什麼兩塊都收在左欄，右欄放示範影片，
//           跟第 5 章的功能頁同一套版面。
// 拆頁是因為那張 SOP 截圖值得單獨看——它就是「為什麼要做」在講的那一長串
// Colab 步驟，跟文字擠在同一頁會兩邊都讀不清楚。
//
// 這一章沒有用 OmsFeature：那個模板的左欄固定是「為什麼要做／做到了什麼」、
// 右欄的影片下面固定掛「怎麼操作」字幕條，而這兩頁的組合都不一樣。版面 class
// 是共用的，所以左右對齊、矮螢幕縮放那些行為跟功能頁完全一致。
export default function OmsSign({ part = 0, active }) {
  const { eyebrow, kicker, title, why, sop, how, points, video, videoLabel } = SIGN_FEATURE;
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
    <section className={`oms${part === 1 ? ' oms-feature--split oms-sign-detail' : ' oms-sign-intro'} slide-content`}>
      <div className="rail">
        <span className="rail-index">03</span>
        <span className="rail-label">{kicker}</span>
      </div>

      <div className="oms-head">
        <span className="tag oms-kicker">{eyebrow}</span>
        <h2 className="thesis-heading">
          <Typewriter text={title} active={active} />
        </h2>
      </div>

      {part === 0 ? (
        <>
          <div className="oms-block sign-why reveal-line" style={delay(0)}>
            <span className="tag">為什麼要做</span>
            <p className="prose">{why}</p>
          </div>

          <div className="oms-block sign-shot reveal-line" style={delay(1)}>
            <span className="tag">原本的流程</span>
            <figure className={`oms-sop-figure${active ? ' is-active' : ''}`}>
              <img className="oms-sop-shot" src={sop.src} alt={sop.alt} />
            </figure>
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
              <span className="tag">做到了什麼</span>
              <p className="prose">{points}</p>
            </div>
          </div>

          <div className="oms-col-right">
            <div className="oms-block reveal-line" style={delay(0)}>
              <span className="tag">操作示範</span>
              <figure className={`oms-video-figure${active ? ' is-active' : ''}`}>
                <div className="oms-video-card">
                  {/* 這頁的影片沒有字幕條（「怎麼操作」在左欄），所以框直接
                      鎖 16:9、不裁——功能頁那種填滿裁切是為了跟左欄文字切齊，
                      這裡改用左欄自己把兩塊撐開來對齊下緣（見 CSS）。 */}
                  <div className="oms-video-frame oms-video-frame--fixed">
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
