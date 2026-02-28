import Section from "../../layout/Section";
import DashboardClient from "./DashboardClient";
import { getEpochData } from "../../../lib/epoch";

type EpochView = {
  ok: boolean;
  epochIndex?: number;
  epochEnd?: number;
  timeLeft?: number;
  error?: string;
};

export default async function DashboardLayout() {
  const epoch: EpochView = await safeEpoch();

  return (
    <Section className="pt-14 md:pt-18">
      <DashboardClient epoch={epoch} />
    </Section>
  );
}

async function safeEpoch(): Promise<EpochView> {
  try {
    const data = await getEpochData();
    return { ok: true, ...data };
  } catch (e: any) {
    return {
      ok: false,
      error: e?.message ?? "Offline mode",
    };
  }
}