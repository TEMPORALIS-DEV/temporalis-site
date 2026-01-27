import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Docs", href: "/docs" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Contact", href: "/contact" },
];

// Placeholder social links — بكرة نبدّلها بروابطك
const socials = [
  { label: "X", href: "#" },
  { label: "Telegram", href: "#" },
  { label: "Discord", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto w-full max-w-6xl px-4 pb-10 pt-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/mark.png"
              alt="Velora mark"
              width={32}
              height={32}
              className="rounded-lg border border-white/10 bg-white/5 p-1"
            />
            <div>
              <div className="text-sm font-semibold">Velora</div>
              <div className="text-xs text-white/60">Official Website</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-white/70">
            {links.map((l) => (
              <Link key={l.label} href={l.href} className="hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-white/70">
            {socials.map((s) => (
              <a key={s.label} href={s.href} className="hover:text-white" target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <div>© {year} Velora. All rights reserved.</div>
          <div className="flex flex-wrap gap-3">
            <a className="hover:text-white" href="#">Privacy (soon)</a>
            <a className="hover:text-white" href="#">Terms (soon)</a>
          </div>
        </div>
      </div>
    </footer>
  );
}