import Typewriter from '../../components/Typewriter.jsx';
import { SIGN_FEATURE } from '../../data/omsFeatures.js';

// 「驗收單自動簽名」拆成兩頁（`part` 0 / 1），跟第 5 章的功能頁一樣走左右分欄：
//   part 0：為什麼要做（左）＋ SOP 檢索網站上那份舊流程的截圖（右）
//   part 1：怎麼操作（左）＋ 做到了什麼（右）
// 拆頁是因為那張 SOP 截圖值得單獨看——它就是「為什麼要做」在講的那一長串
// Colab 步驟，跟文字擠在同一頁會兩邊都讀不清楚。
//
// 這一章沒有用 OmsFeature：那個模板的右欄固定是影片卡，而這兩頁右邊一個是
// 靜態截圖、一個是純文字，硬套會比另外寫還繞。版面 class 是共用的，所以
// 左右對齊、矮螢幕縮放那些行為跟功能頁完全一致。
export default function OmsSign({ part = 0, active }) {
  const { eyebrow, kicker, title, why, sop, how, points } = SIGN_FEATURE;
  const delay = (i) => (active ? { animationDelay: `${0.5 + i * 0.2}s` } : { opacity: 1, animation: 'none' });

  return (
    <section className="oms oms-feature--split slide-content">
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
          <div className="oms-col-left">
            <div className="oms-block reveal-line" style={delay(0)}>
              <span className="tag">為什麼要做</span>
              <p className="prose">{why}</p>
            </div>
          </div>

          <div className="oms-col-right">
            <div className="oms-block reveal-line" style={delay(0)}>
              <span className="tag">原本的流程</span>
              <figure className={`oms-video-figure${active ? ' is-active' : ''}`}>
                <div className="oms-video-card oms-video-card--shot">
                  <img className="oms-sop-shot" src={sop.src} alt={sop.alt} />
                </div>
              </figure>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="oms-col-left">
            <div className="oms-block reveal-line" style={delay(0)}>
              <span className="tag">怎麼操作</span>
              <p className="prose">{how}</p>
            </div>
          </div>

          <div className="oms-col-right">
            <div className="oms-block reveal-line" style={delay(1)}>
              <span className="tag">做到了什麼</span>
              <p className="prose">{points}</p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
