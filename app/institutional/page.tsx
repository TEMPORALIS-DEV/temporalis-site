import Link from "next/link";

const pillars = [
  {
    id: "01",
    title: "Structured Capital Evaluation",
    text: "TEMPORALIS enables a more disciplined model for evaluating strategy behavior across time instead of relying on short-term market reactions or isolated yield performance.",
  },
  {
    id: "02",
    title: "Risk-Aware Treasury Coordination",
    text: "The protocol architecture is designed to align capital posture with changing market conditions through layered reserves, defensive allocation logic, and stability monitoring.",
  },
  {
    id: "03",
    title: "Epoch-Based Operational Discipline",
    text: "Recurring time cycles create a predictable framework for observation, validation, and decision-making, helping institutional users understand protocol behavior with greater clarity.",
  },
  {
    id: "04",
    title: "Governance with Long-Horizon Logic",
    text: "Protocol governance can be interpreted through multi-epoch impact rather than immediate sentiment, supporting more stable and deliberate system evolution.",
  },
];

const capabilities = [
  {
    title: "Strategy Oversight",
    description:
      "Institutional participants can understand how strategies are observed, validated, and filtered before receiving stronger protocol trust.",
  },
  {
    title: "Capital Defense",
    description:
      "Treasury coordination is built to preserve capital optionality through reserve segmentation, defensive readiness, and adaptive posture changes.",
  },
  {
    title: "Operational Transparency",
    description:
      "Epoch-based cycles create observable protocol phases that make capital movement, risk state, and strategic validation easier to interpret.",
  },
  {
    title: "Systemic Stability Awareness",
    description:
      "GSCL and the temporal risk engine provide a structured view into system conditions beyond simple market pricing behavior.",
  },
];

const framework = [
  "Capital enters through structured treasury logic.",
  "Strategies are observed across defined epoch windows.",
  "Proof-of-Strategy filters for resilience and consistency.",
  "GSCL tracks the wider stability condition of the system.",
  "Risk engines support defensive treasury adjustment.",
  "Governance evaluates long-horizon protocol behavior.",
];

const metrics = [
  { label: "Evaluation Logic", value: "Multi-Epoch" },
  { label: "Treasury Posture", value: "Defensive-Aware" },
  { label: "Protocol View", value: "Structured" },
  { label: "Decision Horizon", value: "Long-Term" },
];

export default function InstitutionalPage() {
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
              Institutional Layer
            </div>

            <h1 className="max-w-4xl text-5xl font-light leading-[1.03] tracking-[0.06em] text-white md:text-7xl">
              Built for
              <br />
              long-horizon capital.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/62 md:text-lg">
              TEMPORALIS can be presented as a capital intelligence
              infrastructure for participants who require structured evaluation,
              treasury discipline, and protocol behavior that can be interpreted
              across time.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/research"
                className="rounded-2xl border border-[rgba(212,175,55,0.24)] bg-[rgba(212,175,55,0.08)] px-6 py-3 text-sm tracking-[0.18em] text-[var(--sovereign-gold)] transition hover:bg-[rgba(212,175,55,0.14)]"
              >
                OPEN RESEARCH
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
                  Institutional Framework
                </p>

                <div className="mt-6 space-y-4">
                  {framework.map((item, index) => (
                    <InstitutionalFlowRow
                      key={index}
                      step={String(index + 1).padStart(2, "0")}
                      label={item}
                      active={index < 4}
                    />
                  ))}
                </div>

                <div className="mt-8 rounded-[22px] border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                    Positioning
                  </div>
                  <div className="mt-3 text-sm leading-7 text-white/62">
                    TEMPORALIS can be framed as a next-generation protocol layer
                    for capital evaluation, stability-aware coordination, and
                    temporal financial intelligence.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] p-6 shadow-[0_0_40px_rgba(0,0,0,0.2)] backdrop-blur-xl transition hover:border-[rgba(212,175,55,0.16)] hover:bg-white/[0.04]"
            >
              <div className="mb-3 text-[11px] uppercase tracking-[0.28em] text-[var(--sovereign-gold)]">
                Pillar {pillar.id}
              </div>
              <h3 className="text-2xl font-light text-white">
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
              Institutional Capabilities
            </p>
            <h2 className="mt-4 text-4xl font-light tracking-[0.06em] text-white md:text-5xl">
              A protocol surface
              <br />
              institutions can read.
            </h2>
          </div>

          <div className="grid gap-5">
            {capabilities.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] p-6 shadow-[0_0_40px_rgba(0,0,0,0.18)] backdrop-blur-xl transition hover:border-[rgba(212,175,55,0.16)] hover:bg-white/[0.04]"
              >
                <h3 className="text-2xl font-light text-white">
                  {item.title}
                </h3>
                <p className="mt-4 leading-8 text-white/58">
                  {item.description}
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
              Why It Matters
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-[0.05em] text-white">
              Discipline over reaction.
            </h2>
            <p className="mt-5 leading-8 text-white/58">
              Institutional capital often requires interpretability, structure,
              and a repeatable framework for understanding system behavior.
              TEMPORALIS addresses that need through epoch logic, layered
              evaluation, and stability-aware coordination.
            </p>

            <div className="mt-8 space-y-4">
              <InstitutionCard
                title="More Observable"
                text="Protocol phases become easier to interpret through structured cycles."
              />
              <InstitutionCard
                title="More Disciplined"
                text="Strategy trust and treasury posture are coordinated through formal evaluation."
              />
              <InstitutionCard
                title="More Defensible"
                text="Risk and treasury layers work together to preserve resilience."
              />
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-8 shadow-[0_0_60px_rgba(0,0,0,0.2)] backdrop-blur-xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--sovereign-gold)]">
              Operating Profile
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-[0.05em] text-white">
              Built to signal resilience.
            </h2>
            <p className="mt-5 leading-8 text-white/58">
              TEMPORALIS can be positioned as a long-horizon infrastructure
              layer that gives sophisticated participants a cleaner view into
              strategy quality, risk state, and treasury discipline.
            </p>

            <div className="mt-8 space-y-5">
              <ProgressLine label="Interpretability" value={90} />
              <ProgressLine label="Treasury Structure" value={87} />
              <ProgressLine label="Risk Awareness" value={84} />
              <ProgressLine label="Epoch Discipline" value={93} />
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
              research and documentation.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/60">
              Move from institutional framing into research narratives and
              protocol documentation to complete the TEMPORALIS surface.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/research"
                className="rounded-2xl border border-[rgba(212,175,55,0.24)] bg-[rgba(212,175,55,0.08)] px-6 py-3 text-sm tracking-[0.18em] text-[var(--sovereign-gold)] transition hover:bg-[rgba(212,175,55,0.14)]"
              >
                OPEN RESEARCH
              </Link>

              <Link
                href="/docs"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm tracking-[0.18em] text-white/82 transition hover:bg-white/10 hover:text-white"
              >
                OPEN DOCS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function InstitutionalFlowRow({
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

function InstitutionCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-black/20 p-5 transition hover:border-[rgba(212,175,55,0.16)] hover:bg-white/[0.03]">
      <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--sovereign-gold)]">
        Institutional Signal
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