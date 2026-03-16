import Link from "next/link";

const systems = [
  {
    id: "01",
    title: "Proof of Strategy Engine",
    text: "Evaluates whether strategies demonstrate consistency, resilience, and capital discipline across multiple epochs rather than isolated performance spikes.",
  },
  {
    id: "02",
    title: "GSCL Consensus Logic",
    text: "Aggregates protocol-wide conditions into a stability-aware signal that helps coordinate treasury posture and systemic capital behavior.",
  },
  {
    id: "03",
    title: "Temporal Risk Engine",
    text: "Continuously monitors volatility stress, liquidity disruption, and cross-strategy instability to support defensive protocol adjustment.",
  },
  {
    id: "04",
    title: "Epoch Coordination Layer",
    text: "Transforms time into a structured operating system for execution, measurement, validation, and reallocation across recurring protocol cycles.",
  },
];

const modules = [
  {
    title: "Strategy Validation",
    description:
      "Each strategy is observed across a defined epoch window, scored for stability, and filtered through temporal validation before it earns deeper protocol trust.",
  },
  {
    title: "Stability Scoring",
    description:
      "System-wide conditions are aggregated into a layered stability reading to help align strategy trust, treasury defense, and governance awareness.",
  },
  {
    title: "Risk Detection",
    description:
      "The protocol continuously analyzes systemic shifts including volatility compression, liquidity fragmentation, and strategy deviation risk.",
  },
  {
    title: "Capital Reallocation",
    description:
      "Treasury coordination uses temporal intelligence to move capital between reserve, deployment, and liquidity defense positions.",
  },
];

const stack = [
  "Execution input enters from the strategy layer.",
  "Proof-of-Strategy evaluates temporal durability.",
  "GSCL computes the global stability condition.",
  "Risk intelligence measures systemic fragility.",
  "Treasury posture adjusts for the next epoch.",
  "Governance observes long-horizon protocol behavior.",
];

const signals = [
  { label: "Validation Model", value: "Temporal" },
  { label: "Risk Logic", value: "Adaptive" },
  { label: "Stability Layer", value: "Consensus-Based" },
  { label: "Capital Cycle", value: "Epoch-Driven" },
];

