import type { MetadataRoute } from "next";

const BASE_URL = "https://debordcompany.es";

const routes = [
  "",
  "/cv",
  "/conversor",
  "/markit",
  "/git-debord",
  "/design",
  "/design/button",
  "/design/card",
  "/design/chip",
  "/design/text",
  "/design/title-component",
  "/design/separator-component",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
