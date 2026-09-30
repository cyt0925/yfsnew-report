import Typewriter from '../components/Typewriter.jsx';
import RevealLines from './RevealLines.jsx';

// 第 1 章第一頁：痛點。原本「作業重複的日常消耗」（這頁）跟第 2 章第一頁「痛點」
// 講的是同一件事（都在說每日重複的作業），後來併成一頁：標題比照 SOP 那章的
// 「痛點：……」格式，文案是使用者重寫的濃縮版，右邊的圖也從線稿方塊圖換成
// 原本痛點頁那張筆電圖（bottleneck.png）。第 2 章因此少一頁，剩兩頁。
//
// 文案分兩段，每段自己在 34em 內折行；不拆成一句一行是照使用者給的段落走。
const LINES = [
  '這幾個月觀察下來，IT 排程比較緊湊、合作廠商又未開放 API，許多工作只能每日重複操作，資料也分散在各個檔案。',
  '團隊大量時間耗在資料搬移、人工核對與跨系統作業，讓人力困於例行事務，也壓縮了投入高價值工作的空間。',
];

export default function ThesisPain({ active }) {
  return (
    <section className="thesis slide-content">
      <div className="rail">
        <span className="rail-label">我的觀察</span>
      </div>

      <div className="thesis-body">
        <div className="thesis-block">
          <h2 className="thesis-heading">
            <Typewriter text="痛點：作業重複的日常消耗" active={active} />
          </h2>
          <RevealLines lines={LINES} startDelay={0.55} active={active} />
        </div>
      </div>

      {/* 筆電圖連同它的掃描進場、閃爍、慢速浮動都是 .ai-figure--image 那套
          （原本寫給第 2 章的痛點頁），這裡直接借用：那組規則沒綁在 .ai 底下，
          放進 .thesis-figure 的格子（8 / span 5）一樣成立。 */}
      <figure className={`thesis-figure ai-figure--image${active ? ' is-active' : ''}`}>
        <img src="bottleneck.png" alt="散落在各處的檔案與重複性作業" />
      </figure>
    </section>
  );
}
