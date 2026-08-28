import Typewriter from '../components/Typewriter.jsx';
import RevealLines from './RevealLines.jsx';
import CrtTerminal from '../effects/crt/CrtTerminal.jsx';

const LINES = [
  '製作本地端工具，在操作過程補足半自動化的目標。',
  '同仁只需要做機器無法替代的事，剩下交給工具自動處理。',
  '後端串接統一的 Web 介面，每一次操作都在同一個地方完成，修改紀錄完整留存。',
  '擺脫 IT 排程的瓶頸、快速看到效益，也解決長時間比對資料的視覺疲勞。',
];

export default function AiImportance2({ active }) {
  return (
    <section className="ai slide-content">
      <div className="rail">
        <span className="rail-label">AI的重要性</span>
      </div>

      <div className="ai-body">
        <h2 className="thesis-heading">
          <Typewriter text="那到底怎麼做到" active={active} />
        </h2>
        <RevealLines lines={LINES} startDelay={0.5} active={active} />
      </div>

      <figure className="ai-figure">
        {/* 只在這一步顯示時才掛載，離開就卸載 —— 跟封面的 3D 場景、
            總覽的路線圖是同一套原則：不用的時候不要背景燒 GPU。 */}
        {active && (
          <CrtTerminal speed={1} typeSpeed={1.05} motion={0.85} hue={0} saturation={1} brightness={1} opacity={1} />
        )}
        <div className="claude-badge">
          <img src="claude-code-logo.png" alt="Claude Code" />
          <span>Claude Code · Anthropic</span>
        </div>
      </figure>
    </section>
  );
}
