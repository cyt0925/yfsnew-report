import Typewriter from '../components/Typewriter.jsx';
import RevealLines from './RevealLines.jsx';

const LINES = [
  '這幾個月觀察下來，發現有 IT 資源排程比較緊湊、外部平台沒開放 API 的狀況。',
  '導致有些細節與工作日常，需要每日不斷重複，',
  '且得花大量時間面對龐大的資料，並散落在各個檔案裡。',
];

export default function AiImportance1({ active }) {
  return (
    <section className="ai ai--wide slide-content">
      <div className="rail">
        <span className="rail-label">AI的重要性</span>
      </div>

      <div className="ai-body">
        <h2 className="thesis-heading">
          <Typewriter text="我觀察到的瓶頸" active={active} />
        </h2>
        <RevealLines lines={LINES} startDelay={0.5} active={active} />
      </div>
    </section>
  );
}
