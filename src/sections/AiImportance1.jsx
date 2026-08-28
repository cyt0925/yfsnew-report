import Typewriter from '../components/Typewriter.jsx';
import RevealLines from './RevealLines.jsx';

const LINES = [
  '這幾個月觀察下來，發現有 IT 資源排程比較緊湊、',
  '外部平台沒開放 API 等狀況，',
  '亦或是一些操作細節與工作日常，需要每日不斷重複，',
  '並且得長時間面對散落在各個檔案裡的資料。',
];

export default function AiImportance1({ active }) {
  return (
    <section className="ai slide-content">
      <div className="rail">
        <span className="rail-label">AI的重要性</span>
      </div>

      <div className="ai-body">
        <h2 className="thesis-heading">
          <Typewriter text="痛點" active={active} />
        </h2>
        <RevealLines lines={LINES} startDelay={0.5} active={active} />
      </div>

      {/* 右側原本是空的。放上痛點示意圖：等距視角、純紅光在黑底上，
          跟整份簡報的配色是同一套，不用另外做色彩處理。
          進場走掃描式揭露，穩定後接不規則閃爍與慢速 3D 浮動。 */}
      <figure className={`ai-figure ai-figure--image${active ? ' is-active' : ''}`}>
        <img src="bottleneck.png" alt="散落在各處的檔案與重複性作業" />
      </figure>
    </section>
  );
}
