import Typewriter from '../../components/Typewriter.jsx';

// 這一頁刻意只有兩句話。前一頁鋪了三個發現，這裡要收束成一個判斷——
// 字大、留白多，講者停在這裡的那幾秒才有重量。
// 「查得到／比得出／改得動」是後面三頁的骨幹，在這裡先立起來。
export default function SopJudgement({ active }) {
  const delay = (i) => (active ? { animationDelay: `${0.5 + i * 0.45}s` } : { opacity: 1, animation: 'none' });

  return (
    <section className="sop sop-judgement slide-content">
      <div className="rail">
        <span className="rail-index">01</span>
        <span className="rail-label">SOP檢索網站</span>
      </div>

      <div className="sop-head">
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
    </section>
  );
}
