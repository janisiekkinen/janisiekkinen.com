import { site, type Locale } from "../config/site";
import { copy } from "../i18n";
import type { PageId } from "../i18n/routes";
import { pathFor } from "../i18n/routes";

export function Footer({ locale }: { locale: Locale }) {
  const t = copy(locale);
  const ig = site.instagramUrl;
  const year = new Date().getFullYear();
  const links: { id: PageId; label: string }[] = [
    { id: "jani", label: t.nav.jani },
    { id: "repairs", label: t.nav.repairs },
    { id: "coaching", label: t.nav.coaching },
    { id: "events", label: t.nav.events },
    { id: "gameon", label: t.nav.gameon },
    { id: "sponsor", label: t.nav.sponsor },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-ink/10 bg-rail">
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(196,165,116,0.14),transparent_68%)] blur-2xl"
        aria-hidden="true"
      />
      <div className="relative px-5 pb-24 pt-16 md:px-10 md:pb-10 md:pt-20 lg:px-16">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brass">{t.hero.kicker}</p>
            <a
              href={pathFor("home", locale)}
              className="display-wrap mt-4 block font-display text-[clamp(2.6rem,7vw,4.75rem)] font-semibold uppercase text-ink transition-colors hover:text-brass"
              aria-label={t.homeAria}
            >
              Jani
              <span className="block">Siekkinen</span>
            </a>
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-muted">{t.locationLine}</p>
          </div>
          <nav className="md:col-span-3" aria-label={t.footerNav}>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brass" aria-hidden="true">
              {t.footerNav}
            </p>
            <ul className="mt-5 space-y-3 text-[0.72rem] uppercase tracking-[0.14em]">
              {links.map((item) => (
                <li key={item.id}>
                  <a className="text-ink/75 transition-colors hover:text-brass" href={pathFor(item.id, locale)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-4">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brass">{t.footerConnect}</p>
            <ul className="mt-5 space-y-3 text-[0.95rem] text-ink/80">
              <li>
                <a className="transition-colors hover:text-brass" href={ig} rel="me noopener noreferrer">
                  @{site.instagramHandle}
                </a>
              </li>
              {site.email ? (
                <li>
                  <a className="transition-colors hover:text-brass" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </li>
              ) : null}
              {site.phoneDisplay && site.phone ? (
                <li>
                  <a className="transition-colors hover:text-brass" href={`tel:${site.phone}`}>
                    {site.phoneDisplay}
                  </a>
                </li>
              ) : null}
              {site.whatsapp ? (
                <li>
                  <a className="transition-colors hover:text-brass" href={`https://wa.me/${site.whatsapp}`}>
                    {t.whatsapp}
                  </a>
                </li>
              ) : null}
            </ul>
            <p className="mt-8">
              <a className="btn-ghost" href={pathFor("contact", locale)}>
                {t.enquire}
              </a>
            </p>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-ink/10 pt-6 text-[0.7rem] uppercase tracking-[0.16em] text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {t.footerLegal}
          </p>
          <div className="flex gap-8">
            <a className="transition-colors hover:text-brass" href={pathFor("privacy", locale)}>
              {t.privacy}
            </a>
            <a className="transition-colors hover:text-brass" href={pathFor("terms", locale)}>
              {t.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
