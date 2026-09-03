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

export default function SopJudgement({ active }) {
  const delay = (i) => (active ? { animationDelay: `${0.5 + i * 0.45}s` } : { opacity: 1, animation: 'none' });

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
        <p className="verdict-line reveal-line" style={delay(0)}>
          現有資料其實夠多了，
          <br />
          重點在於<b>能不能真的發揮作用</b>。
        </p>
        <p className="verdict-line verdict-line--sub reveal-line" style={delay(1)}>
          如果能有一個方便<em>查找</em>、<em>比對</em>和<em>修改</em>的
          <br />
          統整入口，大家處理起來會順手很多。
        </p>
      </div>

      <figure className={`doc-pile${active ? ' is-active' : ''}`}>
        <img
          src="sop-docs-folder.png"
          alt="部門作業流程資料夾，依品牌與通路分成六類"
          className="doc-pile-folder"
          style={{ '--pile-delay': '1.3s' }}
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
              '--pile-delay': `${1.55 + i * 0.09}s`,
            }}
          />
        ))}
      </figure>
    </section>
  );
}
