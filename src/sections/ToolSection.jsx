import IsoDiagram from './IsoDiagram.jsx';

function Metrics({ items }) {
  return (
    <dl className="metrics">
      {items.map((m) => (
        <div key={m.label}>
          <dt>{m.label}</dt>
          <dd>
            {m.value === null ? (
              <span className="pending" title="待補實際數字">—</span>
            ) : (
              m.value
            )}
            <span className="unit">{m.unit}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default function ToolSection({ tool }) {
  return (
    <section className={`tool tool--${tool.layout} slide-content`}>
      <div className="rail">
        <span className="rail-index">{tool.index}</span>
        <span className="rail-label">{tool.kicker}</span>
      </div>

      <header className="tool-head">
        <h2>{tool.name}</h2>
        <span className={`status status--${tool.status === '已上線' ? 'live' : 'wip'}`}>
          {tool.status}
        </span>
      </header>

      <div className="tool-problem">
        <span className="tag">卡住的地方</span>
        <p>{tool.problem}</p>
      </div>

      <div className="tool-approach">
        <span className="tag">怎麼解</span>
        <p>{tool.approach}</p>
      </div>

      <figure className="tool-figure">
        <IsoDiagram variant={tool.layout === 'lead' ? 'scatter' : 'converge'} />
      </figure>

      <div className="tool-metrics">
        <Metrics items={tool.metrics} />
      </div>
    </section>
  );
}
