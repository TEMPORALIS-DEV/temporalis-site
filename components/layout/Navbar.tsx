"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "../../content/site";

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`text-sm tracking-wide transition ${
        active
          ? "text-[var(--titanium)]"
          : "text-[var(--text-muted)] hover:text-[var(--titanium)]"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  return (
    <header className="border-b border-[var(--border-subtle)] backdrop-blur bg-black/40">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">

        <Link href="/" className="text-lg tracking-[0.25em] text-[var(--titanium)]">
          TEMPORALIS
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {site.nav.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <Link
          href="/app"
          className="
            border border-[var(--border-strong)]
            text-[var(--sovereign-gold)]
            px-5 py-2
            rounded-md
            text-xs
            tracking-wide
            transition
            hover:border-[var(--sovereign-gold)]
            hover:text-white
          "
        >
          Enter Protocol
        </Link>

      </div>
    </header>
  );
}