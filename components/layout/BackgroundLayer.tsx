"use client";

import { usePathname } from "next/navigation";

export default function BackgroundLayer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return <div className={isHome ? "bg-home" : "bg-pages"} aria-hidden="true" />;
}