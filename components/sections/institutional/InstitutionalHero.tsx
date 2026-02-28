import Section from "../../layout/Section";
import Panel from "../../ui/Panel";

export default function InstitutionalHero() {
  return (
    <Section className="pt-12 md:pt-16">
      <div className="grid gap-8 md:grid-cols-12 md:items-start">
        <div className="md:col-span-8">
          <div className="text-xs uppercase tracking-[0.18em] opacity-60">
            Institutional Orientation
          </div>

          <h1 className="mt-4 text-4xl font-medium tracking-tight md:text-6xl">
            Built for disciplined capital.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed opacity-75 md:text-lg">
            TEMPORALIS is a governance standard for time-segmented evaluation,
            confidence-weighted risk repricing, and deterministic exposure control.
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed opacity-60">
            It is not a yield product. It is an infrastructure layer for capital discipline.
          </p>
        </div>

        <div className="md:col-span-4">
          <Panel className="p-6">
            <div className="text-xs uppercase tracking-[0.18em] opacity-60">
              Focus
            </div>
            <div className="mt-4 space-y-3 text-sm">
              <Row k="Treasuries" />
              <Row k="Family Offices" />
              <Row k="Sovereign Capital" />
              <Row k="Institutional Allocators" />
            </div>
          </Panel>
        </div>
      </div>
    </Section>
  );
}

function Row({ k }: { k: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
      <span className="opacity-85">{k}</span>
    </div>
  );
}