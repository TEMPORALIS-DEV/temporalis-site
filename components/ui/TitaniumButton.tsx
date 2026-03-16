"use client";

import Link from "next/link";
import type { ReactNode } from "react";

export default function TitaniumButton({
  children,
  href = "/app",
}: {
  children: ReactNode;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="
        inline-flex items-center justify-center
        rounded-full
        border border-white/15
        bg-white/[0.03]
        px-7 py-3
        text-sm tracking-wide
        text-[var(--titanium)]
        transition
        hover:border-white/25 hover:bg-white/[0.06]
        focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30
      "
    >
      {children}
    </Link>
  );
}