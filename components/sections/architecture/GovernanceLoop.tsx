// components/sections/architecture/GovernanceLoop.tsx
import Section from "../../layout/Section";
import Panel from "../../ui/Panel";

const steps = [
  { n: "01", t: "Epoch", d: "Define measurement window" },
  { n: "02", t: "Score", d: "Compute standardized performance metrics" },
  { n: "03", t: "Confidence", d: "Price uncertainty into the signal" },
  { n: "04", t: "Allocation", d: "Deterministic exposure enforcement" },
  { n: "05", t: "Monitoring", d: "Observe regime behavior & constraints" },
  { n: "06", t: "Next Epoch", d: "Transition boundary & repeat loop" },
];

export default function GovernanceLoop() {
  return (
    <Section>
      <div className="flex items-end justify-between gap-6">
        <div>
          <div className="text-xs uppercase tracking-[0.18em] opacity-60">
            Control Loop
          </div>
          <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
            Capital Governance Loop
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed opacity-70">
            A repeatable loop that prevents discretionary drift. Evaluation,
            repricing, and enforcement happen on schedule.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {steps.map((s) => (
          <Panel key={s.n} className="p-6">
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase tracking-[0.18em] opacity-60">
                {s.n}
              </div>
              <div className="text-xs opacity-50">Step</div>
            </div>
            <div className="mt-3 text-sm font-medium tracking-tight">{s.t}</div>
            <div className="mt-2 text-sm leading-relaxed opacity-70">{s.d}</div>
          </Panel>
        ))}
      </div>

      <Panel className="mt-4 p-6">
        <div className="text-sm font-medium tracking-tight">
          Determinism as a feature
        </div>
        <div className="mt-2 text-sm leading-relaxed opacity-70">
          TEMPORALIS is designed for institutional review: reproducible behavior,
          auditable state transitions, and standardized reporting across time.
        </div>
      </Panel>
    </Section>
  );
}