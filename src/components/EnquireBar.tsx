import type { Locale } from "../config/site";
import { copy } from "../i18n";
import { pathFor } from "../i18n/routes";

export function EnquireBar({ locale }: { locale: Locale }) {
  const t = copy(locale);
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-3 md:hidden">
      <a href={pathFor("contact", locale)} className="btn w-full shadow-[0_-8px_40px_rgb(0_0_0_/_.45)]">
        {t.enquire}
      </a>
    </div>
  );
}
