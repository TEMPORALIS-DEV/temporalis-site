import Link from "next/link";

const X_URL = process.env.NEXT_PUBLIC_X_URL || "https://x.com/velorap697";
const TELEGRAM_URL =
  process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/+gRI-sp8G5vs3ZWFk";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-wrap">
        <div className="footer-left">
          <div className="footer-title">Velora Protocol</div>
          <div className="footer-sub">
            Web3 Infrastructure &amp; DeFi Innovation
          </div>

          <div className="footer-links">
            <a href="mailto:info@veloraprotocol.io">info@veloraprotocol.io</a>
            <a href="https://veloraprotocol.io" target="_blank" rel="noreferrer">
              veloraprotocol.io
            </a>
          </div>

          <div className="footer-note">
            Building the next layer of decentralized finance.
          </div>

          <div className="footer-copy">© 2026 Velora. All rights reserved.</div>
        </div>

        <div className="footer-right">
          <div className="footer-col">
            <div className="footer-heading">Protocol</div>
            <Link href="/strategies">Strategies</Link>
            <Link href="/ratings">Ratings</Link>
            <Link href="/docs">Docs</Link>
          </div>

          <div className="footer-col">
            <div className="footer-heading">Community</div>
            <a href={X_URL} target="_blank" rel="noreferrer">
              X
            </a>
            <a href={TELEGRAM_URL} target="_blank" rel="noreferrer">
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}