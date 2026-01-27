export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-3 text-white/70">
          Add your official email and social links here. For now, this is a placeholder contact page.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
            <div className="text-sm font-semibold">Email</div>
            <div className="mt-2 text-sm text-white/70">contact@velora.xyz (example)</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
            <div className="text-sm font-semibold">Community</div>
            <div className="mt-2 text-sm text-white/70">X / Telegram / Discord (soon)</div>
          </div>
        </div>
      </div>
    </main>
  );
}