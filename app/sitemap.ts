import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://temporalis.dev";

  const routes = [
    "",
    "/about",
    "/architecture",
    "/technology",
    "/institutional",
    "/research",
    "/docs",
    "/roadmap",
    "/ratings",
    "/strategies",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}