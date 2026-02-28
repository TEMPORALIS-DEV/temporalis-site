export default function Roadmap() {
  return (
    <section className="relative py-16">
      {/* نفس جو الخلفية */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/bg-city.png')] bg-cover bg-center opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(139,92,246,0.25),rgba(0,0,0,0)_60%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-white">Roadmap</h2>
          <p className="mt-2 text-sm text-white/60">Our journey ahead</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          <RoadmapCard
            title="Foundation"
            accent="from-fuchsia-400 to-violet-500"
            items={["Brand & Website", "Brand & Website"]}
          />
          <RoadmapCard
            title="Build"
            accent="from-cyan-300 to-blue-500"
            items={["Core Features", "Core Features"]}
          />
          <RoadmapCard
            title="Launch"
            accent="from-sky-300 to-indigo-500"
            items={["Mainnet Launch"]}
          />
        </div>
      </div>
    </section>
  );
}

function RoadmapCard({
  title,
  items,
  accent,
}: {
  title: string;
  items: string[];
  accent: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/35 p-5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
      <div className="rounded-xl border border-white/10 bg-black/35 px-4 py-3">
        <div className="flex items-center gap-3">
          <span
            className={`grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-b ${accent} shadow-[0_0_25px_rgba(139,92,246,0.25)]`}
          >
            <IconMark />
          </span>
          <div className="text-lg font-semibold text-white">{title}</div>
        </div>
      </div>

      <ul className="mt-5 space-y-3 text-sm text-white/70">
        {items.map((t) => (
          <li key={t} className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-white/60" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function IconMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 5.5L10.5 12L4 18.5V5.5Z"
        fill="white"
        opacity="0.9"
      />
      <path
        d="M12 5.5L20 12L12 18.5V5.5Z"
        fill="white"
        opacity="0.7"
      />
    </svg>
  );
}