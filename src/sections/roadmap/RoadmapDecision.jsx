// 收尾：拿掉標題和「SOP 已經寫得很清楚」那句鋪陳——前兩頁已經把問題
// 鋪滿了，這裡不用再重複，直接留下決定本身。
// 後來使用者補了訂單量跟處理時間：左欄放情況與決定（字縮一級），
// 右欄一張「以前 → 系統化之後」的處理時間對比卡。
export default function RoadmapDecision({ active }) {
  const delay = (i) => (active ? { animationDelay: `${0.5 + i * 0.45}s` } : { opacity: 1, animation: 'none' });

  return (
    <section className="roadmap-detail roadmap-decision slide-content">
      <div className="rail">
        <span className="rail-label">全貌</span>
      </div>

      {/* 左：情況 → 決定（文案是使用者的）。右：處理時間的前後對比卡，
          把「兩個小時甚至一個下午 → 一小時內」這組數字獨立成一塊，一眼看得到。 */}
      <div className="verdict decision-verdict">
        <p className="verdict-line reveal-line" style={delay(0)}>
          OP 要處理的訂單狀況詭譎多變，有時候量會達到 <b>80 張甚至更多</b>。
          <br />
          目前完全仰賴同仁的細心與記憶來維持，但人工難免有極限。
        </p>
        <p className="verdict-line decision-line reveal-line" style={delay(1)}>
          因此我決定，把流程中<b>改單難抓、手動覆蓋</b>的高風險環節，交由<em>系統</em>自動化處理。
        </p>
        <p className="verdict-line verdict-line--sub reveal-line" style={delay(2)}>
          SOP 繼續負責定義規則，系統負責確保規則真的被執行、而且留得下紀錄。
        </p>
      </div>

      <aside className="decision-time reveal-line" style={delay(3)}>
        <span className="tag">每天處理訂單的時間</span>
        <div className="decision-time-row decision-time-row--before">
          <span className="decision-time-label">以前</span>
          <span className="decision-time-value">兩個小時，甚至一個下午</span>
        </div>
        <span className="decision-time-arrow" aria-hidden="true">↓</span>
        <div className="decision-time-row decision-time-row--after">
          <span className="decision-time-label">系統化之後</span>
          <span className="decision-time-value">一小時內</span>
        </div>
        <p className="decision-time-note">同仁只需要處理系統標出來的異常單。</p>
      </aside>
    </section>
  );
}
