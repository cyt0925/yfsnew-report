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
    evidence: true,
  },
];

// 母資料夾（六個分類：MARS／PG／其他／紙案／跨品類／酷澎）維持清晰——
// 那是分類名稱，不是敏感內容。點進去之後的六張檔案清單，
// 檔名會露出合作品牌與通路（瑪氏、酷澎…），所以在存檔階段就先用
// 高斯模糊把字級破壞掉（見 scripts 的處理過程），這裡拿到的已經是
// 「看得出是一排檔案、但讀不出任何一個字」的版本——不是只靠 CSS 濾鏡
// 擋一下，是原始像素就已經回不去了。
const EVIDENCE = [
  { src: 'sop-docs-1.png', top: '3%', left: '2%', width: '34%', rotate: -8 },
  { src: 'sop-docs-2.png', top: '14%', left: '46%', width: '38%', rotate: 6 },
  { src: 'sop-docs-3.png', top: '48%', left: '0%', width: '32%', rotate: 5 },
  { src: 'sop-docs-4.png', top: '54%', left: '56%', width: '36%', rotate: -6 },
  { src: 'sop-docs-5.png', top: '6%', left: '76%', width: '30%', rotate: 9 },
  { src: 'sop-docs-6.png', top: '62%', left: '28%', width: '32%', rotate: -3 },
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

            {f.evidence && (
              <div className={`finding-evidence${active ? ' is-active' : ''}`}>
                {EVIDENCE.map((e, ei) => (
                  <img
                    key={e.src}
                    src={e.src}
                    alt=""
                    className="evidence-thumb"
                    style={{
                      top: e.top,
                      left: e.left,
                      width: e.width,
                      '--rotate': `${e.rotate}deg`,
                      '--evidence-delay': `${1.35 + ei * 0.08}s`,
                    }}
                  />
                ))}
                <img
                  src="sop-docs-folder.png"
                  alt="部門作業流程資料夾（按品牌／通路分類）"
                  className="evidence-folder"
                  style={{ '--evidence-delay': '1.3s' }}
                />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
