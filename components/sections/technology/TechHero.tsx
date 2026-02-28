// components/sections/technology/TechHero.tsx
import Link from "next/link";
import Section from "../../layout/Section";
import Panel from "../../ui/Panel";

export default function TechHero() {
  return (
    <div className="temporalis-vignette temporalis-grid">
      <Section className="pt-12 md:pt-16">
        <div className="grid gap-8 md:grid-cols-12 md:items-start">
          <div className="md:col-span-8">
            <div className="text-xs uppercase tracking-[0.18em] opacity-60">
              Technical Specification
            </div>

            <h1 className="mt-4 text-4xl font-medium tracking-tight md:text-6xl">
              Protocol Interfaces
              <span className="block opacity-90">and Enforcement Rules</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed opacity-75 md:text-lg">
              A spec-first view of TEMPORALIS: state, signals, invariants, and
              deterministic allocation behavior across epochs.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/docs"
                className="rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm hover:bg-white/[0.06]"
              >
                Documentation
              </Link>
              <Link
                href="/architecture"
                className="rounded-full border border-white/10 px-5 py-2.5 text-sm opacity-80 hover:opacity-100"
              >
                Architecture
              </Link>
            </div>
          </div>

          <div className="md:col-span-4">
            <Panel className="p-6">
              <div className="text-xs uppercase tracking-[0.18em] opacity-60">
                Scope
              </div>

              <div className="mt-4 space-y-3 text-sm">
                <Row k="Lifecycle" v="Epoch boundaries" />
                <Row k="Signals" v="Score + Confidence" />
                <Row k="Action" v="Allocation rules" />
                <Row k="Defense" v="Self-healing" />
                <Row k="Review" v="Auditable state" />
              </div>

              <div className="mt-5 text-xs leading-relaxed opacity-55">
                This page describes expected behavior and interfaces. It is not
                a marketing summary.
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