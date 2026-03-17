const blocks = [
  {
    step: "01",
    title: "Epoch System",
    desc: "Capital and strategy behavior are evaluated in structured time windows, creating clear measurement boundaries and disciplined transitions.",
  },
  {
    step: "02",
    title: "GSCL Engine",
    desc: "Signals are translated into stability-aware scores that measure reliability, confidence, and strategic quality under changing conditions.",
  },
  {
    step: "03",
    title: "Allocation Engine",
    desc: "Capital is routed according to verified signals, bounded by rules, caps, and risk-aware coordination logic.",
  },
  {
    step: "04",
    title: "Self-Healing Layer",
    desc: "When instability is detected, the system can compress exposure, adapt posture, and preserve capital resilience.",
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-5 md:px-6 md:py-24">
      <div className="mb-10 md:mb-14">
        <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--sovereign-gold)] md:text-[11px] md:tracking-[0.3em]">
          How TEMPORALIS Works
        </p>

        <h2 className="mt-4 max-w-4xl text-3xl font-light tracking-[0.04em] text-white md:text-5xl md:tracking-[0.06em]">
          A system built around
          <br />
          time, scoring, and control.
        </h2>

        <p className="mt-5 max-w-3xl text-sm leading-7 text-white/60 md:text-base md:leading-8">
          TEMPORALIS operates through epoch-based cycles, deterministic scoring,
          bounded allocation logic, and adaptive defense mechanisms that protect
          capital under stress.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {blocks.map((block) => (
          <div
            key={block.step}
            className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] p-5 shadow-[0_0_30px_rgba(0,0,0,0.16)] backdrop-blur-xl md:p-6"
          >
            <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--sovereign-gold)] md:text-[11px] md:tracking-[0.28em]">
              {block.step}
            </div>

            <h3 className="mt-3 text-xl font-light text-white md:text-2xl">
              {block.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/58 md:text-base md:leading-8">
              {block.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}