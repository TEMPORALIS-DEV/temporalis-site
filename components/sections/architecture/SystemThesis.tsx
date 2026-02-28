// components/sections/architecture/SystemThesis.tsx
import Section from "../../layout/Section";
import Panel from "../../ui/Panel";

export default function SystemThesis() {
  return (
    <Section>
      <div className="grid gap-6 md:grid-cols-12 md:items-start">
        <div className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.18em] opacity-60">
            Thesis
          </div>
          <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
            Capital must be governed through time, not emotion.
          </h2>
          <p className="mt-3 text-sm leading-relaxed opacity-70">
            TEMPORALIS defines a standardized control loop for strategy
            evaluation, risk repricing, and exposure enforcement. Each layer
            operates within discrete temporal windows (epochs), ensuring
            measurement integrity before capital is moved.
          </p>
        </div>

        <div className="md:col-span-7">
          <div className="grid gap-4 md:grid-cols-2">
            <Panel className="p-6">
              <div className="text-sm font-medium tracking-tight">
                Measurement integrity
              </div>
              <div className="mt-2 text-sm leading-relaxed opacity-70">
                Epoch windows prevent arbitrary timeframe selection and isolate
                performance within consistent regimes.
              </div>
            </Panel>

            <Panel className="p-6">
              <div className="text-sm font-medium tracking-tight">
                Risk as a first-class output
              </div>
              <div className="mt-2 text-sm leading-relaxed opacity-70">
                Confidence-weighted scoring translates observed behavior into a
                standardized risk signal.
              </div>
            </Panel>

            <Panel className="p-6">
              <div className="text-sm font-medium tracking-tight">
                Deterministic enforcement
              </div>
              <div className="mt-2 text-sm leading-relaxed opacity-70">
                Allocation is a rule—exposure is derived from score and
                confidence, not narrative.
              </div>
            </Panel>

            <Panel className="p-6">
              <div className="text-sm font-medium tracking-tight">
                Autonomous defense
              </div>
              <div className="mt-2 text-sm leading-relaxed opacity-70">
                Self-healing compresses exposure under adverse regimes without
                discretionary overrides.
              </div>
            </Panel>
          </div>
        </div>
      </div>
    </Section>
  );
}