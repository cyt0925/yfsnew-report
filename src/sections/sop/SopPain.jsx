import Typewriter from '../../components/Typewriter.jsx';

// 三個發現並列成三欄，而不是拆成三張投影片：這一頁的作用是「問題的全貌」，
// 三件事要同時在場上，才看得出它們是同一件事的三個面向。
// 密度用時間管理——逐欄浮現，不是一次砸出九行字。
const FINDINGS = [
  {
    index: '01',
    title: '營運流程難以標準化',
    lines: [
      '每個人負責的線別、品牌與累積下來的做事方式都不一樣，久了，每條線的運作就變成那個人的個人經驗。',
      '平常各自跑沒問題，一遇到請假代理或跨線輪調，落差就浮出來。',
    ],
  },
  {
    index: '02',
    title: '新進同仁不易上手',
    lines: [
      '新進同仁缺乏直覺指引，往往只能即時詢問資深夥伴。',
      '然而被中斷的，多半是具有高度時效性（轉單、拋單）的核心作業，造成雙向的時間耗損。',
    ],
  },
  {
    index: '03',
    title: '文件複雜且分散，效益較難達到預期',
    lines: [
      '過去同仁曾用心將流程整理成文件存放，但因格式與內容相對分散，遇到緊急狀況時往往較難第一時間查閱。',
      '即便文件庫已建立，實務上大家仍多依賴口頭溝通，導致整理效益尚未能完全發揮。',
    ],
  },
];

export default function SopPain({ active }) {
  return (
    <section className="sop sop-pain slide-content">
      <div className="rail">
        <span className="rail-index">01</span>
        <span className="rail-label">SOP檢索網站</span>
      </div>

      <div className="sop-head">
        <h2 className="thesis-heading">
          <Typewriter text="痛點：流程複雜造成的視覺負擔" active={active} />
        </h2>
      </div>

      <div className="findings">
        {FINDINGS.map((f, i) => (
          <article
            key={f.index}
            className="finding reveal-line"
            style={active ? { animationDelay: `${0.55 + i * 0.35}s` } : { opacity: 1, animation: 'none' }}
          >
            <span className="finding-index">{f.index}</span>
            <h3>{f.title}</h3>
            {f.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}
