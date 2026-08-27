/**
 * 等距流程圖解，呼應封面的 isometric 語言。
 * before：散落、各自為政的步驟；after：收斂成一條線。
 * 純 SVG，沒有額外依賴。
 */
export default function IsoDiagram({ variant = 'converge', className = '' }) {
  const plate = (x, y, w = 46, h = 26, cls = 'iso-plate') => (
    <path
      className={cls}
      d={`M${x},${y} l${w / 2},${-h / 2} l${w / 2},${h / 2} l${-w / 2},${h / 2} Z`}
    />
  );

  if (variant === 'scatter') {
    return (
      <svg className={`iso ${className}`} viewBox="0 0 260 170" role="img" aria-label="流程散落在多個檔案之間">
        {plate(20, 60)}
        {plate(96, 34)}
        {plate(150, 92)}
        {plate(60, 118)}
        {plate(178, 52, 46, 26, 'iso-plate iso-accent')}
        <g className="iso-link">
          <path d="M66,60 L119,34" />
          <path d="M119,47 L173,92" />
          <path d="M83,118 L142,92" />
          <path d="M142,47 L201,52" />
        </g>
      </svg>
    );
  }

  return (
    <svg className={`iso ${className}`} viewBox="0 0 260 170" role="img" aria-label="流程收斂成單一路徑">
      {plate(24, 118)}
      {plate(78, 96)}
      {plate(132, 74)}
      {plate(186, 52, 46, 26, 'iso-plate iso-accent')}
      <g className="iso-link">
        <path d="M70,118 L101,96" />
        <path d="M124,96 L155,74" />
        <path d="M178,74 L209,52" />
      </g>
    </svg>
  );
}
