export const site = {
  name: "TEMPORALIS",
  shortName: "TEMPORALIS",
  tagline: "Capital Governance Protocol Standard",
  description:
    "A standardized framework for epoch-based evaluation, dynamic risk repricing, and autonomous exposure control. Built for disciplined allocators. Deployed on Base (EVM).",
  baseUrl: "https://temporalis.xyz",

  nav: [
    { label: "Architecture", href: "/architecture" },
    { label: "Technology", href: "/technology" },
    { label: "Institutional", href: "/institutional" },
    { label: "Research", href: "/research" },
    { label: "Docs", href: "/docs" }
  ],

  cta: [
    { label: "Read Architecture", href: "/architecture" },
    { label: "View Technical Spec", href: "/technology" }
  ],

  appLink: { label: "App", href: "/app" },

  legal: {
    notice:
      "TEMPORALIS is a protocol standard. Nothing on this site constitutes investment advice or a promise of returns."
  }
} as const;

// ✅ export default as well (prevents 'undefined' issues if any file imports default)
export default site;