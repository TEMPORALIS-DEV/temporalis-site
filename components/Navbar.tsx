"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

let useAppKitSafe: null | (() => { open: () => void }) = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  useAppKitSafe = require("@reown/appkit/react").useAppKit;
} catch {}

export default function Navbar() {
  const pathname = usePathname();
  const walletEnabled = !!process.env.NEXT_PUBLIC_REOWN_PROJECT_ID;

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  const openWallet = () => {
    if (!walletEnabled) return;
    if (!useAppKitSafe) return;
    try {
      const { open } = useAppKitSafe();
      open();
    } catch {
      // ignore
    }
  };

  return (
    <header className="site-header">
      <div className="site-container nav-wrap">
        <Link href="/" className="brand">
          <span className="brand-name">Velora</span>
          <span className="brand-pill">PoS²</span>
        </Link>

        <nav className="nav-links">
          <Link className={isActive("/trade") ? "active" : ""} href="/trade">
            Trade
          </Link>
          <Link className={isActive("/vaults") ? "active" : ""} href="/vaults">
            Vaults
          </Link>
          <Link
            className={isActive("/strategies") ? "active" : ""}
            href="/strategies"
          >
            Strategies
          </Link>
          <Link
            className={isActive("/ratings") ? "active" : ""}
            href="/ratings"
          >
            Ratings
          </Link>
          <Link className={isActive("/docs") ? "active" : ""} href="/docs">
            Docs
          </Link>
        </nav>

        <div className="nav-actions">
          <button
            className={`btn ${walletEnabled ? "btn-primary" : "btn-disabled"}`}
            onClick={openWallet}
            disabled={!walletEnabled}
            title={!walletEnabled ? "Add NEXT_PUBLIC_REOWN_PROJECT_ID" : ""}
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
}