export default function TechnologyPage() {
  return (
    <div className="relative overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.15),rgba(212,175,55,0.04)_42%,transparent_72%)] blur-3xl" />
        <div className="absolute right-[-120px] top-[320px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_70%)] blur-3xl" />
        <div className="absolute left-[-100px] top-[1080px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.08),transparent_72%)] blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-6 pb-14 pt-20 md:pt-28">
        <div className="grid items-center gap-10 xl:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(212,175,55,0.24)] bg-[rgba(212,175,55,0.08)] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[var(--sovereign-gold)]">
              <span className="h-2 w-2 rounded-full bg-[var(--sovereign-gold)] shadow-[0_0_12px_rgba(212,175,55,0.95)]" />
              Protocol Technology
            </div>

            <h1 className="max-w-4xl text-5xl font-light leading-[1.03] tracking-[0.06em] text-white md:text-7xl">
              Temporal systems
              <br />
              built for capital intelligence.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/62 md:text-lg">
              TEMPORALIS combines strategy validation, systemic stability
              scoring, risk detection, and epoch-based coordination into a
              unified protocol technology stack.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/architecture"
                className="rounded-2xl border border-[rgba(212,175,55,0.24)] bg-[rgba(212,175,55,0.08)] px-6 py-3 text-sm tracking-[0.18em] text-[var(--sovereign-gold)] transition hover:bg-[rgba(212,175,55,0.14)]"
              >
                VIEW ARCHITECTURE
              </Link>

              <Link
                href="/app"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm tracking-[0.18em] text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                OPEN DASHBOARD
              </Link>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {signals.map((signal) => (
                <div
                  key={signal.label}
                  className="rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] px-4 py-4 shadow-[0_0_30px_rgba(0,0,0,0.16)] backdrop-blur-xl"
                >
                  <p className="text-[10px] uppercase tracking-[0.24em] text-white/36">
                    {signal.label}
                  </p>
                  <p className="mt-3 text-lg font-light text-white">
                    {signal.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] p-6 shadow-[0_0_80px_rgba(0,0,0,0.32)] backdrop-blur-xl">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:34px_34px] opacity-40" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_26%)]" />

              <div className="relative rounded-[28px] border border-white/10 bg-black/20 p-6">
                <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--sovereign-gold)]">
                  System Flow
                </p>

                <div className="mt-6 space-y-4">
                  {stack.map((item, index) => (
                    <TechFlowRow
                      key={index}
                      step={String(index + 1).padStart(2, "0")}
                      label={item}
                      active={index < 4}
                    />
                  ))}
                </div>

                <div className="mt-8 rounded-[22px] border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                    Technical Character
                  </div>
                  <div className="mt-3 text-sm leading-7 text-white/62">
                    A protocol stack designed to evaluate durable strategy
                    behavior, detect instability, and coordinate capital through
                    structured temporal logic.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          {systems.map((system) => (
            <div
              key={system.id}
              className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] p-6 shadow-[0_0_40px_rgba(0,0,0,0.2)] backdrop-blur-xl transition hover:border-[rgba(212,175,55,0.16)] hover:bg-white/[0.04]"
            >
              <div className="mb-3 text-[11px] uppercase tracking-[0.28em] text-[var(--sovereign-gold)]">
                Module {system.id}
              </div>
              <h3 className="text-2xl font-light text-white">
                {system.title}
              </h3>
              <p className="mt-4 leading-8 text-white/58">{system.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 xl:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--sovereign-gold)]">
              Technical Modules
            </p>
            <h2 className="mt-4 text-4xl font-light tracking-[0.06em] text-white md:text-5xl">
              Each component
              <br />
              serves protocol logic.
            </h2>
          </div>

          <div className="grid gap-5">
            {modules.map((module) => (
              <div
                key={module.title}
                className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] p-6 shadow-[0_0_40px_rgba(0,0,0,0.18)] backdrop-blur-xl transition hover:border-[rgba(212,175,55,0.16)] hover:bg-white/[0.04]"
              >
                <h3 className="text-2xl font-light text-white">
                  {module.title}
                </h3>
                <p className="mt-4 leading-8 text-white/58">
                  {module.description}
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
              Validation Logic
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-[0.05em] text-white">
              Trust is earned over time.
            </h2>
            <p className="mt-5 leading-8 text-white/58">
              TEMPORALIS does not assume that a profitable strategy is
              trustworthy. Strategy validation requires repeated observation
              across epochs before deeper confidence is assigned.
            </p>

            <div className="mt-8 space-y-4">
              <StepCard
                title="Submission"
                text="A strategy enters the protocol evaluation process."
              />
              <StepCard
                title="Observation"
                text="Performance, volatility, and drawdown behavior are measured."
              />
              <StepCard
                title="Validation"
                text="Proof-of-Strategy decides whether the system should trust it further."
              />
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-8 shadow-[0_0_60px_rgba(0,0,0,0.2)] backdrop-blur-xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--sovereign-gold)]">
              Operational Logic
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-[0.05em] text-white">
              Technology that adapts.
            </h2>
            <p className="mt-5 leading-8 text-white/58">
              The protocol stack is designed to respond to instability through
              structured evaluation, layered scoring, and treasury coordination
              rather than impulsive short-term reaction.
            </p>

            <div className="mt-8 space-y-5">
              <ProgressLine label="Strategy Observation" value={88} />
              <ProgressLine label="Stability Computation" value={92} />
              <ProgressLine label="Risk Detection" value={84} />
              <ProgressLine label="Treasury Adjustment" value={79} />
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
              Explore the institutional
              <br />
              surface next.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/60">
              Move from protocol technology into the institutional layer to see
              how TEMPORALIS can be presented as a long-horizon capital
              infrastructure system.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/institutional"
                className="rounded-2xl border border-[rgba(212,175,55,0.24)] bg-[rgba(212,175,55,0.08)] px-6 py-3 text-sm tracking-[0.18em] text-[var(--sovereign-gold)] transition hover:bg-[rgba(212,175,55,0.14)]"
              >
                OPEN INSTITUTIONAL
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

function TechFlowRow({
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

function StepCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-black/20 p-5 transition hover:border-[rgba(212,175,55,0.16)] hover:bg-white/[0.03]">
      <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--sovereign-gold)]">
        Process Step
      </div>
      <h3 className="mt-3 text-xl font-light text-white">{title}</h3>
      <p className="mt-3 leading-7 text-white/58">{text}</p>
    </div>
  );
}

function ProgressLine({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm text-white/66">
        <span>{label}</span>
        <span>{value}%</span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-white/10">
        <div
          className="relative h-full rounded-full bg-[linear-gradient(90deg,rgba(150,122,50,0.82),rgba(230,211,163,0.98))]"
          style={{ width: `${value}%` }}
        >
          <div className="absolute inset-y-0 right-0 w-8 bg-white/20 blur-sm" />
        </div>
      </div>
    </div>
  );
}