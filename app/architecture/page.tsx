// app/architecture/page.tsx
import ArchitectureHero from "../../components/sections/architecture/ArchitectureHero";
import SystemThesis from "../../components/sections/architecture/SystemThesis";
import EpochManager from "../../components/sections/architecture/EpochManager";
import GSCL from "../../components/sections/architecture/GSCL";
import SelfHealing from "../../components/sections/architecture/SelfHealing";
import AllocationEngine from "../../components/sections/architecture/AllocationEngine";
import DataFlow from "../../components/sections/architecture/DataFlow";
import GovernanceLoop from "../../components/sections/architecture/GovernanceLoop";

export default function ArchitecturePage() {
  return (
    <main>
      <ArchitectureHero />
      <SystemThesis />
      <EpochManager />
      <GSCL />
      <SelfHealing />
      <AllocationEngine />
      <DataFlow />
      <GovernanceLoop />
    </main>
  );
}