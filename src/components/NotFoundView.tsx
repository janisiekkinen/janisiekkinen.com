import type { Locale } from "../config/site";
import { copy } from "../i18n";
import { pathFor } from "../i18n/routes";
import { EnquireBar } from "./EnquireBar";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { PageHead } from "./PageHead";
import action from "../assets/images/break-shot.jpg";

export function NotFoundView({ locale }: { locale: Locale }) {
  const t = copy(locale);
  const langHref = locale === "fi" ? "/en/" : "/";
  return (
    <>
      <a
        href="#main"
        className="cue sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:min-h-12 focus:bg-rail focus:px-3 focus:py-2 focus:text-ink"
      >
        {t.skip}
      </a>
      <Header locale={locale} page="home" overlay langHref={langHref} />
      <main id="main" tabIndex={-1} className="page-in pb-24 md:pb-0">
        <PageHead
          kicker={t.notFound.kicker}
          title={t.notFound.title}
          lead={t.notFound.lead}
          image={action}
          alt={t.alts.break}
          imagePosition="32% 40%"
        />
        <div className="px-5 py-14 md:px-10 md:py-20 lg:px-16">
          <p className="max-w-xl text-[1.05rem] leading-relaxed text-muted">{t.notFound.body}</p>
          <p className="mt-10 flex flex-wrap gap-3">
            <a className="btn" href={pathFor("home", locale)}>
              {t.notFound.home}
            </a>
            <a className="btn-ghost" href={pathFor("contact", locale)}>
              {t.enquire}
            </a>
          </p>
        </div>
      </main>
      <Footer locale={locale} />
      <EnquireBar locale={locale} />
    </>
  );
}
