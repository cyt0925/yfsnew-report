import Typewriter from '../../components/Typewriter.jsx';

// 收尾頁：先講「改得動」（這套東西的存活條件），再用三個使用場景收束。
// 「不綁在我一個人身上」是這一頁真正要留下的一句話——
// 對主管而言，這比任何功能都重要。
const LINES = [
  '內容存在 Google 試算表：更新試算表、網站重新整理就同步，不需要碰程式。',
  '網站本身有編輯模式，輸入編輯碼就能新增或修改；沒有編輯碼的人只能看，不會誤改。',
];

const USERS = [
  { who: '新人上手', what: '自己查得到，不用每件事都開口問。' },
  { who: '職務代理 ／ 跨線輪調', what: '先看清楚兩條線差在哪裡，再接手。' },
  { who: '交接與稽核', what: '有一份大家講的是同一個版本的依據。' },
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
          <Typewriter text="改得動，而且不綁在我身上" active={active} />
        </h2>
      </div>

      <div className="sop-maintain-body">
        {LINES.map((line, i) => (
          <p key={line} className="prose reveal-line" style={delay(i)}>
            {line}
          </p>
        ))}
      </div>

      <div className="user-cases">
        <span className="tag">現在誰用得到</span>
        <div className="user-case-list">
          {USERS.map((u, i) => (
            <div
              key={u.who}
              className="user-case reveal-line"
              style={active ? { animationDelay: `${1.3 + i * 0.25}s` } : { opacity: 1, animation: 'none' }}
            >
              <h3>{u.who}</h3>
              <p>{u.what}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
