import Typewriter from '../../components/Typewriter.jsx';

// 收尾頁：這套東西能不能活下去，取決於改起來麻不麻煩。
// 底下三張是真的畫面——資料庫其實就是一張 Google 試算表，
// 前端有自己的編輯模式，不用碰程式、也不用找工程師。
const LINES = [
  '資料庫內容存放於 Google 試算表，網站重新整理就同步，不需要碰程式。',
  '網站本身有編輯模式，輸入編輯碼就能新增或修改；沒有編輯碼的人只能唯讀，不會誤改。',
];

const PANELS = [
  { src: 'sheet-db.png', caption: '資料庫：內容其實就是一張 Google 試算表' },
  { src: 'edit-sop.png', caption: '編輯 SOP：修改既有文件的欄位' },
  { src: 'add-sop.png', caption: '新增 SOP：從空白表單建立一份新文件' },
];

export default function SopMaintain({ active }) {
  const delay = (i) => (active ? { animationDelay: `${0.5 + i * 0.3}s` } : { opacity: 1, animation: 'none' });

  return (
    <section className="sop sop-maintain slide-content">
      <div className="rail">
        <span className="rail-index">01</span>
        <span className="rail-label">SOP檢索網站</span>
      </div>

      <div className="sop-head">
        <h2 className="thesis-heading">
          <Typewriter text="前端操作，網站可編輯" active={active} />
        </h2>
      </div>

      <div className="sop-maintain-body">
        {LINES.map((line, i) => (
          <p key={line} className="prose reveal-line" style={delay(i)}>
            {line}
          </p>
        ))}
      </div>

      <div className="maintain-gallery">
        <div className="maintain-row maintain-row--full reveal-line" style={delay(2)}>
          <figure className="maintain-panel">
            <img src={PANELS[0].src} alt={PANELS[0].caption} />
            <figcaption>{PANELS[0].caption}</figcaption>
          </figure>
        </div>
        <div className="maintain-row maintain-row--pair reveal-line" style={delay(3)}>
          {PANELS.slice(1).map((p) => (
            <figure key={p.src} className="maintain-panel">
              <img src={p.src} alt={p.caption} />
              <figcaption>{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
