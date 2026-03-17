export default function Why() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-5 md:px-6 md:py-24">
      <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:gap-12">

        {/* LEFT */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--sovereign-gold)]">
            Why TEMPORALIS
          </p>

          <h2 className="mt-4 text-3xl font-light tracking-[0.04em] text-white md:text-5xl">
            DeFi is broken.
            <br />
            We fix the core layer.
          </h2>
        </div>

        {/* RIGHT */}
        <div className="grid gap-4 md:gap-6">

          <Card>
            Most DeFi protocols optimize for yield, ignoring how strategies behave
            across time. This leads to unstable systems that collapse under stress.
          </Card>

          <Card>
            TEMPORALIS introduces temporal evaluation — strategies must prove
            consistency across epochs, not just short-term performance.
          </Card>

          <Card>
            Capital is not blindly allocated. It is continuously scored,
            constrained, and rebalanced based on verified data.
          </Card>

          <Card>
            The result is a system that prioritizes survivability, capital
            protection, and long-term intelligence.
          </Card>

        </div>
      </div>
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-black/20 p-5 text-sm leading-7 text-white/60 backdrop-blur-xl md:p-6 md:text-base md:leading-8">
      {children}
    </div>
  );
}