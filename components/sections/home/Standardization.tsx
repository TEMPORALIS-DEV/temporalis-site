// components/sections/home/Standardization.tsx
import Section from "../../layout/Section";
import Panel from "../../ui/Panel";

export default function Standardization() {
  return (
    <Section>
      <div className="grid gap-6 md:grid-cols-12 md:items-start">
        <div className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.18em] opacity-60">
            Standardization
          </div>
          <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
            A common language for strategy behavior across time.
          </h2>
          <p className="mt-3 text-sm leading-relaxed opacity-70">
            TEMPORALIS defines a protocol standard: how strategies are evaluated
            per epoch, how risk is repriced with confidence, and how exposure is
            enforced deterministically.
          </p>
        </div>

        <div className="md:col-span-7">
          <div className="grid gap-4 md:grid-cols-2">
            <Panel className="p-6">
              <div className="text-sm font-medium tracking-tight">
                Epoch-based evaluation
              </div>
              <div className="mt-2 text-sm leading-relaxed opacity-70">
                Discrete windows define the measurement regime. No cherry-picked
                timeframes. No vague reporting.
              </div>
            </Panel>

            <Panel className="p-6">
              <div className="text-sm font-medium tracking-tight">
                Confidence-weighted scoring
              </div>
              <div className="mt-2 text-sm leading-relaxed opacity-70">
                Risk signals reflect uncertainty. The output is a standardized
                score — not an opinion.
              </div>
            </Panel>

            <Panel className="p-6">
              <div className="text-sm font-medium tracking-tight">
                Deterministic allocation
              </div>
              <div className="mt-2 text-sm leading-relaxed opacity-70">
                Capital moves by rule: exposure is a function of measured
                behavior, not market sentiment.
              </div>
            </Panel>

            <Panel className="p-6">
              <div className="text-sm font-medium tracking-tight">
                Protocol-grade reporting
              </div>
              <div className="mt-2 text-sm leading-relaxed opacity-70">
                A baseline for dashboards, audits, and institutional review —
                consistent across deployments and strategies.
              </div>
            </Panel>
          </div>
        </div>
      </div>
    </Section>
  );
}