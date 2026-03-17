import Link from "next/link";
import WhatIs from "../components/sections/home/WhatIs";
import Why from "../components/sections/home/Why";

const pillars = [
  {
    title: "Proof of Strategy",
    description:
      "A temporal validation framework that measures whether a strategy can survive across epochs, not just perform in isolated moments.",
  },
  {
    title: "GSCL Stability Layer",
    description:
      "A protocol-wide consensus layer that aggregates strategy behavior, treasury posture, and systemic conditions into one stability-aware signal.",
  },
  {
    title: "Temporal Risk Engine",
    description:
      "Dynamic risk intelligence designed to detect instability, adjust posture, and preserve capital resilience across changing market conditions.",
  },
];

const features = [
  {
    eyebrow: "01",
    title: "Strategy Intelligence",
    text: "Strategies are evaluated through structured temporal windows rather than short-term performance spikes, allowing durable systems to gain trust over time.",
  },
  {
    eyebrow: "02",
    title: "Epoch-Based Capital Cycles",
    text: "Capital moves through defined cycles of execution, measurement, validation, and reallocation, creating a more disciplined financial coordination model.",
  },
  {
    eyebrow: "03",
    title: "Treasury Coordination",
    text: "Treasury capital is distributed between protected reserves, strategic deployment, and liquidity defense layers to maintain systemic balance.",
  },
  {
    eyebrow: "04",
    title: "Governance with Temporal Awareness",
    text: "Protocol decisions are evaluated according to their multi-epoch effect on stability, not only immediate market sentiment.",
  },
];

