"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-sm tracking-wide text-white sm:px-5 md:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3 sm:gap-4">
          <Image
            src="/temporalis-logo.png"
            alt="TEMPORALIS Logo"
            width={70}
            height={70}
            className="h-10 w-10 shrink-0 object-contain sm:h-[52px] sm:w-[52px] md:h-[70px] md:w-[70px]"
            priority
          />

          <span className="truncate text-[11px] tracking-[0.18em] text-white/95 sm:text-sm sm:tracking-[0.28em] md:tracking-[0.35em]">
            TEMPORALIS
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-white/80 md:flex">
          <Link href="/architecture" className="transition hover:text-white">
            Architecture
          </Link>

          <Link href="/technology" className="transition hover:text-white">
            Technology
          </Link>

          <Link href="/institutional" className="transition hover:text-white">
            Institutional
          </Link>

          <Link href="/research" className="transition hover:text-white">
            Research
          </Link>

          <Link href="/docs" className="transition hover:text-white">
            Docs
          </Link>
        </nav>

        <Link
          href="/app"
          className="hidden rounded-lg border border-[rgba(205,170,90,0.45)] px-4 py-2 text-[var(--sovereign-gold)] transition hover:bg-[rgba(205,170,90,0.08)] md:inline-flex"
        >
          Enter Protocol
        </Link>
      </div>
    </header>
  );
}