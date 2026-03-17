export default function WhatIs() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12 backdrop-blur-sm">
          <div className="text-xs uppercase tracking-[0.2em] text-white/45">
            What is TEMPORALIS
          </div>

          <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
            A capital intelligence infrastructure built around time, proof, and control.
          </h2>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/70 md:text-base">
            TEMPORALIS is not a vault, not a token, and not a yield farm.
            It is a system that evaluates capital behavior across epochs, scores
            strategies through deterministic logic, and reallocates exposure based
            on verified performance rather than narrative.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <InfoCard
              title="Epoch-Based Evaluation"
              desc="Performance is measured across time windows, creating clean comparison boundaries and disciplined reallocation logic."
            />
            <InfoCard
              title="GSCL Scoring Engine"
              desc="Strategies are scored through structured signals, confidence weighting, and bounded decision rules."
            />
            <InfoCard
              title="Self-Healing Risk Layer"
              desc="The system can compress exposure, react to deteriorating conditions, and protect capital under stress."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
      <div className="text-lg font-semibold text-white">{title}</div>
      <p className="mt-3 text-sm leading-6 text-white/65">{desc}</p>
    </div>
  );
}