import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://www.klabuz.com";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard", "/signin", "/api"],
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}


