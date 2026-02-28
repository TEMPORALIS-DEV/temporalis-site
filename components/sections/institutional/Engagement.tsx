import Section from "../../layout/Section";
import Panel from "../../ui/Panel";

export default function Engagement() {
  return (
    <Section>
      <Panel className="p-8">
        <h2 className="text-xl font-medium tracking-tight">
          Institutional engagement
        </h2>
        <p className="mt-4 text-sm leading-relaxed opacity-70">
          For research collaboration, treasury integration,
          or governance review inquiries, contact the protocol team.
        </p>
      </Panel>
    </Section>
  );
}