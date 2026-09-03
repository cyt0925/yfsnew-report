import Typewriter from '../../components/Typewriter.jsx';
import { makeCursor, SPEED } from '../../utils/typeCursor.js';

// 收尾：拿掉標題和「SOP 已經寫得很清楚」那句鋪陳——前兩頁已經把問題
// 鋪滿了，這裡不用再重複，直接留下決定本身，字更大、更靠頁面上方。
const L1A = '目前完全仰賴同仁的細心與記憶來維持，但人工難免有極限。';
const L1B_SEGMENTS = [
  { text: '因此我決定，把流程中' },
  { text: '改單難抓、手動覆蓋', className: 'tw-accent' },
  { text: '的高風險環節，交由' },
  { text: '系統', className: 'tw-underline' },
  { text: '自動化處理。' },
];
const L2 = 'SOP 繼續負責定義規則，系統負責確保規則真的被執行、而且留得下紀錄。';

export default function RoadmapDecision({ active }) {
  const cursor = makeCursor(0.5);
  const l1aDelay = cursor.next(L1A.length);
  const l1bDelay = cursor.next(L1B_SEGMENTS.reduce((n, s) => n + s.text.length, 0));
  const l2Delay = cursor.next(L2.length);

  return (
    <section className="roadmap-detail roadmap-decision slide-content">
      <div className="rail">
        <span className="rail-label">全貌</span>
      </div>

      <div className="verdict">
        <p className="verdict-line">
          <Typewriter text={L1A} active={active} speed={SPEED} startDelay={l1aDelay} />
          <br />
          <Typewriter segments={L1B_SEGMENTS} active={active} speed={SPEED} startDelay={l1bDelay} />
        </p>
        <p className="verdict-line verdict-line--sub">
          <Typewriter text={L2} active={active} speed={SPEED} startDelay={l2Delay} />
        </p>
      </div>
    </section>
  );
}
