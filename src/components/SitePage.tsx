import type { ReactNode } from "react";
import type { Locale } from "../config/site";
import { copy } from "../i18n";
import type { PageId } from "../i18n/routes";
import { routePairs } from "../i18n/routes";
import { graphJsonLd } from "../lib/schema";
import { cn } from "../lib/cn";
import { EnquireBar } from "./EnquireBar";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function SitePage({
  locale,
  page,
  overlay,
  jsonLdExtra,
  langHref,
  children,
}: {
  locale: Locale;
  page: PageId;
  overlay?: boolean;
  jsonLdExtra?: object[];
  langHref?: string;
  children: ReactNode;
}) {
  const t = copy(locale);
  const useOverlay = overlay ?? page === "home";
  const graph = graphJsonLd(locale, page, jsonLdExtra);
  const other = locale === "fi" ? "en" : "fi";
  const href = langHref ?? routePairs[page][other];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
      />
      <a
        href="#main"
        className="cue sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:min-h-12 focus:bg-rail focus:px-3 focus:py-2 focus:text-ink"
      >
        {t.skip}
      </a>
      <Header locale={locale} page={page} overlay={useOverlay} langHref={href} />
      <main id="main" tabIndex={-1} className={cn("page-in", page === "home" ? "pb-0" : "pb-24 md:pb-0")}>
        {children}
      </main>
      <Footer locale={locale} />
      {page !== "home" ? <EnquireBar locale={locale} /> : null}
    </>
  );
}
