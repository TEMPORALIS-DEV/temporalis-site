import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Docs" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-6">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/brand/mark.png"
          alt="Velora mark"
          width={34}
          height={34}
          className="rounded-lg border border-white/10 bg-white/5 p-1"
          priority
        />
        <div className="leading-tight">
          <div className="text-sm font-semibold tracking-wide">Velora</div>
          <div className="text-xs text-white/60">Official Website</div>
        </div>
      </Link>

      <nav className="hidden items-center gap-6 text-sm text-white/75 md:flex">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="hover:text-white">
            {l.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <Link
          href="/docs"
          className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 md:inline-flex"
        >
          Read Docs
        </Link>
        <Link
          href="/contact"
          className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}