// components/sections/architecture/ArchitectureHero.tsx
import Link from "next/link";
import Section from "../../layout/Section";
import Panel from "../../ui/Panel";

export default function ArchitectureHero() {
  return (
    <div className="temporalis-vignette temporalis-grid">
      <Section className="pt-12 md:pt-16">
        <div className="grid gap-8 md:grid-cols-12 md:items-start">
          <div className="md:col-span-8">
            <div className="text-xs uppercase tracking-[0.18em] opacity-60">
              Architecture
            </div>

            <h1 className="mt-4 text-4xl font-medium tracking-tight md:text-6xl">
              Temporal Capital
              <span className="block opacity-90">Governance Loop</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed opacity-75 md:text-lg">
              A standardized control loop for epoch-based evaluation,
              confidence-weighted risk repricing, and deterministic exposure
              enforcement.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed opacity-60">
              Not a token. Not a vault. An infrastructure layer for time-governed
              capital systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/technology"
                className="rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm hover:bg-white/[0.06]"
              >
                View Technical Spec
              </Link>
              <Link
                href="/docs"
                className="rounded-full border border-white/10 px-5 py-2.5 text-sm opacity-80 hover:opacity-100"
              >
                Documentation
              </Link>
            </div>
          </div>

          <div className="md:col-span-4">
            <Panel className="p-6">
              <div className="text-xs uppercase tracking-[0.18em] opacity-60">
                Components
              </div>

              <div className="mt-4 space-y-3 text-sm">
                <Row k="Temporal Layer" v="Epoch Manager" />
                <Row k="Risk Engine" v="GSCL Scoring" />
                <Row k="Defense" v="Self-Healing" />
                <Row k="Action" v="Allocation Engine" />
                <Row k="Model" v="Data Flow" />
              </div>

              <div className="mt-5 text-xs leading-relaxed opacity-55">
                The standard defines how strategies are measured across time
                windows, translated into confidence-weighted risk, and enforced
                via deterministic exposure rules.
              </div>
            </Panel>
          </div>
        </div>
      </Section>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="opacity-70">{k}</span>
      <span className="opacity-95">{v}</span>
    </div>
  );
}