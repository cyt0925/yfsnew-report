import { useMemo } from 'react';
import { buildLogicCoreSrcDoc } from './buildSrcDoc.js';

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

/**
 * Logic Core 等距場景，改成完全由本站提供資源（不連任何外部 CDN）。
 * hue / saturation / brightness 與原套件一樣，是套在整個場景上的 CSS 濾鏡。
 */
export default function LogicCore({
  hue = 0,
  saturation = 1,
  brightness = 1,
  className,
  title = 'Logic Core',
}) {
  const srcDoc = useMemo(() => buildLogicCoreSrcDoc(), []);

  const h = clamp(hue, -180, 180);
  const s = clamp(saturation, 0, 2);
  const b = clamp(brightness, 0.35, 1.65);
  const filter =
    h === 0 && s === 1 && b === 1
      ? undefined
      : `hue-rotate(${h}deg) saturate(${s}) brightness(${b})`;

  return (
    <iframe
      className={className}
      title={title}
      srcDoc={srcDoc}
      loading="eager"
      sandbox="allow-scripts allow-same-origin"
      style={{
        display: 'block',
        width: '100%',
        height: '100%',
        border: 0,
        filter,
        background: '#050505',
      }}
    />
  );
}
