import React from "react";

const items = [
  {
    title: "Strategy ID",
    text: "Every strategy is uniquely identified and documented, enabling transparent comparison and governance.",
  },
  {
    title: "Risk Rating",
    text: "Standardized risk labels (Low/Medium/High) with clear assumptions and failure modes.",
  },
  {
    title: "Performance Trace",
    text: "Simulated and live performance tracking with methodology disclosure — no ‘black box APR’.",
  },
  {
    title: "Governance-ready",
    text: "The DAO can approve, pause, or upgrade strategies with auditable decision trails.",
  },
];

export default function ProofOfStrategySection() {
  return (
    <section id="strategies" className="w-full py-16">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-semibold tracking-tight">Proof-of-Strategy (PoS²)</h2>
        <p className="mt-3 max-w-3xl text-sm opacity-80">
          Velora introduces a strategy transparency standard: users don’t just see APR — they see how it’s produced.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border p-6">
              <div className="text-base font-medium">{it.title}</div>
              <p className="mt-2 text-sm opacity-80">{it.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border p-6">
          <div className="text-sm font-medium">Why it matters</div>
          <p className="mt-2 text-sm opacity-80">
            Most DeFi yields are marketed as numbers. Velora turns yields into verifiable strategies with standardized risk and methodology.
          </p>
        </div>
      </div>
    </section>
  );
}