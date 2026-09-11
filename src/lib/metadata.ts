import type { Metadata } from "next";
import { site, type Locale } from "../config/site";
import { pageMeta } from "../i18n";
import type { PageId } from "../i18n/routes";
import { pathFor } from "../i18n/routes";
import { absoluteUrl, hreflangLinks, ogLocale } from "./seo";

export function buildMetadata(opts: {
  locale: Locale;
  page: PageId;
  title?: string;
  description?: string;
  canonicalPath?: string;
  alternateFi?: string;
  alternateEn?: string;
  ogType?: "website" | "article";
}): Metadata {
  const meta = pageMeta(opts.locale, opts.page);
  const title = opts.title ?? meta.title;
  const description = opts.description ?? meta.description;
  const canonical = absoluteUrl(opts.canonicalPath ?? pathFor(opts.page, opts.locale));
  const links =
    opts.alternateFi && opts.alternateEn
      ? [
          { hreflang: "fi-FI", href: absoluteUrl(opts.alternateFi) },
          { hreflang: "en-GB", href: absoluteUrl(opts.alternateEn) },
          { hreflang: "x-default", href: absoluteUrl(opts.alternateFi) },
        ]
      : hreflangLinks(opts.page);
  const languages: Record<string, string> = {};
  for (const link of links) languages[link.hreflang] = link.href;
  const ogImage = `${site.domain}/og.jpg`;
  const ogAlt =
    opts.locale === "fi"
      ? "Jani Siekkinen tähtää lyöntiä kiertueella"
      : "Jani Siekkinen lining up a shot on tour";

  return {
    title,
    description,
    metadataBase: new URL(site.domain),
    robots: { index: true, follow: true },
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: opts.ogType ?? "website",
      siteName: site.name,
      title,
      description,
      url: canonical,
      locale: ogLocale(opts.locale),
      alternateLocale: [opts.locale === "fi" ? "en_GB" : "fi_FI"],
      images: [{ url: ogImage, width: 1200, height: 630, alt: ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
