export default function TradePage() {
  return (
    <section className="section">
      <div className="panel hero-panel">
        <h1 className="h1">Trade Engine</h1>
        <p className="sub">
          Velora Trade is a strategy-aware execution layer. This interface will allow routing,
          simulation, and risk-aware swaps.
        </p>

        <div className="grid-mini">
          <div className="mini-card">
            <div className="mini-h">Smart Routing</div>
            <div className="muted small">Auto-select best path across DEXs and aggregators.</div>
          </div>
          <div className="mini-card">
            <div className="mini-h">Simulation</div>
            <div className="muted small">Preview slippage and execution before confirming.</div>
          </div>
          <div className="mini-card">
            <div className="mini-h">Strategy Context</div>
            <div className="muted small">Trades are evaluated using Proof-of-Strategy data.</div>
          </div>
        </div>

        <div className="muted small" style={{ marginTop: 14 }}>
          Coming soon — this is part of Velora Layer 2.
        </div>
      </div>
    </section>
  );
}