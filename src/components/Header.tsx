import type { Locale } from "../config/site";
import type { PageId } from "../i18n/routes";
import { copy } from "../i18n";
import { pathFor } from "../i18n/routes";
import { cn } from "../lib/cn";
import { LangSwitch } from "./LangSwitch";
import { MobileNav } from "./MobileNav";

export function Header({
  locale,
  page,
  overlay = false,
  langHref,
}: {
  locale: Locale;
  page: PageId;
  overlay?: boolean;
  langHref: string;
}) {
  const t = copy(locale);
  const items: { id: PageId; label: string }[] = [
    { id: "jani", label: t.nav.jani },
    { id: "repairs", label: t.nav.repairs },
    { id: "coaching", label: t.nav.coaching },
    { id: "events", label: t.nav.events },
    { id: "gameon", label: t.nav.gameon },
    { id: "sponsor", label: t.nav.sponsor },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header
        className={cn(
        "z-50 w-full",
        overlay ? "absolute inset-x-0 top-0 bg-gradient-to-b from-rail/80 to-transparent" : "relative border-b border-ink/10 bg-slate",
      )}
    >
      <div className="relative z-[60] flex items-center justify-between gap-6 px-5 py-4 md:px-10 lg:px-16">
        <a
          href={pathFor("home", locale)}
          className="font-display text-[1.35rem] font-semibold uppercase tracking-[0.14em] md:text-2xl"
          aria-label={t.homeAria}
        >
          Siekkinen
        </a>
        <nav className="hidden items-center gap-5 text-[0.72rem] uppercase tracking-[0.14em] text-ink/70 lg:flex xl:gap-7" aria-label={t.navAria}>
          {items.map((item) => (
            <a
              key={item.id}
              href={pathFor(item.id, locale)}
              className={cn("border-b pb-0.5 transition-colors hover:text-ink", page === item.id ? "border-brass text-ink" : "border-transparent")}
            >
              {item.label}
            </a>
          ))}
          <LangSwitch locale={locale} href={langHref} />
        </nav>
        <div className="flex items-center gap-1 lg:hidden">
          <LangSwitch locale={locale} href={langHref} />
          <MobileNav locale={locale} page={page} langHref={langHref} items={items} />
        </div>
      </div>
    </header>
  );
}
