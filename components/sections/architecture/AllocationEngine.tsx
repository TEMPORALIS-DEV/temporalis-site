// components/sections/architecture/AllocationEngine.tsx
import Section from "../../layout/Section";
import Panel from "../../ui/Panel";

const rules = [
  "Exposure is a function of score × confidence",
  "Caps enforce risk budgets per epoch",
  "Rebalance occurs only at epoch boundaries",
  "Capital distribution is deterministic and auditable",
];

export default function AllocationEngine() {
  return (
    <Section>
      <div className="grid gap-6 md:grid-cols-12 md:items-start">
        <div className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.18em] opacity-60">
            Action Layer
          </div>
          <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
            Deterministic Allocation Engine
          </h2>
          <p className="mt-3 text-sm leading-relaxed opacity-70">
            Allocation is derived from standardized outputs. Exposure is a rule,
            not an opinion. This allows institutional review, consistent
            reporting, and reproducible behavior under stress.
          </p>
        </div>

        <div className="md:col-span-7">
          <Panel className="p-6">
            <div className="text-sm font-medium tracking-tight">
              Enforcement principles
            </div>
            <ul className="mt-3 space-y-2 text-sm opacity-75">
              {rules.map((r) => (
                <li key={r} className="flex gap-3">
                  <span className="mt-[2px] h-1.5 w-1.5 rounded-full bg-white/40" />
                  <span className="leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </Section>
  );
}