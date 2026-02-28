// components/sections/home/Problem.tsx
import Section from "../../layout/Section";
import Panel from "../../ui/Panel";

export default function Problem() {
  return (
    <Section>
      <div className="grid gap-6 md:grid-cols-12 md:items-start">
        <div className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.18em] opacity-60">
            The Problem
          </div>
          <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
            Most DeFi optimizes yield — and ignores time.
          </h2>
          <p className="mt-3 text-sm leading-relaxed opacity-70">
            Strategies are judged on short-term performance, without a rigorous
            framework for time-window evaluation, regime shifts, or disciplined
            exposure control.
          </p>
        </div>

        <div className="md:col-span-7">
          <div className="grid gap-4 md:grid-cols-2">
            <Panel className="p-6">
              <div className="text-sm font-medium tracking-tight">
                No temporal discipline
              </div>
              <div className="mt-2 text-sm leading-relaxed opacity-70">
                Without epochs, performance is measured inconsistently — making
                risk signals unreliable.
              </div>
            </Panel>

            <Panel className="p-6">
              <div className="text-sm font-medium tracking-tight">
                Risk not repriced
              </div>
              <div className="mt-2 text-sm leading-relaxed opacity-70">
                Static assumptions fail under changing regimes. The system needs
                dynamic repricing across time.
              </div>
            </Panel>

            <Panel className="p-6">
              <div className="text-sm font-medium tracking-tight">
                Allocation is emotional
              </div>
              <div className="mt-2 text-sm leading-relaxed opacity-70">
                Capital moves on narratives. A serious standard translates
                measured behavior into deterministic exposure.
              </div>
            </Panel>

            <Panel className="p-6">
              <div className="text-sm font-medium tracking-tight">
                No self-healing
              </div>
              <div className="mt-2 text-sm leading-relaxed opacity-70">
                When conditions degrade, systems should compress exposure
                automatically — not wait for human intervention.
              </div>
            </Panel>
          </div>
        </div>
      </div>
    </Section>
  );
}