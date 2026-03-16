import Link from "next/link";

const docSections = [
  {
    id: "01",
    title: "Protocol Overview",
    text: "TEMPORALIS is a temporal capital intelligence infrastructure built to evaluate strategy behavior, coordinate treasury posture, and govern capital allocation through structured epoch cycles.",
  },
  {
    id: "02",
    title: "Architecture",
    text: "The protocol is organized into layered components including the strategy layer, Proof-of-Strategy engine, GSCL stability logic, temporal risk engine, treasury coordination, and governance.",
  },
  {
    id: "03",
    title: "Epoch System",
    text: "Time is embedded into protocol logic through recurring epochs that structure execution, evaluation, validation, and capital reallocation.",
  },
  {
    id: "04",
    title: "Operational Surface",
    text: "The dashboard, research layer, and documentation together provide a coherent interface for interpreting TEMPORALIS as a long-horizon protocol system.",
  },
];

const resources = [
  {
    title: "Architecture Layer Map",
    description:
      "Understand how strategies, risk systems, treasury logic, and governance fit together into a unified capital intelligence stack.",
    href: "/architecture",
  },
  {
    title: "Technology Stack",
    description:
      "Review the technical systems that power Proof-of-Strategy, GSCL stability scoring, temporal risk logic, and epoch coordination.",
    href: "/technology",
  },
  {
    title: "Institutional Surface",
    description:
      "Explore how TEMPORALIS can be framed for participants seeking structured capital evaluation and stability-aware protocol behavior.",
    href: "/institutional",
  },
  {
    title: "Research Layer",
    description:
      "See the research themes and temporal finance questions that shape how the protocol interprets strategy quality and systemic stability.",
    href: "/research",
  },
];

const quickLinks = [
  "Getting Started",
  "Protocol Architecture",
  "Proof of Strategy",
  "GSCL Stability Layer",
  "Temporal Risk Engine",
  "Epoch Coordination",
  "Treasury Logic",
  "Governance Model",
];

const signals = [
  { label: "Documentation Layer", value: "Structured" },
  { label: "Protocol Surface", value: "Integrated" },
  { label: "Navigation Model", value: "Layered" },
  { label: "System Readability", value: "High" },
];

export default function DocsPage() {
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
              Protocol Documentation
            </div>

            <h1 className="max-w-4xl text-5xl font-light leading-[1.03] tracking-[0.06em] text-white md:text-7xl">
              Read the protocol
              <br />
              as a system.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/62 md:text-lg">
              The TEMPORALIS documentation layer brings together architecture,
              technology, institutional framing, and research into one coherent
              protocol surface.
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
                  Documentation Index
                </p>

                <div className="mt-6 space-y-4">
                  {quickLinks.map((item, index) => (
                    <DocsIndexRow
                      key={index}
                      step={String(index + 1).padStart(2, "0")}
                      label={item}
                      active={index < 5}
                    />
                  ))}
                </div>

                <div className="mt-8 rounded-[22px] border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                    Documentation Character
                  </div>
                  <div className="mt-3 text-sm leading-7 text-white/62">
                    A documentation surface that allows TEMPORALIS to be read
                    across narrative, architecture, research, and operational
                    protocol structure.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          {docSections.map((section) => (
            <div
              key={section.id}
              className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] p-6 shadow-[0_0_40px_rgba(0,0,0,0.2)] backdrop-blur-xl transition hover:border-[rgba(212,175,55,0.16)] hover:bg-white/[0.04]"
            >
              <div className="mb-3 text-[11px] uppercase tracking-[0.28em] text-[var(--sovereign-gold)]">
                Section {section.id}
              </div>
              <h3 className="text-2xl font-light text-white">
                {section.title}
              </h3>
              <p className="mt-4 leading-8 text-white/58">{section.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 xl:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--sovereign-gold)]">
              Documentation Resources
            </p>
            <h2 className="mt-4 text-4xl font-light tracking-[0.06em] text-white md:text-5xl">
              Navigate the protocol
              <br />
              by layer.
            </h2>
          </div>

          <div className="grid gap-5">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] p-6 shadow-[0_0_40px_rgba(0,0,0,0.18)] backdrop-blur-xl transition hover:border-[rgba(212,175,55,0.16)] hover:bg-white/[0.04]"
              >
                <h3 className="text-2xl font-light text-white">
                  {resource.title}
                </h3>
                <p className="mt-4 leading-8 text-white/58">
                  {resource.description}
                </p>
                <div className="mt-4 text-[11px] uppercase tracking-[0.22em] text-[var(--sovereign-gold)]">
                  Open Resource
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-8 shadow-[0_0_60px_rgba(0,0,0,0.2)] backdrop-blur-xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--sovereign-gold)]">
              Reading Model
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-[0.05em] text-white">
              Documentation as navigation.
            </h2>
            <p className="mt-5 leading-8 text-white/58">
              TEMPORALIS documentation is not intended to exist as an isolated
              page of text. It is meant to guide the reader through the system
              layer by layer, making the protocol easier to interpret.
            </p>

            <div className="mt-8 space-y-4">
              <DocsCard
                title="Readable by Structure"
                text="The protocol is explained through architecture, technology, research, and institutional framing."
              />
              <DocsCard
                title="Readable by Purpose"
                text="Each page helps the reader understand a different role inside the TEMPORALIS system."
              />
              <DocsCard
                title="Readable by Progression"
                text="The user can move from concept to architecture to operation in a coherent sequence."
              />
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-8 shadow-[0_0_60px_rgba(0,0,0,0.2)] backdrop-blur-xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--sovereign-gold)]">
              Documentation Signals
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-[0.05em] text-white">
              Clarity across the protocol.
            </h2>
            <p className="mt-5 leading-8 text-white/58">
              The purpose of the documentation layer is to increase system
              readability, unify the protocol narrative, and create a stronger
              bridge between concept, architecture, and execution.
            </p>

            <div className="mt-8 space-y-5">
              <ProgressLine label="Narrative Clarity" value={92} />
              <ProgressLine label="System Readability" value={88} />
              <ProgressLine label="Navigation Coherence" value={90} />
              <ProgressLine label="Protocol Integration" value={86} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.018))] px-8 py-14 shadow-[0_0_80px_rgba(0,0,0,0.28)] backdrop-blur-xl md:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_55%)]" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--sovereign-gold)]">
              Protocol Surface Complete
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-[0.06em] text-white md:text-5xl">
              Continue into the
              <br />
              live operational layer.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/60">
              With architecture, technology, institutional framing, research,
              and documentation aligned, the next surface is the operational
              dashboard.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/app"
                className="rounded-2xl border border-[rgba(212,175,55,0.24)] bg-[rgba(212,175,55,0.08)] px-6 py-3 text-sm tracking-[0.18em] text-[var(--sovereign-gold)] transition hover:bg-[rgba(212,175,55,0.14)]"
              >
                ENTER DASHBOARD
              </Link>

              <Link
                href="/"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm tracking-[0.18em] text-white/82 transition hover:bg-white/10 hover:text-white"
              >
                RETURN HOME
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DocsIndexRow({
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

function DocsCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-black/20 p-5 transition hover:border-[rgba(212,175,55,0.16)] hover:bg-white/[0.03]">
      <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--sovereign-gold)]">
        Documentation Signal
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