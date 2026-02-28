// app/institutional/page.tsx
import InstitutionalHero from "../../components/sections/institutional/InstitutionalHero";
import WhyInstitutions from "../../components/sections/institutional/WhyInstitutions";
import GovernancePositioning from "../../components/sections/institutional/GovernancePositioning";
import RiskDiscipline from "../../components/sections/institutional/RiskDiscipline";
import Reporting from "../../components/sections/institutional/Reporting";
import Engagement from "../../components/sections/institutional/Engagement";

export default function InstitutionalPage() {
  return (
    <main>
      <InstitutionalHero />
      <WhyInstitutions />
      <GovernancePositioning />
      <RiskDiscipline />
      <Reporting />
      <Engagement />
    </main>
  );
}