import Section from "@/components/layout/Section";
import Panel from "@/components/ui/Panel";

export default function Page() {
  return (
    <main>
      <Section>
        <Panel className="p-8">
          <div className="text-xs uppercase tracking-[0.18em] opacity-60">
            TEMPORALIS
          </div>
          <h1 className="mt-3 text-3xl font-medium tracking-tight">
            Coming soon
          </h1>
          <p className="mt-3 text-sm leading-relaxed opacity-70">
            This page is being migrated to the new institutional protocol
            standard structure.
          </p>
        </Panel>
      </Section>
    </main>
  );
}