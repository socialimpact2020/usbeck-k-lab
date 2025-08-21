import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.klabuz.com";

  // 정적 페이지들 (필요시 확장)
  const staticPaths = [
    "/",
    "/aboutus",
    "/programs",
    "/programs/sw",
    "/programs/hw",
    "/programs/ot",
    "/boards/notice",
    "/boards/news",
    "/waytocome",
  ];

  const now = new Date();

  return staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}


