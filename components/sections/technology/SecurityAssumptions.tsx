// components/sections/technology/SecurityAssumptions.tsx
import Section from "../../layout/Section";
import Panel from "../../ui/Panel";

const items = [
  {
    t: "Oracle integrity",
    d: "Signal computation assumes truthful inputs or explicit adversarial handling. Oracles must be monitored and constrained.",
  },
  {
    t: "Epoch boundary enforcement",
    d: "Epoch transitions must be deterministic and resistant to timestamp manipulation within defined tolerance.",
  },
  {
    t: "Strategy adapter safety",
    d: "Adapters must not escalate privileges or bypass caps. External integrations must be sandboxed by design.",
  },
  {
    t: "Governance scope",
    d: "Governance changes should be versioned. Any parameter changes must be auditable and time-delayed where appropriate.",
  },
];

export default function SecurityAssumptions() {
  return (
    <Section>
      <div className="grid gap-6 md:grid-cols-12 md:items-start">
        <div className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.18em] opacity-60">
            Security
          </div>
          <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
            Assumptions and threat boundaries.
          </h2>
          <p className="mt-3 text-sm leading-relaxed opacity-70">
            The standard specifies behavior. Security depends on how signals are
            sourced, adapters are implemented, and governance is constrained.
          </p>
        </div>

        <div className="md:col-span-7">
          <div className="grid gap-4 md:grid-cols-2">
            {items.map((x) => (
              <Panel key={x.t} className="p-6">
                <div className="text-sm font-medium tracking-tight">{x.t}</div>
                <div className="mt-2 text-sm leading-relaxed opacity-70">
                  {x.d}
                </div>
              </Panel>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}