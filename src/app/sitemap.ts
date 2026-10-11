import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { blogPosts } from "@/lib/data/blog";

// Bump this when page content changes. A fixed date is more honest to
// search engines than stamping every page "modified today" on each build.
const SITE_UPDATED = "2026-10-11";

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/hair-treatments", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/skin-treatments", priority: 0.9, changeFrequency: "monthly" },
  { path: "/bridal", priority: 0.9, changeFrequency: "monthly" },
  { path: "/offers", priority: 0.8, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/about", priority: 0.7, changeFrequency: "yearly" },
  { path: "/gallery", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = routes.map((r) => ({
    url: `${siteConfig.url}${r.path}`,
    lastModified: SITE_UPDATED,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const posts = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.updated ?? post.date,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...pages, ...posts];
}
