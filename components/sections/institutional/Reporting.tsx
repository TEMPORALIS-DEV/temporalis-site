import Section from "../../layout/Section";
import Panel from "../../ui/Panel";

export default function Reporting() {
  return (
    <Section>
      <Panel className="p-8">
        <h2 className="text-2xl font-medium tracking-tight">
          Standardized reporting across time.
        </h2>
        <p className="mt-4 text-sm leading-relaxed opacity-70">
          Outputs are designed for institutional review:
          epoch-indexed metrics, signal publication logs, and deterministic allocation history.
        </p>
      </Panel>
    </Section>
  );
}