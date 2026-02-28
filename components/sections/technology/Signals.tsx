// components/sections/technology/Signals.tsx
import Section from "../../layout/Section";
import Panel from "../../ui/Panel";

const signals = [
  {
    k: "score",
    v: "Normalized performance output per epoch (comparable across strategies).",
  },
  {
    k: "confidence",
    v: "Reliability coefficient pricing uncertainty into the signal.",
  },
  {
    k: "exposure",
    v: "Derived allocation weight, bounded by caps and self-healing constraints.",
  },
];

export default function Signals() {
  return (
    <Section>
      <div className="grid gap-6 md:grid-cols-12 md:items-start">
        <div className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.18em] opacity-60">
            Signals
          </div>
          <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
            Outputs are standardized, not persuasive.
          </h2>
          <p className="mt-3 text-sm leading-relaxed opacity-70">
            Signals must be consistent across time and environments. They are
            designed to be consumed by deterministic rules and reviewed
            objectively.
          </p>
        </div>

        <div className="md:col-span-7">
          <div className="grid gap-4 md:grid-cols-3">
            {signals.map((s) => (
              <Panel key={s.k} className="p-6">
                <div className="font-mono text-[12px] opacity-90">{s.k}</div>
                <div className="mt-2 text-sm leading-relaxed opacity-70">
                  {s.v}
                </div>
              </Panel>
            ))}
          </div>

          <Panel className="mt-4 p-6">
            <div className="text-sm font-medium tracking-tight">
              Determinism requirement
            </div>
            <div className="mt-2 text-sm leading-relaxed opacity-70">
              For a given epoch and input set, the same signals must produce the
              same allocation outcome. This enables auditability and prevents
              discretionary drift.
            </div>
          </Panel>
        </div>
      </div>
    </Section>
  );
}