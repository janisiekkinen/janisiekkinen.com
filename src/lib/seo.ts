import { site, type Locale } from "../config/site";
import { copy } from "../i18n";
import type { PageId } from "../i18n/routes";
import { pathFor, routePairs } from "../i18n/routes";

export function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${site.domain}${p}`;
}

export function hreflangLinks(page: PageId) {
  const fi = absoluteUrl(routePairs[page].fi);
  const en = absoluteUrl(routePairs[page].en);
  return [
    { hreflang: "fi-FI", href: fi },
    { hreflang: "en-GB", href: en },
    { hreflang: "x-default", href: fi },
  ];
}

export function ogLocale(locale: Locale): string {
  return locale === "fi" ? "fi_FI" : "en_GB";
}

export function breadcrumb(locale: Locale, page: PageId) {
  const t = copy(locale);
  const home = {
    name: t.meta.home.h1,
    path: pathFor("home", locale),
  };
  if (page === "home") return [home];
  return [home, { name: t.meta[page].h1, path: pathFor(page, locale) }];
}
