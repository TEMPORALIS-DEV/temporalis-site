// components/sections/technology/SpecOverview.tsx
import Section from "../../layout/Section";
import Panel from "../../ui/Panel";

export default function SpecOverview() {
  return (
    <Section>
      <div className="grid gap-6 md:grid-cols-12 md:items-start">
        <div className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.18em] opacity-60">
            Overview
          </div>
          <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
            Standardized outputs, deterministic enforcement.
          </h2>
          <p className="mt-3 text-sm leading-relaxed opacity-70">
            TEMPORALIS is specified as a control system: inputs are segmented by
            epoch, transformed into signals (score + confidence), and enforced
            via allocation rules and self-healing constraints.
          </p>
        </div>

        <div className="md:col-span-7">
          <div className="grid gap-4 md:grid-cols-2">
            <Panel className="p-6">
              <div className="text-sm font-medium tracking-tight">State</div>
              <p className="mt-2 text-sm leading-relaxed opacity-70">
                Epoch index, timestamps, strategy set, current allocations,
                exposure caps, and last published signals.
              </p>
            </Panel>

            <Panel className="p-6">
              <div className="text-sm font-medium tracking-tight">Signals</div>
              <p className="mt-2 text-sm leading-relaxed opacity-70">
                Normalized score and confidence coefficient per strategy, plus a
                derived exposure recommendation.
              </p>
            </Panel>

            <Panel className="p-6">
              <div className="text-sm font-medium tracking-tight">
                Enforcement
              </div>
              <p className="mt-2 text-sm leading-relaxed opacity-70">
                Rebalances occur at epoch boundaries. Allocation is computed by
                rule, bounded by caps, and recorded on-chain.
              </p>
            </Panel>

            <Panel className="p-6">
              <div className="text-sm font-medium tracking-tight">Audit</div>
              <p className="mt-2 text-sm leading-relaxed opacity-70">
                Deterministic transitions enable reproducible review: same inputs
                yield the same outputs.
              </p>
            </Panel>
          </div>
        </div>
      </div>
    </Section>
  );
}