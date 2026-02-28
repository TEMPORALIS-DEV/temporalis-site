import Link from "next/link";
import { site } from "../../content/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <div className="text-sm opacity-80">{site.name}</div>
            <div className="mt-2 text-sm opacity-60">{site.legal.notice}</div>
          </div>

          <div className="flex gap-6 text-sm opacity-70">
            <Link href="/docs" className="hover:opacity-100">
              Docs
            </Link>
            <Link href="/research" className="hover:opacity-100">
              Research
            </Link>
            <Link href="/about/contact" className="hover:opacity-100">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 text-xs opacity-40">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}