import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: { path: string; priority: number; freq: "monthly" | "yearly" }[] =
    [
      { path: "", priority: 1, freq: "monthly" },
      { path: "/doe", priority: 0.9, freq: "monthly" },
      { path: "/transparencia", priority: 0.8, freq: "monthly" },
      { path: "/politica-de-privacidade", priority: 0.2, freq: "yearly" },
      { path: "/termos-de-uso", priority: 0.2, freq: "yearly" },
    ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.freq,
    priority: route.priority,
  }));
}
