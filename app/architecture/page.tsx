import Link from "next/link";

const layers = [
  {
    index: "01",
    title: "Strategy Layer",
    description:
      "The protocol begins at the strategy layer, where capital logic, execution models, and allocation behavior are observed across structured time cycles.",
  },
  {
    index: "02",
    title: "Proof of Strategy",
    description:
      "PoS² validates whether a strategy demonstrates resilience, capital discipline, and consistency across multiple epochs rather than isolated performance spikes.",
  },
  {
    index: "03",
    title: "GSCL Stability Layer",
    description:
      "The Global Stability Consensus Layer aggregates protocol-wide conditions into a unified stability signal used to guide capital coordination and defensive posture.",
  },
  {
    index: "04",
    title: "Temporal Risk Engine",
    description:
      "A dynamic intelligence layer that measures volatility stress, liquidity instability, and cross-strategy divergence to protect the system during unstable phases.",
  },
  {
    index: "05",
    title: "Treasury Coordination",
    description:
      "Treasury capital is distributed between protected reserves, strategic deployment, liquidity defense, and governance-ready buffers to preserve systemic balance.",
  },
  {
    index: "06",
    title: "Governance System",
    description:
      "Governance evaluates protocol decisions according to their effect on long-horizon stability, treasury posture, and multi-epoch system behavior.",
  },
];

const flow = [
  "Capital enters the protocol through coordinated allocation logic.",
  "Strategies are evaluated through structured epoch windows.",
  "Proof-of-Strategy filters unstable behavior over time.",
  "GSCL measures the global stability condition of the protocol.",
  "The risk engine adjusts defensive posture during instability.",
  "Treasury coordination redistributes capital for the next epoch.",
];

const pillars = [
  {
    title: "Time as Infrastructure",
    text: "TEMPORALIS does not treat time as a passive market dimension. Time is embedded directly into protocol logic through epoch-based evaluation and coordination.",
  },
  {
    title: "Validation Before Trust",
    text: "Strategies do not gain credibility because they appear profitable once. They earn trust by surviving repeated temporal evaluation cycles.",
  },
  {
    title: "Resilience Over Hype",
    text: "The architecture is built to prioritize long-term capital resilience instead of short-term incentive extraction or unstable yield attraction.",
  },
];

