// components/sections/architecture/EpochManager.tsx
import Section from "../../layout/Section";
import Panel from "../../ui/Panel";

const points = [
  "Fixed duration windows (epoch length)",
  "Deterministic boundary transitions (start/end)",
  "Historical segmentation integrity (no cherry-picking)",
  "Regime-aware evaluation (contextual measurement)",
];

export default function EpochManager() {
  return (
    <Section>
      <div className="grid gap-6 md:grid-cols-12 md:items-start">
        <div className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.18em] opacity-60">
            Temporal Layer
          </div>
          <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
            Epoch Manager
          </h2>
          <p className="mt-3 text-sm leading-relaxed opacity-70">
            Strategies are evaluated over discrete epochs. Each epoch defines a
            measurement regime—performance is recorded, normalized, and locked
            before capital decisions are made.
          </p>
        </div>

        <div className="md:col-span-7">
          <Panel className="p-6">
            <div className="text-sm font-medium tracking-tight">
              Key properties
            </div>
            <ul className="mt-3 space-y-2 text-sm opacity-75">
              {points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-[2px] h-1.5 w-1.5 rounded-full bg-white/40" />
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </Section>
  );
}