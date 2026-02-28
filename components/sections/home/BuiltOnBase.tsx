// components/sections/home/BuiltOnBase.tsx
import Section from "../../layout/Section";
import Panel from "../../ui/Panel";

export default function BuiltOnBase() {
  return (
    <Section className="pt-0">
      <Panel className="p-8">
        <div className="grid gap-6 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <div className="text-xs uppercase tracking-[0.18em] opacity-60">
              Deployment
            </div>
            <div className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
              Base first. Multi-chain later — after model stability.
            </div>
            <div className="mt-3 text-sm leading-relaxed opacity-70">
              TEMPORALIS is deployed on Base (EVM). Multi-chain expansion is
              planned only after the standard is validated through repeated
              epochs and stress regimes.
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-sm">
              <div className="opacity-70">Current</div>
              <div className="mt-2 text-lg opacity-95">Base (EVM)</div>

              <div className="mt-4 opacity-70">Planned</div>
              <div className="mt-2 opacity-95">
                Ethereum / Arbitrum (roadmap)
              </div>
            </div>
          </div>
        </div>
      </Panel>
    </Section>
  );
}