export default function ArchitecturePage() {
  return (
    <div className="relative overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.16),rgba(212,175,55,0.04)_42%,transparent_72%)] blur-3xl" />
        <div className="absolute right-[-120px] top-[320px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_70%)] blur-3xl" />
        <div className="absolute left-[-100px] top-[980px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.08),transparent_72%)] blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-6 pb-14 pt-20 md:pt-28">
        <div className="grid items-center gap-10 xl:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(212,175,55,0.24)] bg-[rgba(212,175,55,0.08)] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[var(--sovereign-gold)]">
              <span className="h-2 w-2 rounded-full bg-[var(--sovereign-gold)] shadow-[0_0_12px_rgba(212,175,55,0.95)]" />
              Protocol Architecture
            </div>

            <h1 className="max-w-4xl text-5xl font-light leading-[1.03] tracking-[0.06em] text-white md:text-7xl">
              Structured layers
              <br />
              for temporal finance.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/62 md:text-lg">
              TEMPORALIS is built as a multi-layer capital intelligence system
              where strategies, risk, treasury posture, and governance are all
              coordinated through time-aware protocol logic.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/technology"
                className="rounded-2xl border border-[rgba(212,175,55,0.24)] bg-[rgba(212,175,55,0.08)] px-6 py-3 text-sm tracking-[0.18em] text-[var(--sovereign-gold)] transition hover:bg-[rgba(212,175,55,0.14)]"
              >
                VIEW TECHNOLOGY
              </Link>

              <Link
                href="/app"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm tracking-[0.18em] text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                OPEN DASHBOARD
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] p-6 shadow-[0_0_80px_rgba(0,0,0,0.32)] backdrop-blur-xl">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:34px_34px] opacity-40" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_26%)]" />

              <div className="relative rounded-[28px] border border-white/10 bg-black/20 p-6">
                <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--sovereign-gold)]">
                  Architecture Stack
                </p>

                <div className="mt-6 space-y-4">
                  <StackRow label="Strategy Layer" active />
                  <StackRow label="Proof of Strategy" active />
                  <StackRow label="GSCL Stability Layer" active />
                  <StackRow label="Temporal Risk Engine" active />
                  <StackRow label="Treasury Coordination" />
                  <StackRow label="Governance" />
                </div>

                <div className="mt-8 rounded-[22px] border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                    System Character
                  </div>
                  <div className="mt-3 text-sm leading-7 text-white/62">
                    A protocol architecture built to validate strategy behavior,
                    preserve capital resilience, and coordinate decisions through
                    structured epoch-based intelligence.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] p-6 shadow-[0_0_40px_rgba(0,0,0,0.2)] backdrop-blur-xl transition hover:border-[rgba(212,175,55,0.16)] hover:bg-white/[0.04]"
            >
              <div className="mb-5 h-10 w-10 rounded-2xl border border-[rgba(212,175,55,0.18)] bg-[rgba(212,175,55,0.07)]" />
              <h3 className="text-2xl font-light tracking-[0.04em] text-white">
                {pillar.title}
              </h3>
              <p className="mt-4 leading-8 text-white/58">{pillar.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 xl:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--sovereign-gold)]">
              Layer Overview
            </p>
            <h2 className="mt-4 text-4xl font-light tracking-[0.06em] text-white md:text-5xl">
              Each layer serves
              <br />
              a specific role.
            </h2>
          </div>

          <div className="grid gap-5">
            {layers.map((layer) => (
              <div
                key={layer.index}
                className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] p-6 shadow-[0_0_40px_rgba(0,0,0,0.18)] backdrop-blur-xl transition hover:border-[rgba(212,175,55,0.16)] hover:bg-white/[0.04]"
              >
                <div className="mb-3 text-[11px] uppercase tracking-[0.28em] text-[var(--sovereign-gold)]">
                  Layer {layer.index}
                </div>
                <h3 className="text-2xl font-light text-white">
                  {layer.title}
                </h3>
                <p className="mt-4 leading-8 text-white/58">
                  {layer.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-8 shadow-[0_0_60px_rgba(0,0,0,0.2)] backdrop-blur-xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--sovereign-gold)]">
              Capital Flow
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-[0.05em] text-white">
              How coordination moves.
            </h2>
            <p className="mt-5 leading-8 text-white/58">
              The architecture is designed to observe strategy behavior, apply
              temporal validation, and redistribute capital according to a
              stability-aware process rather than short-term reaction.
            </p>

            <div className="mt-8 space-y-4">
              {flow.map((item, index) => (
                <FlowRow
                  key={index}
                  step={String(index + 1).padStart(2, "0")}
                  label={item}
                  active={index < 4}
                />
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-8 shadow-[0_0_60px_rgba(0,0,0,0.2)] backdrop-blur-xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--sovereign-gold)]">
              Epoch Coordination
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-[0.05em] text-white">
              Time coordinates the system.
            </h2>
            <p className="mt-5 leading-8 text-white/58">
              TEMPORALIS converts time into a core operating structure. Each
              epoch defines when strategies execute, when signals are measured,
              and when capital posture is recalibrated.
            </p>

            <div className="mt-8 grid gap-4">
              <EpochCard
                title="Execution Window"
                text="Strategies operate inside a defined temporal cycle."
              />
              <EpochCard
                title="Measurement Layer"
                text="Performance, risk, and stability metrics are collected."
              />
              <EpochCard
                title="Reallocation Phase"
                text="Treasury posture and capital distribution are updated for the next cycle."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.018))] px-8 py-14 shadow-[0_0_80px_rgba(0,0,0,0.28)] backdrop-blur-xl md:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_55%)]" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--sovereign-gold)]">
              Continue Exploration
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-[0.06em] text-white md:text-5xl">
              See how the protocol
              <br />
              behaves in motion.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/60">
              Move from architecture into technology details or enter the
              dashboard to explore TEMPORALIS as a live operational system.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/technology"
                className="rounded-2xl border border-[rgba(212,175,55,0.24)] bg-[rgba(212,175,55,0.08)] px-6 py-3 text-sm tracking-[0.18em] text-[var(--sovereign-gold)] transition hover:bg-[rgba(212,175,55,0.14)]"
              >
                OPEN TECHNOLOGY
              </Link>

              <Link
                href="/app"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm tracking-[0.18em] text-white/82 transition hover:bg-white/10 hover:text-white"
              >
                ENTER DASHBOARD
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StackRow({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <div className="flex items-center gap-4 rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-4">
      <div
        className={`h-3.5 w-3.5 rounded-full ${
          active
            ? "bg-[var(--sovereign-gold)] shadow-[0_0_14px_rgba(212,175,55,0.9)]"
            : "bg-white/20"
        }`}
      />
      <div className="text-white/84">{label}</div>
    </div>
  );
}

function FlowRow({
  step,
  label,
  active = false,
}: {
  step: string;
  label: string;
  active?: boolean;
}) {
  return (
    <div className="flex items-start gap-4 rounded-[20px] border border-white/10 bg-black/20 px-4 py-4">
      <div
        className={`mt-0.5 flex h-10 w-10 items-center justify-center rounded-full border text-sm ${
          active
            ? "border-[rgba(212,175,55,0.45)] bg-[rgba(212,175,55,0.12)] text-[var(--sovereign-gold)] shadow-[0_0_16px_rgba(212,175,55,0.22)]"
            : "border-white/10 bg-white/5 text-white/55"
        }`}
      >
        {step}
      </div>
      <div className="leading-7 text-white/62">{label}</div>
    </div>
  );
}

function EpochCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-black/20 p-5 transition hover:border-[rgba(212,175,55,0.16)] hover:bg-white/[0.03]">
      <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--sovereign-gold)]">
        Epoch Phase
      </div>
      <h3 className="mt-3 text-xl font-light text-white">{title}</h3>
      <p className="mt-3 leading-7 text-white/58">{text}</p>
    </div>
  );
}