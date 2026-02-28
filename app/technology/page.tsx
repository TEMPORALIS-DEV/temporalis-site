// app/technology/page.tsx
import TechHero from "../../components/sections/technology/TechHero";
import SpecOverview from "../../components/sections/technology/SpecOverview";
import Interfaces from "../../components/sections/technology/Interfaces";
import Signals from "../../components/sections/technology/Signals";
import Invariants from "../../components/sections/technology/Invariants";
import SecurityAssumptions from "../../components/sections/technology/SecurityAssumptions";
import Deployment from "../../components/sections/technology/Deployment";

export default function TechnologyPage() {
  return (
    <main>
      <TechHero />
      <SpecOverview />
      <Interfaces />
      <Signals />
      <Invariants />
      <SecurityAssumptions />
      <Deployment />
    </main>
  );
}