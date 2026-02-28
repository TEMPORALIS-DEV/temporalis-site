import Section from "../../layout/Section";
import Panel from "../../ui/Panel";

export default function RiskDiscipline() {
  return (
    <Section>
      <div className="grid gap-6 md:grid-cols-3">
        <Panel className="p-6">
          <div className="text-sm font-medium tracking-tight">
            Exposure caps
          </div>
          <p className="mt-2 text-sm opacity-70">
            Strategy weights are bounded by predefined risk budgets.
          </p>
        </Panel>

        <Panel className="p-6">
          <div className="text-sm font-medium tracking-tight">
            Self-healing
          </div>
          <p className="mt-2 text-sm opacity-70">
            Exposure compresses under adverse regime shifts.
          </p>
        </Panel>

        <Panel className="p-6">
          <div className="text-sm font-medium tracking-tight">
            Epoch discipline
          </div>
          <p className="mt-2 text-sm opacity-70">
            Rebalances occur at boundary conditions only.
          </p>
        </Panel>
      </div>
    </Section>
  );
}