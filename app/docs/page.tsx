export default function DocsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
        <h1 className="text-3xl font-bold">Docs</h1>
        <p className="mt-3 text-white/70">
          Documentation is coming soon. This page will include protocol overview, guides, and security notes.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {["Overview", "How it works", "Security"].map((t) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <div className="text-sm font-semibold">{t}</div>
              <div className="mt-2 text-sm text-white/70">Coming soon.</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}