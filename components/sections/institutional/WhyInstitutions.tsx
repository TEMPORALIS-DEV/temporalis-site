import Section from "../../layout/Section";
import Panel from "../../ui/Panel";

export default function WhyInstitutions() {
  return (
    <Section>
      <div className="grid gap-6 md:grid-cols-2">
        <Panel className="p-6">
          <h3 className="text-sm font-medium tracking-tight">
            Measurement integrity
          </h3>
          <p className="mt-2 text-sm leading-relaxed opacity-70">
            Performance is evaluated across defined epochs, preventing arbitrary timeframe bias.
          </p>
        </Panel>

        <Panel className="p-6">
          <h3 className="text-sm font-medium tracking-tight">
            Risk-first architecture
          </h3>
          <p className="mt-2 text-sm leading-relaxed opacity-70">
            Confidence-weighted signals prevent over-exposure under fragile regimes.
          </p>
        </Panel>

        <Panel className="p-6">
          <h3 className="text-sm font-medium tracking-tight">
            Deterministic enforcement
          </h3>
          <p className="mt-2 text-sm leading-relaxed opacity-70">
            Allocation decisions are rule-based and reproducible.
          </p>
        </Panel>

        <Panel className="p-6">
          <h3 className="text-sm font-medium tracking-tight">
            Auditability
          </h3>
          <p className="mt-2 text-sm leading-relaxed opacity-70">
            Identical inputs produce identical outputs. Behavior is reviewable.
          </p>
        </Panel>
      </div>
    </Section>
  );
}