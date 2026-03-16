export default function ProtocolDashboardPage() {
  const epochProgress = 72;

  const strategies = [
    {
      name: "Macro Allocation Engine",
      status: "Validated",
      score: "92.4",
      risk: "Moderate",
      epoch: "Epoch 12",
    },
    {
      name: "Temporal Yield Rotation",
      status: "Monitoring",
      score: "84.1",
      risk: "Controlled",
      epoch: "Epoch 12",
    },
    {
      name: "Defensive Liquidity Grid",
      status: "Protected",
      score: "89.7",
      risk: "Low",
      epoch: "Epoch 13",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 text-white">

      {/* HERO */}
      <section className="mb-10 rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-8 backdrop-blur-xl">

        <div className="grid gap-6 md:grid-cols-4">

          <Metric label="Active Epoch" value="12" note="Cycle running" />
          <Metric label="Stability Score" value="94.2" note="GSCL layer" />
          <Metric label="Treasury Posture" value="Defensive" note="Capital shield" />
          <Metric label="Governance Queue" value="03" note="Pending decisions" />

        </div>
      </section>

      {/* EPOCH + TREASURY */}
      <section className="grid gap-6 lg:grid-cols-2">

        {/* Epoch */}
        <Panel title="Epoch Progress">

          <div className="mb-3 flex justify-between text-sm text-white/60">
            <span>Epoch Completion</span>
            <span>{epochProgress}%</span>
          </div>

          <div className="h-3 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full bg-[linear-gradient(90deg,#a98a44,#e6d3a3)]"
              style={{ width: `${epochProgress}%` }}
            />
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4">
            <Mini label="Start" value="03 Mar 2026" />
            <Mini label="Review" value="14 Mar 2026" />
            <Mini label="Close" value="18 Mar 2026" />
          </div>

        </Panel>

        {/* Treasury */}
        <Panel title="Treasury Allocation">

          <Bar label="Protected Reserve" value={42} />
          <Bar label="Strategic Deployment" value={31} />
          <Bar label="Liquidity Buffer" value={18} />
          <Bar label="Governance Reserve" value={9} />

        </Panel>

      </section>

      {/* STRATEGY TABLE */}
      <section className="mt-10">

        <Panel title="Proof of Strategy Validation">

          <div className="overflow-hidden rounded-xl border border-white/10">

            <div className="grid grid-cols-5 bg-white/5 px-4 py-3 text-xs tracking-wider text-white/50">
              <div>Strategy</div>
              <div>Status</div>
              <div>Score</div>
              <div>Risk</div>
              <div>Epoch</div>
            </div>

            {strategies.map((s) => (
              <div
                key={s.name}
                className="grid grid-cols-5 border-t border-white/10 px-4 py-4 text-sm"
              >
                <div>{s.name}</div>
                <div className="text-[var(--sovereign-gold)]">{s.status}</div>
                <div>{s.score}</div>
                <div>{s.risk}</div>
                <div>{s.epoch}</div>
              </div>
            ))}

          </div>

        </Panel>

      </section>

      {/* RISK + SIGNALS */}
      <section className="mt-10 grid gap-6 lg:grid-cols-2">

        {/* Risk */}
        <Panel title="Temporal Risk Engine">

          <Risk title="Macro Drift" value="Contained" />
          <Risk title="Liquidity Shock" value="Low" />
          <Risk title="Strategy Divergence" value="Observed" />
          <Risk title="Recovery Layer" value="Armed" />

        </Panel>

        {/* Signals */}
        <Panel title="System Signals">

          <Signal text="GSCL stability layer synchronized." />
          <Signal text="Treasury defensive posture increased by 4.2%." />
          <Signal text="Strategy divergence detected." />
          <Signal text="Governance queue contains 3 decisions." />

        </Panel>

      </section>

    </div>
  );
}

function Panel({ title, children }: any) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-black/20 p-6 backdrop-blur-xl">
      <h2 className="mb-6 text-xl text-white">{title}</h2>
      {children}
    </div>
  );
}

function Metric({ label, value, note }: any) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-5">
      <div className="text-xs uppercase text-white/40">{label}</div>
      <div className="mt-2 text-2xl">{value}</div>
      <div className="text-sm text-white/40">{note}</div>
    </div>
  );
}

function Mini({ label, value }: any) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-4">
      <div className="text-xs text-white/40">{label}</div>
      <div className="text-sm">{value}</div>
    </div>
  );
}

function Bar({ label, value }: any) {
  return (
    <div className="mb-5">

      <div className="flex justify-between text-sm text-white/60">
        <span>{label}</span>
        <span>{value}%</span>
      </div>

      <div className="mt-2 h-3 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full bg-[linear-gradient(90deg,#a98a44,#e6d3a3)]"
          style={{ width: `${value}%` }}
        />
      </div>

    </div>
  );
}

function Risk({ title, value }: any) {
  return (
    <div className="mb-4 rounded-lg border border-white/10 bg-white/5 p-4">
      <div className="text-sm text-white/60">{title}</div>
      <div className="text-lg text-white">{value}</div>
    </div>
  );
}

function Signal({ text }: any) {
  return (
    <div className="mb-3 rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-white/70">
      {text}
    </div>
  );
}