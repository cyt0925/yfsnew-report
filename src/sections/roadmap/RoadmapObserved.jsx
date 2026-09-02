import Typewriter from '../../components/Typewriter.jsx';

// 跟 SopPain 同一個排版邏輯（三張並列的觀察卡），這裡刻意沿用——
// 這三個問題也是同一種性質：不用等系統做完，光是讀 SOP 就看得出來。
const FINDINGS = [
  {
    index: '01',
    title: '關鍵步驟的載體是共用 Excel',
    lines: ['多人同時開、覆蓋彼此的修改，且沒有版本紀錄。'],
  },
  {
    index: '02',
    title: 'SOP 只寫得出正常狀況',
    lines: ['但營運端每天在處理的是酷澎改單、拆單、改交期，這些寫不進 SOP，只能靠人記得。'],
  },
  {
    index: '03',
    title: '依時效內更改狀態，誰認定',
    lines: ['時效是硬性規定，但判斷哪張該改的依據在個人的腦袋和記憶裡，人一請假就斷鏈。'],
  },
];

export default function RoadmapObserved({ active }) {
  return (
    <section className="roadmap-detail slide-content">
      <div className="rail">
        <span className="rail-label">全貌</span>
      </div>

      <div className="sop-head">
        <h2 className="thesis-heading">
          <Typewriter text="三個問題，用眼睛就看得出來" active={active} />
        </h2>
      </div>

      <div className="roadmap-detail-lede">
        <p className="prose">看到這裡，不用等系統做完，三個問題已經看得出來。</p>
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
