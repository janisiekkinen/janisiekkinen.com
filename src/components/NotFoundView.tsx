import type { Locale } from "../config/site";
import { copy } from "../i18n";
import { pathFor } from "../i18n/routes";
import { EnquireBar } from "./EnquireBar";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ScratchTable } from "./ScratchTable";

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
      <Header locale={locale} page="home" langHref={langHref} />
      <main id="main" tabIndex={-1} className="page-in bg-rail pb-24 md:pb-0">
        <div className="grid items-center gap-12 px-5 py-12 md:px-10 md:py-16 lg:grid-cols-12 lg:gap-x-10 lg:px-16 lg:py-20">
          <figure className="lg:col-span-7">
            <ScratchTable ghost={t.notFound.ghost} />
            <figcaption className="mt-4 text-center text-[0.7rem] font-medium uppercase tracking-[0.22em] text-brass">
              {t.notFound.caption}
            </figcaption>
          </figure>
          <div className="lg:col-span-5">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brass">{t.notFound.kicker}</p>
            <h1 className="display-wrap font-display mt-3 text-[clamp(4.2rem,12vw,8rem)] font-bold uppercase leading-[0.86] tracking-[-0.03em]">
              {t.notFound.title}
            </h1>
            <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-ink/85">{t.notFound.lead}</p>
            <ol className="mt-8 max-w-md border-t-2 border-brass">
              {t.notFound.notes.map((item) => (
                <li
                  key={item.k}
                  className="grid grid-cols-[4.5rem_1fr] gap-4 border-t border-ink/10 py-3.5 first:border-t-0"
                >
                  <span className="font-display text-lg text-brass">{item.k}</span>
                  <span className="text-sm leading-snug text-ink/75">{item.v}</span>
                </li>
              ))}
            </ol>
            <p className="mt-10 flex flex-wrap gap-3">
              <a className="btn" href={pathFor("home", locale)}>
                {t.notFound.home}
              </a>
              <a className="btn-ghost" href={pathFor("contact", locale)}>
                {t.enquire}
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer locale={locale} />
      <EnquireBar locale={locale} />
    </>
  );
}
