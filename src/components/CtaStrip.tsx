import type { Locale } from "../config/site";
import { copy } from "../i18n";
import { pathFor } from "../i18n/routes";

export function CtaStrip({ locale }: { locale: Locale }) {
  const t = copy(locale);
  return (
    <section className="border-y border-ink/10 bg-rail">
      <div className="flex flex-col gap-8 px-5 py-14 md:flex-row md:items-center md:justify-between md:px-10 md:py-16 lg:px-16">
        <p className="display-wrap font-display max-w-xl text-4xl font-semibold uppercase md:text-5xl">{t.quote}</p>
        <a href={pathFor("contact", locale)} className="btn shrink-0">
          {t.enquire}
        </a>
      </div>
    </section>
  );
}
