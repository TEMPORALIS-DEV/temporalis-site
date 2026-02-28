// components/sections/technology/Invariants.tsx
import Section from "../../layout/Section";
import Panel from "../../ui/Panel";

const inv = [
  "Rebalance occurs only at epoch boundary (no intra-epoch discretionary moves).",
  "Allocation weights must sum to 100% within configured precision bounds.",
  "Exposure must not exceed caps derived from confidence and risk budgets.",
  "Self-healing compression cannot be bypassed by UI-level decisions.",
  "Published signals are immutable for a given epoch (or versioned explicitly).",
];

export default function Invariants() {
  return (
    <Section>
      <div className="grid gap-6 md:grid-cols-12 md:items-start">
        <div className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.18em] opacity-60">
            Invariants
          </div>
          <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
            Protocol rules that must always hold.
          </h2>
          <p className="mt-3 text-sm leading-relaxed opacity-70">
            These invariants define expected behavior and enable institutional
            review. Violations indicate implementation or integration faults.
          </p>
        </div>

        <div className="md:col-span-7">
          <Panel className="p-6">
            <ul className="space-y-2 text-sm opacity-75">
              {inv.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-[2px] h-1.5 w-1.5 rounded-full bg-white/40" />
                  <span className="leading-relaxed">{x}</span>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </Section>
  );
}