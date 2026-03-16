import Link from "next/link";

const themes = [
  {
    id: "01",
    title: "Temporal Finance Thesis",
    text: "TEMPORALIS is grounded in the belief that strategy quality cannot be measured through isolated snapshots. Financial intelligence must emerge through repeated observation across structured periods of time.",
  },
  {
    id: "02",
    title: "Capital Behavior Across Epochs",
    text: "The protocol explores how capital behaves when allocation decisions are constrained by recurring windows of evaluation, validation, and reallocation rather than continuous short-term reaction.",
  },
  {
    id: "03",
    title: "Systemic Stability Research",
    text: "Research within TEMPORALIS focuses on how strategy trust, treasury posture, and market instability interact at the system level, especially under periods of volatility stress.",
  },
  {
    id: "04",
    title: "Risk as a Dynamic Layer",
    text: "Rather than treating risk as a passive metric, TEMPORALIS investigates risk as an active input that should continuously reshape capital posture and protocol defense behavior.",
  },
];

const tracks = [
  {
    title: "Strategy Validation Research",
    description:
      "How should a protocol determine whether a strategy deserves trust? TEMPORALIS approaches this through repeated temporal evaluation, resilience scoring, and survival across multiple epochs.",
  },
  {
    title: "Stability Consensus Research",
    description:
      "GSCL explores how multiple system inputs can be aggregated into a protocol-wide stability reading that can inform treasury posture and broader coordination decisions.",
  },
  {
    title: "Temporal Risk Modeling",
    description:
      "Risk is studied as a shifting multi-layer condition influenced by volatility, liquidity stress, strategic divergence, and systemic fragility across time.",
  },
  {
    title: "Capital Coordination Design",
    description:
      "The protocol studies how treasury reserves, deployment windows, and defensive buffers can be coordinated in a disciplined framework rather than reactive ad hoc logic.",
  },
];

const researchFlow = [
  "Observe strategy and market behavior across defined time windows.",
  "Measure durability, deviation, and systemic instability signals.",
  "Compare strategy performance against temporal resilience criteria.",
  "Translate signals into stability-aware treasury and governance insights.",
  "Refine protocol models through repeated epoch-based feedback loops.",
];

const metrics = [
  { label: "Research Domain", value: "Temporal Finance" },
  { label: "Evaluation Logic", value: "Epoch-Based" },
  { label: "Risk Perspective", value: "Dynamic" },
  { label: "Protocol Lens", value: "Systemic" },
];

