import React from "react";

export default function HeroSection() {
  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest opacity-70">
            Velora Protocol
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Building the financial operating system for decentralized markets.
          </h1>

          <p className="mt-5 text-base opacity-80 md:text-lg">
            Trade smart. Prove strategies. Grow assets. Velora is designed as a
            modular DeFi platform: Solana-first, multi-chain expansion planned.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#waitlist"
              className="rounded-xl border px-5 py-3 text-sm font-medium hover:opacity-80"
            >
              Join Early Access
            </a>
            <a
              href="#docs"
              className="rounded-xl border px-5 py-3 text-sm font-medium opacity-80 hover:opacity-100"
            >
              Read Whitepaper
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 text-xs opacity-70">
            <span className="rounded-full border px-3 py-1">PoS² Strategies</span>
            <span className="rounded-full border px-3 py-1">Trade Layer</span>
            <span className="rounded-full border px-3 py-1">AI Vaults (planned)</span>
            <span className="rounded-full border px-3 py-1">Universal Yield Layer (planned)</span>
          </div>
        </div>
      </div>
    </section>
  );
}