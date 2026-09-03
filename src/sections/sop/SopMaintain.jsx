import Typewriter from '../../components/Typewriter.jsx';
import { makeCursor, SPEED } from '../../utils/typeCursor.js';

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
  const cursor = makeCursor(0.5);
  const lineDelays = LINES.map((line) => cursor.next(line.length));
  const galleryStart = cursor.peekSeconds(200);
  const delay = (i) => (active ? { animationDelay: `${galleryStart + i * 0.3}s` } : { opacity: 1, animation: 'none' });

  return (
    <section className="sop sop-maintain slide-content">
      <div className="rail">
        <span className="rail-index">01</span>
        <span className="rail-label">SOP檢索網站</span>
      </div>

      {/* 標題跟文字收進同一個容器，讓它跟右邊的圖庫是「同一列」的兩個格子，
          頂端才會自然對齊（跟前面「查找」那頁影片是同一個做法）。 */}
      <div className="sop-maintain-body">
        <h2 className="thesis-heading">
          <Typewriter text="前端操作，網站可編輯" active={active} />
        </h2>
        {LINES.map((line, i) => (
          <p key={line} className="prose">
            <Typewriter text={line} active={active} speed={SPEED} startDelay={lineDelays[i]} />
          </p>
        ))}
      </div>

      <div className="maintain-gallery">
        <div className="maintain-row maintain-row--full reveal-line" style={delay(0)}>
          <figure className="maintain-panel">
            <img src={PANELS[0].src} alt={PANELS[0].caption} />
            <figcaption>{PANELS[0].caption}</figcaption>
          </figure>
        </div>
        <div className="maintain-row maintain-row--pair reveal-line" style={delay(1)}>
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
