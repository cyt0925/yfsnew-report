import Typewriter from '../../components/Typewriter.jsx';
import { tools } from '../../data/tools.js';

const tool = tools.find((t) => t.id === 'coupang-oms');

// 章節開場：先把整個系統的兩條作業動線攤開，再往下逐一展開五個功能。
// 「驗收單簽名」跟「採購表轉換」刻意不畫進這條動線——它們是左右鍵
// 才切得到的獨立章節，這裡只用一句話帶過去，不搶這頁的焦點。
const FLOW = ['上傳整合表', '首頁 PO 總表', '編輯出貨數量', '匯出給倉庫', '驗收狀態自動判定'];

export default function OmsTitle({ active }) {
  const delay = (i) => (active ? { animationDelay: `${0.5 + i * 0.3}s` } : { opacity: 1, animation: 'none' });

  return (
    <section className="oms oms-title slide-content">
      <div className="rail">
        <span className="rail-index">{tool.index}</span>
        <span className="rail-label">{tool.kicker}</span>
      </div>

      <div className="oms-title-body">
        <header className="tool-head">
          <h2>
            <Typewriter text={tool.name} active={active} />
          </h2>
          <span className={`status status--${tool.status === '已上線' ? 'live' : 'wip'}`}>
            {tool.status}
          </span>
        </header>
        <p className="prose reveal-line" style={delay(0)}>
          不談抽象的技術模組，跟著 OP 每天的作業動線走：上傳、比對、編輯、匯出，
          最後接回驗收，形成一個閉環。
        </p>

        <p className="flow-chain reveal-line" style={delay(1)}>
          {FLOW.map((step, i) => (
            <span key={step}>
              <span className="flow-step">{step}</span>
              {i < FLOW.length - 1 && <span className="flow-arrow"> → </span>}
            </span>
          ))}
        </p>

        <p className="prose prose--accent reveal-line" style={delay(2)}>
          另外還有兩個獨立單元——「驗收單自動簽名」與「採購表格式轉換」，
          左右鍵可以直接切過去看。
        </p>
      </div>
    </section>
  );
}
