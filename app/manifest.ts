import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nexo Tech IT - Web Development & E-commerce Solutions Agency",
    short_name: "Nexo Tech IT",
    description:
      "Leading web development agency in Bangladesh. We build fast, SEO-optimized websites, high-converting landing pages, and scalable e-commerce platforms.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    categories: ["business", "developer", "productivity"],
    lang: "en",
    dir: "ltr",
    orientation: "portrait-primary",
  };
}

