import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://temporalis.dev/sitemap.xml",
    host: "https://temporalis.dev",
  };
}