export default function ResearchPage() {
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
              Research Layer
            </div>

            <h1 className="max-w-4xl text-5xl font-light leading-[1.03] tracking-[0.06em] text-white md:text-7xl">
              Research for
              <br />
              temporal finance.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/62 md:text-lg">
              TEMPORALIS research investigates how capital, strategy trust,
              systemic stability, and protocol risk can be understood through
              repeated observation across time rather than short-term reaction.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/docs"
                className="rounded-2xl border border-[rgba(212,175,55,0.24)] bg-[rgba(212,175,55,0.08)] px-6 py-3 text-sm tracking-[0.18em] text-[var(--sovereign-gold)] transition hover:bg-[rgba(212,175,55,0.14)]"
              >
                OPEN DOCS
              </Link>

              <Link
                href="/app"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm tracking-[0.18em] text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                OPEN DASHBOARD
              </Link>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] px-4 py-4 shadow-[0_0_30px_rgba(0,0,0,0.16)] backdrop-blur-xl"
                >
                  <p className="text-[10px] uppercase tracking-[0.24em] text-white/36">
                    {metric.label}
                  </p>
                  <p className="mt-3 text-lg font-light text-white">
                    {metric.value}
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
                  Research Process
                </p>

                <div className="mt-6 space-y-4">
                  {researchFlow.map((item, index) => (
                    <ResearchFlowRow
                      key={index}
                      step={String(index + 1).padStart(2, "0")}
                      label={item}
                      active={index < 3}
                    />
                  ))}
                </div>

                <div className="mt-8 rounded-[22px] border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                    Research Character
                  </div>
                  <div className="mt-3 text-sm leading-7 text-white/62">
                    TEMPORALIS research is concerned with durable financial
                    behavior, systemic coordination, and the role of time in
                    validating strategy quality.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          {themes.map((theme) => (
            <div
              key={theme.id}
              className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] p-6 shadow-[0_0_40px_rgba(0,0,0,0.2)] backdrop-blur-xl transition hover:border-[rgba(212,175,55,0.16)] hover:bg-white/[0.04]"
            >
              <div className="mb-3 text-[11px] uppercase tracking-[0.28em] text-[var(--sovereign-gold)]">
                Theme {theme.id}
              </div>
              <h3 className="text-2xl font-light text-white">
                {theme.title}
              </h3>
              <p className="mt-4 leading-8 text-white/58">{theme.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 xl:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--sovereign-gold)]">
              Research Tracks
            </p>
            <h2 className="mt-4 text-4xl font-light tracking-[0.06em] text-white md:text-5xl">
              Multiple lines
              <br />
              of inquiry.
            </h2>
          </div>

          <div className="grid gap-5">
            {tracks.map((track) => (
              <div
                key={track.title}
                className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] p-6 shadow-[0_0_40px_rgba(0,0,0,0.18)] backdrop-blur-xl transition hover:border-[rgba(212,175,55,0.16)] hover:bg-white/[0.04]"
              >
                <h3 className="text-2xl font-light text-white">
                  {track.title}
                </h3>
                <p className="mt-4 leading-8 text-white/58">
                  {track.description}
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
              Research Principle
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-[0.05em] text-white">
              Observation before assumption.
            </h2>
            <p className="mt-5 leading-8 text-white/58">
              TEMPORALIS research begins with observation across epochs. It does
              not assume that returns indicate reliability. Instead, it asks
              whether strategy behavior remains coherent under time, stress, and
              repeated evaluation.
            </p>

            <div className="mt-8 space-y-4">
              <ResearchCard
                title="Temporal Observation"
                text="Strategies are studied through recurring windows of evaluation."
              />
              <ResearchCard
                title="Systemic Context"
                text="Signals are interpreted in relation to the wider stability condition."
              />
              <ResearchCard
                title="Protocol Feedback"
                text="Research findings loop back into treasury, risk, and governance design."
              />
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-8 shadow-[0_0_60px_rgba(0,0,0,0.2)] backdrop-blur-xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--sovereign-gold)]">
              Research Signals
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-[0.05em] text-white">
              Questions that shape the protocol.
            </h2>
            <p className="mt-5 leading-8 text-white/58">
              Research inside TEMPORALIS is not an isolated publication layer.
              It directly informs how strategies are trusted, how risk is
              interpreted, and how capital posture evolves.
            </p>

            <div className="mt-8 space-y-5">
              <ProgressLine label="Strategy Durability" value={89} />
              <ProgressLine label="Stability Awareness" value={86} />
              <ProgressLine label="Risk Sensitivity" value={83} />
              <ProgressLine label="Capital Coordination" value={91} />
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
              Continue into
              <br />
              protocol documentation.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/60">
              Move from research into documentation to present TEMPORALIS as a
              coherent protocol surface across narrative, technology, and
              operational structure.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/docs"
                className="rounded-2xl border border-[rgba(212,175,55,0.24)] bg-[rgba(212,175,55,0.08)] px-6 py-3 text-sm tracking-[0.18em] text-[var(--sovereign-gold)] transition hover:bg-[rgba(212,175,55,0.14)]"
              >
                OPEN DOCS
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

function ResearchFlowRow({
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

function ResearchCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-black/20 p-5 transition hover:border-[rgba(212,175,55,0.16)] hover:bg-white/[0.03]">
      <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--sovereign-gold)]">
        Research Signal
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