const roadmap = [
  { phase: "Phase 1", title: "Foundation", items: ["Brand & website", "Docs structure", "Public roadmap"] },
  { phase: "Phase 2", title: "Build", items: ["Core features", "Testing & audits", "Testnet release"] },
  { phase: "Phase 3", title: "Launch", items: ["Mainnet release", "Partnerships", "Community growth"] },
];

export default function RoadmapPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
        <h1 className="text-3xl font-bold">Roadmap</h1>
        <p className="mt-3 text-white/70">Milestones will be updated as progress is completed.</p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {roadmap.map((r) => (
            <div key={r.phase} className="rounded-3xl border border-white/10 bg-black/20 p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">{r.phase}</div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                  {r.title}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {r.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-white/60" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}