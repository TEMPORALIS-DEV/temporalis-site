// components/sections/technology/Deployment.tsx
import Section from "../../layout/Section";
import Panel from "../../ui/Panel";

export default function Deployment() {
  return (
    <Section>
      <div className="grid gap-6 md:grid-cols-12 md:items-start">
        <div className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.18em] opacity-60">
            Deployment
          </div>
          <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
            Base-first execution. Multi-chain after stability.
          </h2>
          <p className="mt-3 text-sm leading-relaxed opacity-70">
            Deployment sequencing is a risk decision. TEMPORALIS prioritizes
            reproducibility and stress validation before multi-chain expansion.
          </p>
        </div>

        <div className="md:col-span-7">
          <Panel className="p-6">
            <div className="grid gap-4 md:grid-cols-3">
              <Box k="Current" v="Base (EVM)" />
              <Box k="Roadmap" v="Ethereum / Arbitrum" />
              <Box k="Policy" v="Stability before reach" />
            </div>

            <div className="mt-4 text-xs leading-relaxed opacity-55">
              Multi-chain is a distribution layer. The standard is the product.
            </div>
          </Panel>
        </div>
      </div>
    </Section>
  );
}

function Box({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
      <div className="text-xs uppercase tracking-[0.18em] opacity-60">{k}</div>
      <div className="mt-2 text-sm opacity-90">{v}</div>
    </div>
  );
}