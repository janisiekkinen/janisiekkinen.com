import type { Locale } from "../config/site";
import { en } from "./en";
import { fi } from "./fi";
import type { PageId } from "./routes";

const dict = { fi, en };

export function copy(locale: Locale) {
  return dict[locale];
}

export function pageMeta(locale: Locale, page: PageId) {
  return dict[locale].meta[page];
}

export type { PageId };
