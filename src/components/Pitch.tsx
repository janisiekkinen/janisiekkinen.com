import type { Locale } from "../config/site";
import { copy } from "../i18n";
import { pathFor } from "../i18n/routes";

export function Pitch({ locale }: { locale: Locale }) {
  const t = copy(locale);
  return (
    <section className="relative overflow-hidden border-y border-ink/10 bg-rail">
      <div
        className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(196,165,116,0.16),transparent_68%)] blur-2xl"
        aria-hidden="true"
      />
      <div className="relative grid gap-12 px-5 py-14 md:grid-cols-12 md:gap-10 md:px-10 md:py-24 lg:px-16">
        <header className="md:col-span-5">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brass">{t.pitchLabel}</p>
          <h2 className="display-wrap mt-4 whitespace-pre-line font-display text-[clamp(2.35rem,4.4vw,4.25rem)] font-semibold uppercase leading-[0.99]">
            {t.pitchTitle}
          </h2>
          <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-muted md:text-base">{t.pitchBody}</p>
          <p className="mt-8">
            <a className="btn" href={pathFor("contact", locale)}>
              {t.enquire}
            </a>
          </p>
        </header>
        <ul className="md:col-span-6 md:col-start-7">
          {t.pitchPoints.map((item, i) => (
            <li
              key={item.k}
              className="grid grid-cols-[4.5rem_1fr] gap-4 border-t border-ink/12 py-6 first:border-ink/20 md:grid-cols-[5.5rem_1fr] md:py-8"
            >
              <span className="font-display text-sm tabular-nums text-brass">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="font-display text-2xl font-semibold uppercase tracking-tight md:text-3xl">{item.k}</p>
                <p className="mt-2 max-w-sm text-[0.95rem] leading-relaxed text-muted">{item.v}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
