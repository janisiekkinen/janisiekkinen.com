import type { Locale } from "../config/site";
import { en } from "./en";
import { fi } from "./fi";
import type { PageId } from "./routes";
import { gaMeasurementId } from "../lib/analytics";

const dict = { fi, en };

export function copy(locale: Locale) {
  return dict[locale];
}

export function privacyParagraphs(locale: Locale): readonly string[] {
  const t = dict[locale];
  if (!gaMeasurementId()) return t.privacyBody;
  const [first, , ...rest] = t.privacyBody;
  return [first, t.privacyAnalytics, ...rest];
}

export function pageMeta(locale: Locale, page: PageId) {
  return dict[locale].meta[page];
}

export type { PageId };