const metrics = [
  { label: "Epoch Framework", value: "Structured" },
  { label: "Risk Posture", value: "Adaptive" },
  { label: "Strategy Trust", value: "Validated" },
  { label: "Treasury Model", value: "Coordinated" },
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18),rgba(212,175,55,0.05)_38%,transparent_72%)] blur-3xl" />
        <div className="absolute right-[-120px] top-[220px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_70%)] blur-3xl" />
        <div className="absolute left-[-100px] top-[760px] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.10),transparent_70%)] blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-4 pb-12 pt-14 sm:px-5 md:px-6 md:pb-16 md:pt-28">
        <div className="grid items-center gap-8 md:gap-10 xl:grid-cols-[1.08fr_0.92fr] xl:gap-12">
          <div>
            <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-[rgba(212,175,55,0.24)] bg-[rgba(212,175,55,0.08)] px-3 py-2 text-[9px] uppercase tracking-[0.22em] text-[var(--sovereign-gold)] sm:px-4 sm:text-[11px] sm:tracking-[0.28em]">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--sovereign-gold)] shadow-[0_0_12px_rgba(212,175,55,0.95)]" />
              <span className="truncate">Temporal Capital Intelligence Infrastructure</span>
            </div>

            <h1 className="max-w-4xl text-4xl font-light leading-[1.05] tracking-[0.03em] text-white sm:text-5xl md:text-7xl md:leading-[1.02] md:tracking-[0.06em]">
              Evaluate capital
              <br />
              through time.
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/62 sm:text-base md:mt-6 md:max-w-2xl md:text-lg md:leading-8">
              TEMPORALIS is a Web3 financial intelligence protocol designed to
              validate strategies, coordinate treasury posture, and govern
              capital allocation through structured epoch-based cycles.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/app"
                className="rounded-2xl border border-[rgba(212,175,55,0.24)] bg-[rgba(212,175,55,0.08)] px-6 py-3 text-center text-sm tracking-[0.14em] text-[var(--sovereign-gold)] transition hover:bg-[rgba(212,175,55,0.14)] md:tracking-[0.18em]"
              >
                ENTER PROTOCOL
              </Link>

              <Link
                href="/architecture"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-center text-sm tracking-[0.14em] text-white/80 transition hover:bg-white/10 hover:text-white md:tracking-[0.18em]"
              >
                VIEW ARCHITECTURE
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-10 md:grid-cols-4 md:gap-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] px-4 py-4 shadow-[0_0_30px_rgba(0,0,0,0.16)] backdrop-blur-xl"
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/36 md:tracking-[0.24em]">
                    {metric.label}
                  </p>
                  <p className="mt-3 text-base font-light text-white sm:text-lg">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] p-4 shadow-[0_0_60px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-5 md:rounded-[34px] md:p-6 md:shadow-[0_0_80px_rgba(0,0,0,0.32)]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:34px_34px] opacity-40" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_26%)]" />

              <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-[22px] border border-white/10 bg-black/20 sm:min-h-[420px] md:min-h-[540px] md:rounded-[28px]">
                <div className="absolute h-[220px] w-[220px] rounded-full border border-[rgba(212,175,55,0.18)] temporal-float sm:h-[280px] sm:w-[280px] md:h-[360px] md:w-[360px]" />
                <div className="absolute h-[170px] w-[170px] rounded-full border border-white/10 temporal-float sm:h-[220px] sm:w-[220px] md:h-[280px] md:w-[280px]" />
                <div className="absolute h-[120px] w-[120px] rounded-full border border-[rgba(212,175,55,0.2)] temporal-float sm:h-[150px] sm:w-[150px] md:h-[200px] md:w-[200px]" />

                <div className="absolute h-[8px] w-[8px] translate-x-[92px] rounded-full bg-[var(--sovereign-gold)] shadow-[0_0_18px_rgba(212,175,55,0.95)] animate-pulse sm:translate-x-[118px] md:h-[10px] md:w-[10px] md:translate-x-[150px]" />
                <div className="absolute h-[6px] w-[6px] -translate-x-[78px] -translate-y-[44px] rounded-full bg-white/90 shadow-[0_0_14px_rgba(255,255,255,0.8)] animate-pulse sm:-translate-x-[96px] sm:-translate-y-[56px] md:h-[7px] md:w-[7px] md:-translate-x-[125px] md:-translate-y-[72px]" />
                <div className="absolute h-[6px] w-[6px] translate-x-[56px] translate-y-[72px] rounded-full bg-[var(--sovereign-gold)] shadow-[0_0_15px_rgba(212,175,55,0.92)] animate-pulse sm:translate-x-[68px] sm:translate-y-[84px] md:h-[8px] md:w-[8px] md:translate-x-[86px] md:translate-y-[106px]" />

                <div className="relative temporal-float flex h-[120px] w-[120px] items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,246,214,0.98),rgba(204,168,84,0.62)_34%,rgba(118,88,30,0.25)_62%,rgba(0,0,0,0)_76%)] shadow-[0_0_55px_rgba(212,175,55,0.44)] sm:h-[140px] sm:w-[140px] md:h-[170px] md:w-[170px] md:shadow-[0_0_80px_rgba(212,175,55,0.44)]">
                  <div className="absolute inset-[10px] rounded-full border border-white/10 md:inset-[14px]" />
                  <div className="absolute inset-[24px] rounded-full border border-[rgba(212,175,55,0.18)] md:inset-[34px]" />
                  <div className="text-center">
                    <div className="text-[9px] uppercase tracking-[0.2em] text-white/56 md:text-[11px] md:tracking-[0.28em]">
                      Epoch Core
                    </div>
                    <div className="mt-1 text-3xl font-light tracking-[0.04em] text-white md:mt-2 md:text-4xl md:tracking-[0.08em]">
                      12
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3 md:bottom-6 md:left-6 md:right-6">
                  <OrbCard label="Cycle Sync" value="99.1%" />
                  <OrbCard label="Stability" value="94.2" />
                  <OrbCard label="Posture" value="Defensive" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatIs />

      <section className="relative mx-auto max-w-7xl px-4 py-6 sm:px-5 md:px-6 md:py-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] p-5 shadow-[0_0_30px_rgba(0,0,0,0.18)] backdrop-blur-xl transition duration-300 hover:border-[rgba(212,175,55,0.16)] hover:bg-white/[0.04] md:rounded-[28px] md:p-6 md:shadow-[0_0_40px_rgba(0,0,0,0.2)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.38)] to-transparent opacity-70" />
              <div className="mb-4 h-10 w-10 rounded-2xl border border-[rgba(212,175,55,0.18)] bg-[rgba(212,175,55,0.07)]" />
              <h3 className="text-xl font-light tracking-[0.03em] text-white md:text-2xl md:tracking-[0.04em]">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/58 md:mt-4 md:text-base md:leading-8">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-5 md:px-6 md:py-24">
        <div className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr] xl:gap-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--sovereign-gold)] md:text-[11px] md:tracking-[0.3em]">
              Protocol Vision
            </p>
            <h2 className="mt-3 text-3xl font-light tracking-[0.04em] text-white md:mt-4 md:text-5xl md:tracking-[0.06em]">
              A new financial
              <br />
              coordination model.
            </h2>
          </div>

          <div className="grid gap-4 md:gap-6">
            <GlassPanel>
              TEMPORALIS shifts capital evaluation away from short-term yield
              obsession and toward long-horizon strategic resilience. The goal
              is not merely to generate return, but to understand whether a
              strategy remains reliable across changing conditions and across
              time.
            </GlassPanel>

            <GlassPanel>
              Through epoch-based intelligence, the protocol can observe
              strategy behavior, measure systemic instability, and coordinate
              treasury posture with greater discipline than conventional DeFi
              systems.
            </GlassPanel>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-5 md:px-6 md:py-8">
        <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-5 shadow-[0_0_50px_rgba(0,0,0,0.22)] backdrop-blur-xl md:rounded-[34px] md:p-8 md:shadow-[0_0_70px_rgba(0,0,0,0.24)]">
          <div className="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--sovereign-gold)] md:text-[11px] md:tracking-[0.28em]">
                Core System
              </p>
              <h2 className="mt-3 text-2xl font-light tracking-[0.04em] text-white md:text-4xl md:tracking-[0.05em]">
                Built for multi-epoch intelligence.
              </h2>
            </div>

            <Link
              href="/technology"
              className="text-sm tracking-[0.14em] text-white/65 transition hover:text-white md:tracking-[0.18em]"
            >
              EXPLORE TECHNOLOGY
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[22px] border border-white/10 bg-black/20 p-5 transition hover:border-[rgba(212,175,55,0.16)] hover:bg-white/[0.03] md:rounded-[26px] md:p-6"
              >
                <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--sovereign-gold)] md:text-[11px] md:tracking-[0.28em]">
                  {feature.eyebrow}
                </div>
                <h3 className="mt-3 text-xl font-light text-white md:text-2xl">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/58 md:mt-4 md:text-base md:leading-8">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-5 md:px-6 md:py-24">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_1fr]">
          <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-6 shadow-[0_0_50px_rgba(0,0,0,0.18)] backdrop-blur-xl md:rounded-[32px] md:p-8 md:shadow-[0_0_60px_rgba(0,0,0,0.2)]">
            <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--sovereign-gold)] md:text-[11px] md:tracking-[0.28em]">
              Epoch System
            </p>
            <h2 className="mt-4 text-2xl font-light tracking-[0.04em] text-white md:text-3xl md:tracking-[0.05em]">
              Time becomes infrastructure.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/58 md:mt-5 md:text-base md:leading-8">
              Each epoch forms a structured financial cycle: execution,
              measurement, validation, capital coordination, and transition.
              This creates an operating rhythm for the protocol and allows
              strategy trust to accumulate through time.
            </p>

            <div className="mt-8 space-y-4">
              <TimelineRow step="01" label="Execution Window" active />
              <TimelineRow step="02" label="Measurement Layer" active />
              <TimelineRow step="03" label="Risk Evaluation" active />
              <TimelineRow step="04" label="Capital Reallocation" />
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-6 shadow-[0_0_50px_rgba(0,0,0,0.18)] backdrop-blur-xl md:rounded-[32px] md:p-8 md:shadow-[0_0_60px_rgba(0,0,0,0.2)]">
            <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--sovereign-gold)] md:text-[11px] md:tracking-[0.28em]">
              Treasury + Risk
            </p>
            <h2 className="mt-4 text-2xl font-light tracking-[0.04em] text-white md:text-3xl md:tracking-[0.05em]">
              Capital preservation by design.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/58 md:mt-5 md:text-base md:leading-8">
              TEMPORALIS combines treasury coordination with a temporal risk
              engine to preserve strategic optionality while defending capital
              during unstable periods.
            </p>

            <div className="mt-8 space-y-5">
              <BarItem label="Protected Reserve" value={42} />
              <BarItem label="Strategic Deployment" value={31} />
              <BarItem label="Liquidity Buffer" value={18} />
              <BarItem label="Governance Reserve" value={9} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-5 md:px-6 md:py-16">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.018))] px-5 py-10 shadow-[0_0_60px_rgba(0,0,0,0.24)] backdrop-blur-xl md:rounded-[34px] md:px-12 md:py-14 md:shadow-[0_0_80px_rgba(0,0,0,0.28)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_55%)]" />
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--sovereign-gold)] md:text-[11px] md:tracking-[0.3em]">
              Enter the Protocol
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-[0.04em] text-white md:text-5xl md:tracking-[0.06em]">
              Capital intelligence
              <br />
              across time.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 md:mt-6 md:text-base md:leading-8">
              Explore the system architecture, enter the protocol dashboard, and
              present TEMPORALIS as a next-generation infrastructure layer for
              temporal finance.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Link
                href="/app"
                className="rounded-2xl border border-[rgba(212,175,55,0.24)] bg-[rgba(212,175,55,0.08)] px-6 py-3 text-center text-sm tracking-[0.14em] text-[var(--sovereign-gold)] transition hover:bg-[rgba(212,175,55,0.14)] md:tracking-[0.18em]"
              >
                OPEN DASHBOARD
              </Link>

              <Link
                href="/docs"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-center text-sm tracking-[0.14em] text-white/82 transition hover:bg-white/10 hover:text-white md:tracking-[0.18em]"
              >
                READ DOCS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function OrbCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[18px] border border-white/10 bg-black/25 px-4 py-3 text-center backdrop-blur-md">
      <div className="text-[10px] uppercase tracking-[0.2em] text-white/36">
        {label}
      </div>
      <div className="mt-1 text-sm text-white/86">{value}</div>
    </div>
  );
}

function GlassPanel({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] p-5 text-sm leading-7 text-white/60 shadow-[0_0_30px_rgba(0,0,0,0.16)] backdrop-blur-xl md:rounded-[28px] md:p-6 md:text-base md:leading-8 md:shadow-[0_0_40px_rgba(0,0,0,0.18)]">
      {children}
    </div>
  );
}

function TimelineRow({
  step,
  label,
  active = false,
}: {
  step: string;
  label: string;
  active?: boolean;
}) {
  return (
    <div className="flex items-center gap-4 rounded-[18px] border border-white/10 bg-black/20 px-4 py-4 md:rounded-[20px]">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm ${
          active
            ? "border-[rgba(212,175,55,0.45)] bg-[rgba(212,175,55,0.12)] text-[var(--sovereign-gold)] shadow-[0_0_16px_rgba(212,175,55,0.22)]"
            : "border-white/10 bg-white/5 text-white/55"
        }`}
      >
        {step}
      </div>
      <div className="text-sm text-white/82 md:text-base">{label}</div>
    </div>
  );
}

function BarItem({
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