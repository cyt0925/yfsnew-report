export default function Thesis() {
  return (
    <section className="thesis slide-content">
      <div className="rail">
        <span className="rail-label">緒論</span>
      </div>

      <div className="thesis-body">
        <p className="lede">
          營運的瓶頸很少是「不夠努力」，多半是同一件事被重複做了太多次。
        </p>
        <p className="prose">
          這份報告記錄試用期間的四個切入點。每一個都從一段實際卡住的流程開始，
          先把它拆開看清楚，再決定哪一段值得交給工具處理。工具本身不是重點，
          流程被縮短了多少才是。
        </p>
      </div>

      <div className="thesis-aside">
        <dl className="figures">
          <div>
            <dt>切入流程</dt>
            <dd>4</dd>
          </div>
          <div>
            <dt>試用期間</dt>
            <dd>3<span>個月</span></dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
