import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-28">
      {/* الخلفية */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/bg-city.png')] bg-cover bg-center opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(139,92,246,0.35),rgba(0,0,0,0)_55%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">

          {/* 🔥 العنوان الجديد */}
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Evaluate Capital Through Time.
          </h1>

          {/* 🔥 الوصف الجديد */}
          <p className="mx-auto mt-6 max-w-2xl text-sm text-white/70 md:text-base leading-relaxed">
            TEMPORALIS is a temporal capital intelligence infrastructure that measures,
            scores, and reallocates capital across epochs based on verified performance.
          </p>

          {/* الصورة */}
          <div className="mt-10 flex justify-center">
            <Image
              src="/hero.png"
              alt="TEMPORALIS"
              width={1200}
              height={800}
              priority
              className="rounded-2xl"
            />
          </div>

          {/* 🔥 الزر المعدل */}
          <div className="mt-8 flex justify-center">
            <Link
              href="/docs"
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-violet-500 to-violet-700 px-10 py-4 font-semibold text-white shadow-[0_0_45px_rgba(139,92,246,0.45)] hover:brightness-110"
            >
              Enter the System
            </Link>
          </div>

          <div className="mx-auto mt-14 h-px max-w-5xl bg-white/10" />

          {/* Features (ممكن نعدلها لاحقًا) */}
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-10 md:grid-cols-3">
            <Feature title="Epoch-Based System" desc="Capital evaluated across time windows" />
            <Feature title="GSCL Scoring" desc="Deterministic strategy evaluation" />
            <Feature title="Self-Healing" desc="Automatic risk response and protection" />
          </div>

          <div className="mx-auto h-px max-w-5xl bg-white/10" />
        </div>
      </div>
    </section>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="text-center">
      <div className="text-lg font-semibold text-white">{title}</div>
      <div className="mt-1 text-sm text-white/60">{desc}</div>
    </div>
  );
}