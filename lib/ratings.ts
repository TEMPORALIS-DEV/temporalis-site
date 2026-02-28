import { STRATEGIES } from "./strategies";

export type RatingRow = {
  rank: number;
  id: string;
  name: string;
  risk: "Low" | "Medium" | "High";
  pos2Score: number;
};

function baseRiskScore(risk: "Low" | "Medium" | "High") {
  if (risk === "Low") return 85;
  if (risk === "Medium") return 72;
  return 55;
}

function statusBonus(status: "Research" | "Simulated" | "Live") {
  if (status === "Live") return 10;
  if (status === "Simulated") return 6;
  return 2;
}

export function buildRatings(): RatingRow[] {
  const rows = STRATEGIES.map((s) => {
    const score =
      baseRiskScore(s.risk) +
      statusBonus(s.status) +
      Math.min(5, s.onChainSignals.length); // tiny bump

    return {
      rank: 0,
      id: s.id,
      name: s.name,
      risk: s.risk,
      pos2Score: Math.max(0, Math.min(100, score)),
    };
  })
    .sort((a, b) => b.pos2Score - a.pos2Score)
    .map((r, i) => ({ ...r, rank: i + 1 }));

  return rows;
}