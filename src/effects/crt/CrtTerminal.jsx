import { useEffect, useRef } from 'react';
import { createCrtRenderer, crtStyle, CRT_DEFAULTS } from './crtRenderer.js';

// 對照 @designcodeio/threeui 的 CrtBackground.tsx：host/canvas 生命週期、
// ResizeObserver、IntersectionObserver（離開畫面自動停掉動畫）都照原樣搬過來。
export default function CrtTerminal(props) {
  const hostRef = useRef(null);
  const canvasRef = useRef(null);
  const optionsRef = useRef({ ...CRT_DEFAULTS, ...props });
  optionsRef.current = { ...CRT_DEFAULTS, ...props };

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return undefined;

    const renderer = createCrtRenderer(host, canvas, () => optionsRef.current);
    let frame = 0;
    let visible = true;

    const resize = () => {
      renderer.resize();
      renderer.render(performance.now());
    };
    const tick = (now) => {
      renderer.render(now);
      frame = visible && !document.hidden ? requestAnimationFrame(tick) : 0;
    };

    const resizeObserver = new ResizeObserver(resize);
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true;
      if (visible && !frame) frame = requestAnimationFrame(tick);
      if (!visible && frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    });
    resizeObserver.observe(host);
    intersection.observe(host);
    resize();
    frame = requestAnimationFrame(tick);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersection.disconnect();
      renderer.dispose();
    };
  }, []);

  const options = optionsRef.current;
  return (
    <div
      ref={hostRef}
      className="crt-terminal"
      style={{
        background: crtStyle().background,
        opacity: options.opacity,
        filter: `hue-rotate(${options.hue}deg) saturate(${options.saturation}) brightness(${options.brightness})`,
      }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
