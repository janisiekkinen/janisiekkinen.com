import type { Locale } from "../config/site";
import { copy } from "../i18n";

export function LangSwitch({ locale, href }: { locale: Locale; href: string }) {
  const t = copy(locale);
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center text-[0.72rem] uppercase tracking-[0.14em] text-ink/75 hover:text-ink"
      aria-label={t.langSwitchLabel}
    >
      {t.langSwitch}
    </a>
  );
}

