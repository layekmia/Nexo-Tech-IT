import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin/", // If you build an admin panel
        "/dashboard/", // If you add client dashboard
        "/test/", // If you have test pages
        "/staging/", // If you have staging area
      ],
    },
    sitemap: "https://nexotechit.com/sitemap.xml",
    host: "https://nexotechit.com",
  };
}
