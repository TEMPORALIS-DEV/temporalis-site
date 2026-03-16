import Link from "next/link";

const protocolLinks = [
  { label: "Architecture", href: "/architecture" },
  { label: "Technology", href: "/technology" },
  { label: "Research", href: "/research" },
  { label: "Docs", href: "/docs" },
];

const infrastructureLinks = [
  { label: "Institutional", href: "/institutional" },
  { label: "Protocol Dashboard", href: "/app" },
  { label: "Risk Engine", href: "/technology" },
  { label: "Governance", href: "/research" },
];

const legalLinks = [
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Contact", href: "mailto:contact@temporalis.finance" },
];

const socialLinks = [
  { label: "X", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/10 bg-[rgba(8,8,10,0.72)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.45)] to-transparent" />
        <div className="absolute left-[-120px] top-10 h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.08),transparent_70%)] blur-3xl" />
        <div className="absolute right-[-120px] bottom-0 h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_72%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 xl:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div className="max-w-md">
            <div className="mb-4 text-[13px] tracking-[0.38em] text-white/95">
              TEMPORALIS
            </div>

            <p className="leading-8 text-white/56">
              Temporal Capital Intelligence Infrastructure.
              A protocol designed to evaluate strategies, coordinate treasury
              posture, and govern capital allocation across structured
              epoch-based time cycles.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <FooterMetric label="Epoch Model" value="Structured" />
              <FooterMetric label="Risk Layer" value="Adaptive" />
              <FooterMetric label="Strategy Trust" value="Validated" />
              <FooterMetric label="Treasury" value="Coordinated" />
            </div>
          </div>

          <FooterColumn title="Protocol" links={protocolLinks} />
          <FooterColumn title="Infrastructure" links={infrastructureLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/38">
            © 2026 TEMPORALIS Protocol. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-sm text-white/46">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-5 text-sm font-medium tracking-[0.18em] text-white/92">
        {title}
      </h3>

      <ul className="space-y-3">
        {links.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-sm text-white/56 transition hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[18px] border border-white/10 bg-white/[0.03] px-4 py-3">
      <div className="text-[10px] uppercase tracking-[0.2em] text-white/35">
        {label}
      </div>
      <div className="mt-2 text-sm text-white/84">{value}</div>
    </div>
  );
}