export default function GetStartedPage() {
  return (
    <main className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-20">
        {/* Header */}
        <header className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-amber-300/80" />
            Get Started • Setup Guide
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Get Started
          </h1>

          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            Follow this quick setup to move from UI shell to a real DeFi product.
            Start simple, then ship safely.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/docs"
              className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-black hover:opacity-90 transition"
            >
              Read Docs
            </a>
            <a
              href="/app"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Open Dashboard
            </a>
          </div>
        </header>

        {/* Steps */}
        <section className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-3xl border border-white/10 bg-black/25 p-7 backdrop-blur-md">
              <h2 className="text-2xl font-bold text-white">Step-by-step</h2>
              <p className="mt-2 text-white/70">
                Recommended order to implement features without breaking the UX.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm font-semibold text-white">
                    1) Wallet Connect (RainbowKit / wagmi)
                  </div>
                  <div className="mt-2 text-sm text-white/70">
                    Add connect button, network detection, and account state. Handle
                    disconnected/loading states cleanly.
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm font-semibold text-white">
                    2) Read balances + positions
                  </div>
                  <div className="mt-2 text-sm text-white/70">
                    Show token balances, allowances, and protocol positions. Keep it fast:
                    cache + refresh strategy.
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm font-semibold text-white">
                    3) Transaction preview (simulation)
                  </div>
                  <div className="mt-2 text-sm text-white/70">
                    Before a user signs, preview outputs, fees, price impact, and any risk
                    warnings.
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm font-semibold text-white">
                    4) Enable core actions (supply / borrow / swap)
                  </div>
                  <div className="mt-2 text-sm text-white/70">
                    Start with one action, ship it fully with confirmations, then expand.
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/25 p-7 backdrop-blur-md">
              <h2 className="text-2xl font-bold text-white">Best practices</h2>

              <ul className="mt-4 list-disc pl-5 text-sm text-white/75 space-y-2">
                <li>Keep safe defaults: conservative slippage and clear warnings.</li>
                <li>Show “before → after” position changes when possible.</li>
                <li>Use feature flags for experimental integrations.</li>
                <li>Ship in phases; do not enable everything at once.</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/20 to-pink-500/10 p-7 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white">Checklist</h3>

              <div className="mt-5 space-y-3 text-sm text-white/80">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  ✅ Landing + Nav ready
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  ✅ Docs / Roadmap / Contact pages
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  ⏳ Wallet connect
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  ⏳ Read balances / positions
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  ⏳ Actions + confirmations
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="/contact"
                  className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-black hover:opacity-90 transition text-center"
                >
                  Request Access
                </a>
                <a
                  href="/roadmap"
                  className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-sm font-semibold text-white hover:bg-white/10 transition text-center"
                >
                  View Roadmap
                </a>
              </div>
            </div>
          </aside>
        </section>

        <div className="mt-12 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Velora. Build carefully — ship confidently.
        </div>
      </div>
    </main>
  );
}
