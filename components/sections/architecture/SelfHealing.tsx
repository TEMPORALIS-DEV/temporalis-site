// components/sections/architecture/SelfHealing.tsx
import Section from "../../layout/Section";
import Panel from "../../ui/Panel";

const triggers = [
  "Score degradation beyond threshold",
  "Confidence collapse across consecutive epochs",
  "Regime shift detection (behavioral divergence)",
  "Drawdown/risk envelope breach",
];

export default function SelfHealing() {
  return (
    <Section>
      <div className="grid gap-6 md:grid-cols-12 md:items-start">
        <div className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.18em] opacity-60">
            Defense Layer
          </div>
          <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
            Self-Healing — Autonomous Risk Compression
          </h2>
          <p className="mt-3 text-sm leading-relaxed opacity-70">
            When GSCL signals deterioration, exposure compresses automatically.
            No discretionary override. No narrative. Capital responds to measured
            behavior.
          </p>
        </div>

        <div className="md:col-span-7">
          <Panel className="p-6">
            <div className="text-sm font-medium tracking-tight">
              Typical triggers
            </div>
            <ul className="mt-3 space-y-2 text-sm opacity-75">
              {triggers.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-[2px] h-1.5 w-1.5 rounded-full bg-white/40" />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 text-xs leading-relaxed opacity-55">
              Self-healing is a protocol-grade safeguard: it enforces downside
              discipline without requiring governance latency.
            </div>
          </Panel>
        </div>
      </div>
    </Section>
  );
}