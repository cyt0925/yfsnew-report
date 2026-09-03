// 收尾：拿掉標題和「SOP 已經寫得很清楚」那句鋪陳——前兩頁已經把問題
// 鋪滿了，這裡不用再重複，直接留下決定本身，字更大、更靠頁面上方。
export default function RoadmapDecision({ active }) {
  const delay = (i) => (active ? { animationDelay: `${0.5 + i * 0.45}s` } : { opacity: 1, animation: 'none' });

  return (
    <section className="roadmap-detail roadmap-decision slide-content">
      <div className="rail">
        <span className="rail-label">全貌</span>
      </div>

      <div className="verdict">
        <p className="verdict-line reveal-line" style={delay(0)}>
          目前完全仰賴同仁的細心與記憶來維持，但人工難免有極限。
          <br />
          因此我決定，把流程中<b>改單難抓、手動覆蓋</b>的高風險環節，交由<em>系統</em>自動化處理。
        </p>
        <p className="verdict-line verdict-line--sub reveal-line" style={delay(1)}>
          SOP 繼續負責定義規則，系統負責確保規則真的被執行、而且留得下紀錄。
        </p>
      </div>
    </section>
  );
}
