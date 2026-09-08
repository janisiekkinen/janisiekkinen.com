"use client";

import { useEffect, useId, useState } from "react";
import type { Locale } from "../config/site";
import { copy } from "../i18n";
import type { PageId } from "../i18n/routes";
import { pathFor } from "../i18n/routes";
import { cn } from "../lib/cn";
import { LangSwitch } from "./LangSwitch";

type Item = { id: PageId; label: string };

export function MobileNav({
  locale,
  page,
  langHref,
  items,
}: {
  locale: Locale;
  page: PageId;
  langHref: string;
  items: Item[];
}) {
  const t = copy(locale);
  const panelId = useId();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="relative inline-flex size-12 items-center justify-center"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? t.menuClose : t.menuOpen}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">{open ? t.menuClose : t.menuOpen}</span>
        <span aria-hidden="true" className="flex w-5 flex-col gap-1.5">
          <span className={cn("block h-px w-full bg-ink transition-transform duration-200", open && "translate-y-[4px] rotate-45")} />
          <span className={cn("block h-px w-full bg-ink transition-opacity duration-200", open && "opacity-0")} />
          <span className={cn("block h-px w-full bg-ink transition-transform duration-200", open && "-translate-y-[4px] -rotate-45")} />
        </span>
      </button>

      <div
        id={panelId}
        className={cn(
          "fixed inset-0 z-50 flex-col bg-rail px-5 pb-10 pt-24",
          open ? "flex" : "hidden",
        )}
      >
        <nav aria-label={t.navAriaMobile} className="flex flex-1 flex-col justify-center">
          {items.map((item) => (
            <a
              key={item.id}
              href={pathFor(item.id, locale)}
              className={cn(
                "display-wrap border-b border-ink/10 py-4 font-display text-[clamp(2.2rem,10vw,3.4rem)] font-semibold uppercase leading-none",
                page === item.id ? "text-brass" : "text-ink",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center justify-between gap-4 pt-8">
          <LangSwitch locale={locale} href={langHref} />
          <a href={pathFor("contact", locale)} className="btn">
            {t.enquire}
          </a>
        </div>
      </div>
    </div>
  );
}
