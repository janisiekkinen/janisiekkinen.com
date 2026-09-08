import type { MetadataRoute } from "next";
import { site } from "../config/site";
import { localePairForPath, routePairs } from "../i18n/routes";
import { tips } from "../lib/tips";

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = new Set<string>();
  for (const pair of Object.values(routePairs)) {
    urls.add(pair.fi);
    urls.add(pair.en);
  }
  for (const tip of tips) {
    urls.add(tip.locale === "fi" ? `/vinkit/${tip.slug}/` : `/en/tips/${tip.slug}/`);
  }

  return [...urls].map((path) => {
    const pair = localePairForPath(path);
    const item: MetadataRoute.Sitemap[number] = {
      url: `${site.domain}${path}`,
    };
    if (pair) {
      item.alternates = {
        languages: {
          "fi-FI": `${site.domain}${pair.fi}`,
          "en-GB": `${site.domain}${pair.en}`,
          "x-default": `${site.domain}${pair.fi}`,
        },
      };
    }
    return item;
  });
}
