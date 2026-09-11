import { site, type Locale } from "../config/site";
import { copy, pageMeta } from "../i18n";
import { ContactForm } from "./ContactForm";

export function ContactView({ locale }: { locale: Locale }) {
  const t = copy(locale);
  const meta = pageMeta(locale, "contact");
  return (
    <div className="grid lg:min-h-[calc(100svh-5rem)] lg:grid-cols-2">
      <div className="border-b border-ink/10 px-5 py-14 md:px-10 lg:border-b-0 lg:border-r lg:px-16 lg:py-20">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-brass">{t.enquire}</p>
        <h1 className="display-wrap font-display mt-4 text-[clamp(3rem,8vw,6rem)] font-bold uppercase">{meta.h1}</h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/85">{t.contactLead}</p>
        <p className="mt-4 text-muted">{t.locationLine}</p>
        <ul className="mt-12 space-y-3 text-lg">
          {site.email ? (
            <li>
              <a className="cue" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
          ) : null}
          {site.phoneDisplay && site.phone ? (
            <li>
              <a className="cue" href={`tel:${site.phone}`}>
                {site.phoneDisplay}
              </a>
            </li>
          ) : null}
          {site.whatsapp ? (
            <li>
              <a className="cue" href={`https://wa.me/${site.whatsapp}`}>
                {t.whatsapp}
              </a>
            </li>
          ) : null}
          <li>
            <a className="cue" href={site.instagramUrl} rel="me noopener noreferrer">
              @{site.instagramHandle}
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-rail px-5 py-14 md:px-10 lg:px-16 lg:py-20">
        <ContactForm locale={locale} />
      </div>
    </div>
  );
}
