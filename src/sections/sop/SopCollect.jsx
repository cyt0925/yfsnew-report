import { useEffect, useRef } from 'react';
import Typewriter from '../../components/Typewriter.jsx';
import { makeCursor, SPEED } from '../../utils/typeCursor.js';

// 文案本身就是示範內容的講解，所以不再另外放一組骨架文字——
// 右邊那支影片錄的正是「打 MARS、疊加 CPG、再疊竹運，四筆瞬間收斂成三筆」
// 這段真實操作，文字負責把畫面裡發生的事講清楚。
const BLOCKS = [
  {
    tag: '查找',
    lines: [
      '完整收錄現有的 46 份 SOP 與 500 多張操作截圖，支援關鍵字（如：退貨、補貨、嘜頭、EIP）直接定位到具體步驟。',
    ],
  },
  {
    tag: '篩選',
    lines: [
      '同時可依品牌、通路、出貨與物流型態交叉篩選，例如快速調出所有「竹運」相關的 SOP，大幅縮短翻找時間。',
    ],
  },
];

export default function SopCollect({ active }) {
  const videoRef = useRef(null);

  // 跟其他章節一致：只有這一頁在台上時才播，切走就暫停、切回來從頭放，
  // 不然背景一直跑白白吃解碼資源。這支影片開頭就是內容（沒有空白格），
  // 用原生 loop 直接接龍即可，不用像封面那支特別跳過起始幀。
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
    <section className="sop sop-collect slide-content">
      <div className="rail">
        <span className="rail-index">01</span>
        <span className="rail-label">SOP檢索網站</span>
      </div>

      {/* 標題跟兩個 tag 區塊收進同一個容器，讓它跟右邊影片是「同一列」的兩個
          格子——這樣兩邊的頂端自然對齊，不用另外算 margin 去湊。 */}
      <div className="sop-collect-body">
        <h2 className="thesis-heading">
          <Typewriter text="精準檢索，多維篩選" active={active} />
        </h2>

        <div className="sop-blocks">
          {(() => {
            const cursor = makeCursor(0.55);
            return BLOCKS.map((b) => (
              <div key={b.tag} className="sop-block">
                <span className="tag">{b.tag}</span>
                {b.lines.map((line) => (
                  <p key={line}>
                    <Typewriter text={line} active={active} speed={SPEED} startDelay={cursor.next(line.length)} />
                  </p>
                ))}
              </div>
            ));
          })()}
        </div>
      </div>

      <figure className={`sop-collect-figure${active ? ' is-active' : ''}`}>
        <video
          ref={videoRef}
          className="sop-collect-video"
          src="sop-collect-demo.webm"
          muted
          loop
          playsInline
          preload="auto"
          aria-label="多維篩選操作示範"
        />
      </figure>
    </section>
  );
}
