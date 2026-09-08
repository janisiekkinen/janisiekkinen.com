import type { Locale } from "../config/site";
import { copy } from "../i18n";
import { pathFor } from "../i18n/routes";

export function Faq({
  locale,
  items,
  label,
  title,
  intro,
}: {
  locale: Locale;
  items: readonly { q: string; a: string }[];
  label: string;
  title: string;
  intro: string;
}) {
  const t = copy(locale);
  return (
    <section className="border-y border-ink/10 bg-rail/45 px-5 py-16 md:px-10 md:py-20 lg:px-16 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-8">
        <header className="self-start lg:sticky lg:top-28 lg:col-span-4">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brass">{label}</p>
          <h2 className="display-wrap mt-4 whitespace-pre-line font-display text-[clamp(2.35rem,4.2vw,4.1rem)] font-semibold uppercase leading-[0.99]">
            {title}
          </h2>
          <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-muted md:text-base">{intro}</p>
          <p className="mt-8 hidden md:block">
            <a className="btn" href={pathFor("contact", locale)}>
              {t.enquire}
            </a>
          </p>
        </header>
        <div className="border-y border-ink/15 lg:col-span-7 lg:col-start-6">
          {items.map((item, i) => (
            <details key={item.q} className="group border-b border-ink/10 last:border-b-0" open={i === 0}>
              <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-5 py-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass [&::-webkit-details-marker]:hidden">
                <span className="flex min-w-0 items-baseline gap-4 md:gap-6">
                  <span className="shrink-0 font-display text-sm tabular-nums text-brass">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-[1.55rem] font-semibold uppercase leading-[1.1] tracking-tight text-ink transition-colors group-hover:text-brass md:text-[2rem]">
                    {item.q}
                  </span>
                </span>
                <span className="relative size-5 shrink-0 text-brass" aria-hidden="true">
                  <span className="absolute left-0 top-1/2 h-px w-full bg-current" />
                  <span className="absolute left-1/2 top-0 h-full w-px bg-current transition-transform duration-200 group-open:rotate-90" />
                </span>
              </summary>
              <p className="pb-7 pl-10 pr-10 text-[0.95rem] leading-relaxed text-muted md:pb-8 md:pl-16 md:pr-16 md:text-base">{item.a}</p>
            </details>
          ))}
          <p className="my-8 md:hidden">
            <a className="btn w-full" href={pathFor("contact", locale)}>
              {t.enquire}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
