// components/sections/home/InstitutionalNote.tsx
import Link from "next/link";
import Section from "../../layout/Section";
import Panel from "../../ui/Panel";

export default function InstitutionalNote() {
  return (
    <Section>
      <Panel className="p-8">
        <div className="grid gap-6 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <div className="text-xs uppercase tracking-[0.18em] opacity-60">
              Institutional Orientation
            </div>
            <div className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
              Built for disciplined allocators and protocol treasuries.
            </div>
            <div className="mt-3 text-sm leading-relaxed opacity-70">
              TEMPORALIS is designed around governance, downside discipline, and
              measurement standards — not retail speculation. The protocol
              exposes transparent, time-segmented metrics intended for serious
              capital operators.
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="flex flex-col gap-3">
              <Link
                href="/institutional"
                className="rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm hover:bg-white/[0.06]"
              >
                Institutional Overview
              </Link>
              <Link
                href="/docs"
                className="rounded-full border border-white/10 px-5 py-2.5 text-sm opacity-80 hover:opacity-100"
              >
                Read Documentation
              </Link>
            </div>
          </div>
        </div>
      </Panel>
    </Section>
  );
}