import Typewriter from '../../components/Typewriter.jsx';

// 三個發現並列成三欄，而不是拆成三張投影片：這一頁的作用是「問題的全貌」，
// 三件事要同時在場上，才看得出它們是同一件事的三個面向。
// 密度用時間管理——逐欄浮現，不是一次砸出九行字。
const FINDINGS = [
  {
    index: '01',
    title: '營運的工作看起來固定，其實很難標準化',
    lines: [
      '每個人負責的線別、品牌與累積下來的做事方式都不一樣，久了，每條線的運作就變成那個人的個人經驗。',
      '平常各自跑沒問題，一遇到請假代理或跨線輪調，落差就浮出來。',
    ],
  },
  {
    index: '02',
    title: '新人只能靠問，而被問的是最忙的那個人',
    lines: [
      '後台怎麼操作、價格怎麼建、款怎麼請，摸不著頭緒就只能開口問人。',
      '被壓縮掉的，正是晨間轉單、拋單這類一刻都不能延的高時效作業。',
    ],
  },
  {
    index: '03',
    title: '公司其實試過，但沒有真的發揮效果',
    lines: [
      '請每個人把流程寫成 Word 收進同一個資料夾——檔案靜態零散、格式各異，遇到急事更不會想翻。',
      '文件確實存在，但大家還是習慣直接問人，最後流於形式。',
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
          <Typewriter text="流程長在人身上，不在文件上" active={active} />
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
