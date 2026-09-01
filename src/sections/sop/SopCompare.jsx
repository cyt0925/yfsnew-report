import Typewriter from '../../components/Typewriter.jsx';

// 這一章的主視覺。「比得出」是這個網站跟一個資料夾最大的差別，
// 所以它獨佔一頁，而且不是用文字講，是直接把那張對照表畫出來——
// 講到「缺了哪個階段畫面上就是空的」的時候，台下要能同時看到那個空格。
const STAGES = [
  '接單確認',
  '建立文件',
  '系統下採',
  '通知窗口',
  '竹運核對',
  '製作嘜頭',
  '出貨文件確認',
  '發送與登記',
];

// 覆蓋狀況為示意，實際內容由網站從試算表即時產生。
const ROWS = [
  { name: '通路 A', cover: [1, 1, 1, 1, 1, 1, 1, 1] },
  { name: '通路 B', cover: [1, 1, 1, 0, 1, 1, 1, 1] },
  { name: '通路 C', cover: [1, 1, 1, 1, 0, 0, 1, 1] },
];

export default function SopCompare({ active }) {
  const delay = (i) => (active ? { animationDelay: `${0.5 + i * 0.3}s` } : { opacity: 1, animation: 'none' });

  return (
    <section className="sop sop-compare slide-content">
      <div className="rail">
        <span className="rail-index">01</span>
        <span className="rail-label">SOP檢索網站</span>
      </div>

      <div className="sop-head">
        <h2 className="thesis-heading">
          <Typewriter text="比得出：27 份出貨 SOP，同一條主幹" active={active} />
        </h2>
      </div>

      <div className="sop-compare-body">
        <p className="prose reveal-line" style={delay(0)}>
          品牌與通路各不相同，但主幹是同一條。我把它歸納成八個階段，
          每一份文件都對到這八格——哪個通路多了什麼、少了什麼，一眼看得出來。
        </p>
        <p className="prose reveal-line" style={delay(1)}>
          對代理人來說這正是最需要的：我熟的那條線是這樣走，
          我要代理的這條線差在哪裡，畫面上直接看得到。
        </p>
        <p className="prose prose--accent reveal-line" style={delay(2)}>
          哪一份缺了某個階段沒寫，畫面上就是空的——等於一張自動產生的體檢表。
        </p>
      </div>

      <figure className="stage-matrix reveal-line" style={delay(3)}>
        <div className="stage-track">
          {STAGES.map((s, i) => (
            <div key={s} className="stage-node">
              <span className="stage-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="stage-name">{s}</span>
            </div>
          ))}
        </div>

        <div className="stage-rows">
          {ROWS.map((row) => (
            <div key={row.name} className="stage-row">
              <span className="stage-row-name">{row.name}</span>
              <div className="stage-cells">
                {row.cover.map((c, i) => (
                  <span key={i} className={`stage-cell${c ? ' stage-cell--on' : ''}`} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <figcaption>覆蓋狀況為示意；實際內容由網站依試算表即時產生</figcaption>
      </figure>
    </section>
  );
}
