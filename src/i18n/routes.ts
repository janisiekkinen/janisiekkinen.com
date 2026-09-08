import type { Locale } from "../config/site";

export const routePairs = {
  home: { fi: "/", en: "/en/" },
  jani: { fi: "/jani/", en: "/en/jani/" },
  repairs: { fi: "/huollot/", en: "/en/repairs/" },
  coaching: { fi: "/valmennukset/", en: "/en/coaching/" },
  events: { fi: "/tilaisuudet/", en: "/en/events/" },
  gameon: { fi: "/gameon/", en: "/en/gameon/" },
  sponsor: { fi: "/sponsorointi/", en: "/en/sponsorship/" },
  contact: { fi: "/yhteystiedot/", en: "/en/contact/" },
  results: { fi: "/tulokset/", en: "/en/results/" },
  tips: { fi: "/vinkit/", en: "/en/tips/" },
  privacy: { fi: "/tietosuoja/", en: "/en/privacy/" },
  terms: { fi: "/ehdot/", en: "/en/terms/" },
} as const;

export type PageId = keyof typeof routePairs;

export function pathFor(page: PageId, locale: Locale): string {
  return routePairs[page][locale];
}

export const tipPairs: { fi: string; en: string }[] = [
  { fi: "breakin-rytmi", en: "break-rhythm" },
  { fi: "8-pallon-paatos", en: "eight-ball-decision" },
  { fi: "videoanalyysin-klipit", en: "video-analysis-clips" },
];

export function localePairForPath(pathname: string): { fi: string; en: string } | null {
  const normalized = normalizePath(pathname);

  for (const pair of Object.values(routePairs)) {
    if (normalized === normalizePath(pair.fi) || normalized === normalizePath(pair.en)) {
      return pair;
    }
  }

  if (normalized.startsWith("/vinkit/") && normalized !== "/vinkit") {
    const slug = normalized.replace("/vinkit/", "");
    const pair = tipPairs.find((p) => p.fi === slug);
    if (!pair) return null;
    return { fi: `/vinkit/${pair.fi}/`, en: `/en/tips/${pair.en}/` };
  }
  if (normalized.startsWith("/en/tips/") && normalized !== "/en/tips") {
    const slug = normalized.replace("/en/tips/", "");
    const pair = tipPairs.find((p) => p.en === slug);
    if (!pair) return null;
    return { fi: `/vinkit/${pair.fi}/`, en: `/en/tips/${pair.en}/` };
  }

  return null;
}

export function counterpartPath(pathname: string): { locale: Locale; other: string } | null {
  const normalized = normalizePath(pathname);

  for (const pair of Object.values(routePairs)) {
    if (normalized === normalizePath(pair.fi)) {
      return { locale: "fi", other: pair.en };
    }
    if (normalized === normalizePath(pair.en)) {
      return { locale: "en", other: pair.fi };
    }
  }

  if (normalized.startsWith("/vinkit/") && normalized !== "/vinkit") {
    const slug = normalized.replace("/vinkit/", "");
    const pair = tipPairs.find((p) => p.fi === slug);
    return { locale: "fi", other: `/en/tips/${pair?.en ?? slug}/` };
  }
  if (normalized.startsWith("/en/tips/") && normalized !== "/en/tips") {
    const slug = normalized.replace("/en/tips/", "");
    const pair = tipPairs.find((p) => p.en === slug);
    return { locale: "en", other: `/vinkit/${pair?.fi ?? slug}/` };
  }

  return null;
}

export function normalizePath(path: string): string {
  const noHash = path.split("?")[0] ?? path;
  if (noHash === "/") return "/";
  return noHash.replace(/\/$/, "") || "/";
}
