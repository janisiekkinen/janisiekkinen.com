import type { MetadataRoute } from "next";
import { site } from "../config/site";
import { fi } from "../i18n/fi";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Siekkinen",
    description: fi.meta.home.description,
    lang: "fi-FI",
    start_url: "/",
    scope: "/",
    display: "minimal-ui",
    background_color: "#121614",
    theme_color: "#121614",
    icons: [
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
