import type { Locale } from "../config/site";
import { copy, pageMeta } from "../i18n";
import { pathFor } from "../i18n/routes";
import { PageHead } from "./PageHead";
import portrait from "../assets/images/jani-portrait.jpg";

export function JaniView({ locale }: { locale: Locale }) {
  const t = copy(locale);
  const meta = pageMeta(locale, "jani");
  return (
    <>
      <PageHead kicker={t.jani.kicker} title={meta.h1} image={portrait} alt={t.alts.portrait} imagePosition="center 38%" />
      <div className="grid gap-12 border-t border-ink/10 px-5 py-14 md:gap-16 md:px-10 md:py-20 lg:grid-cols-12 lg:gap-x-8 lg:px-16 lg:py-28">
        <article className="lg:col-span-7">
          <p className="max-w-3xl text-balance font-display text-[clamp(2rem,3.4vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.025em] text-ink">
            {t.jani.p1}
          </p>
          <div className="mt-10 grid gap-6 border-t border-ink/15 pt-7 text-[0.95rem] leading-relaxed text-muted md:mt-12 md:grid-cols-2 md:gap-10 md:pt-8 md:text-base">
            <p>{t.jani.p2}</p>
            <p>{t.jani.p3}</p>
          </div>
          <section className="mt-12 border-t border-ink/15 pt-8" aria-labelledby="jani-press">
            <p id="jani-press" className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brass">
              {t.jani.pressLabel}
            </p>
            <ul className="mt-5">
              {t.jani.press.map((item) => (
                <li key={item.href} className="border-t border-ink/10 py-5 first:border-ink/20">
                  <a
                    className="group block max-w-xl"
                    href={item.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="text-[0.7rem] uppercase tracking-[0.22em] text-brass">
                      {item.source} · {item.year}
                    </span>
                    <span className="mt-1.5 block text-[0.95rem] leading-snug text-ink/80 transition-colors group-hover:text-brass">
                      {item.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </article>
        <aside className="self-start border-t-2 border-brass bg-rail/55 px-5 py-6 md:px-8 md:py-9 lg:col-span-4 lg:col-start-9">
          <div className="flex items-center justify-between gap-6">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brass">{t.nav.results}</p>
            <span className="font-display text-xl text-ink/25" aria-hidden="true">
              01
            </span>
          </div>
          <ol className="mt-6 md:mt-7">
            {t.results.map((row) => (
              <li
                key={`${row.year}-${row.text}`}
                className="grid grid-cols-[4.75rem_1fr] gap-3 border-t border-ink/10 py-4 first:border-ink/20 md:grid-cols-[5.5rem_1fr] md:gap-4"
              >
                <span className="font-display text-base text-brass">{row.year}</span>
                <span className="text-sm leading-snug text-ink/70">{row.text}</span>
              </li>
            ))}
          </ol>
          <p className="border-t border-ink/10 pt-7">
            <a className="btn-ghost" href={pathFor("results", locale)}>
              {t.nav.results}
            </a>
          </p>
        </aside>
      </div>
    </>
  );
}
