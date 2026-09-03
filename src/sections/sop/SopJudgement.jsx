import Typewriter from '../../components/Typewriter.jsx';

// 這一頁刻意只有兩句話。前一頁鋪了三個發現，這裡要收束成一個判斷——
// 字大、留白多，講者停在這裡的那幾秒才有重量。
// 右邊那疊資料夾是「現有資料其實夠多了」的證據：母資料夾先出現，
// 六份檔案清單再一張一張散出來，這句話不是用講的，是當場長出來的。
//
// 檔名處理：六張清單的檔名會露出合作品牌與通路，簡報是部署在公開網址上，
// 所以不是靠 CSS 濾鏡遮一下（那個關掉樣式就破功，原圖也還在）——
// 是在存進 public/ 之前就把像素本身高斯模糊掉，存下來的檔案已經回不去了。
// 但左邊那一條 Word 圖示刻意留著沒糊：量過圖示落在 x≈7–22、檔名從 x≈29
// 才開始，所以留到 23 再羽化 5px，一個字都碰不到，卻仍然一眼看得出
// 「這是一排 Word 檔」。母資料夾那張只有六個分類名稱，不敏感，維持清晰。
const EVIDENCE = [
  { src: 'sop-docs-1.png', top: '6%', left: '46%', width: '42%', rotate: 4 },
  { src: 'sop-docs-2.png', top: '32%', left: '0%', width: '44%', rotate: -5 },
  { src: 'sop-docs-3.png', top: '37%', left: '44%', width: '44%', rotate: 3 },
  { src: 'sop-docs-4.png', top: '47%', left: '20%', width: '40%', rotate: 2 },
  { src: 'sop-docs-5.png', top: '65%', left: '0%', width: '42%', rotate: 5 },
  { src: 'sop-docs-6.png', top: '63%', left: '44%', width: '42%', rotate: -4 },
];

const SPEED = 32;
const GAP = 320;

export default function SopJudgement({ active }) {
  // 兩句話、四行字接續打完：第一句兩行、第二句兩行，
  // 上一行打完才接下一行，跟原本兩句依序淡入的節奏是同一個邏輯，
  // 只是從「整句出現」換成「逐字浮現」。
  let cursor = 500;
  const p1l1Delay = cursor;
  cursor += '現有資料其實夠多了，'.length * SPEED + GAP;
  const p1l2Delay = cursor;
  cursor += '重點在於能不能真的發揮作用。'.length * SPEED + GAP;
  const p2l1Delay = cursor;
  cursor += '如果能有一個方便查找、比對和修改的'.length * SPEED + GAP;
  const p2l2Delay = cursor;
  cursor += '統整入口，大家處理起來會順手很多。'.length * SPEED;
  // 資料夾疊那句話打完才長出來——證據是接在陳述後面冒出來的，
  // 不是跟文字同時搶畫面，所以起跑點要接在打字結束之後，不能沿用舊的固定秒數。
  const folderDelay = cursor / 1000 + 0.35;

  return (
    <section className="sop sop-judgement slide-content">
      <div className="rail">
        <span className="rail-index">01</span>
        <span className="rail-label">SOP檢索網站</span>
      </div>

      <div className="sop-head sop-head--narrow">
        <h2 className="thesis-heading">
          <Typewriter text="我個人的想法是" active={active} />
        </h2>
      </div>

      <div className="verdict">
        <p className="verdict-line">
          <Typewriter text="現有資料其實夠多了，" active={active} speed={SPEED} startDelay={p1l1Delay} />
          <br />
          <Typewriter
            segments={[{ text: '重點在於' }, { text: '能不能真的發揮作用', className: 'tw-accent' }, { text: '。' }]}
            active={active}
            speed={SPEED}
            startDelay={p1l2Delay}
          />
        </p>
        <p className="verdict-line verdict-line--sub">
          <Typewriter
            segments={[
              { text: '如果能有一個方便' },
              { text: '查找', className: 'tw-underline' },
              { text: '、' },
              { text: '比對', className: 'tw-underline' },
              { text: '和' },
              { text: '修改', className: 'tw-underline' },
              { text: '的' },
            ]}
            active={active}
            speed={SPEED}
            startDelay={p2l1Delay}
          />
          <br />
          <Typewriter text="統整入口，大家處理起來會順手很多。" active={active} speed={SPEED} startDelay={p2l2Delay} />
        </p>
      </div>

      <figure className={`doc-pile${active ? ' is-active' : ''}`}>
        <img
          src="sop-docs-folder.png"
          alt="部門作業流程資料夾，依品牌與通路分成六類"
          className="doc-pile-folder"
          style={{ '--pile-delay': `${folderDelay}s` }}
        />
        {EVIDENCE.map((e, i) => (
          <img
            key={e.src}
            src={e.src}
            alt=""
            className="doc-pile-sheet"
            style={{
              top: e.top,
              left: e.left,
              width: e.width,
              '--rotate': `${e.rotate}deg`,
              '--pile-delay': `${folderDelay + 0.25 + i * 0.09}s`,
            }}
          />
        ))}
      </figure>
    </section>
  );
}
