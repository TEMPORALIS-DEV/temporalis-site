// components/sections/architecture/GSCL.tsx
import Section from "../../layout/Section";
import Panel from "../../ui/Panel";

const outputs = [
  { k: "Normalized Score", v: "Comparable across strategies/epochs" },
  { k: "Confidence Coefficient", v: "Uncertainty-weighted reliability" },
  { k: "Exposure Signal", v: "Risk-adjusted allocation input" },
];

export default function GSCL() {
  return (
    <Section>
      <div className="grid gap-6 md:grid-cols-12 md:items-start">
        <div className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.18em] opacity-60">
            Risk Engine
          </div>
          <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
            GSCL — Confidence-Weighted Risk Repricing
          </h2>
          <p className="mt-3 text-sm leading-relaxed opacity-70">
            GSCL converts epoch measurements into a confidence-weighted risk
            score. The output is standardized: it is designed to be consumed by
            deterministic allocation rules, not human interpretation.
          </p>
        </div>

        <div className="md:col-span-7">
          <div className="grid gap-4 md:grid-cols-3">
            {outputs.map((o) => (
              <Panel key={o.k} className="p-6">
                <div className="text-sm font-medium tracking-tight">{o.k}</div>
                <div className="mt-2 text-sm leading-relaxed opacity-70">
                  {o.v}
                </div>
              </Panel>
            ))}
          </div>

          <Panel className="mt-4 p-6">
            <div className="text-sm font-medium tracking-tight">
              Why confidence matters
            </div>
            <div className="mt-2 text-sm leading-relaxed opacity-70">
              Two strategies can show similar returns while carrying radically
              different uncertainty. GSCL explicitly prices uncertainty into the
              signal to prevent over-exposure under fragile regimes.
            </div>
          </Panel>
        </div>
      </div>
    </Section>
  );
}