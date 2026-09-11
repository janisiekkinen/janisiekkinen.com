"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import type { Locale } from "../config/site";
import { copy } from "../i18n";
import { pathFor } from "../i18n/routes";
import { GA_CONSENT_KEY, gaMeasurementId } from "../lib/analytics";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type Consent = "granted" | "denied";

function readConsent(): Consent | null {
  try {
    const value = localStorage.getItem(GA_CONSENT_KEY);
    if (value === "granted" || value === "denied") return value;
  } catch {
    /* private mode */
  }
  return null;
}

export function Analytics({ locale }: { locale: Locale }) {
  const id = gaMeasurementId();
  const t = copy(locale);
  const pathname = usePathname();
  const [consent, setConsent] = useState<Consent | null>(null);
  const [ready, setReady] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    setConsent(readConsent());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!id || consent !== "granted" || !scriptReady) return;
    window.gtag?.("event", "page_view", { page_path: pathname });
  }, [id, pathname, consent, scriptReady]);

  if (!id) return null;

  function choose(value: Consent) {
    try {
      localStorage.setItem(GA_CONSENT_KEY, value);
    } catch {
      /* private mode */
    }
    setConsent(value);
  }

  return (
    <>
      {consent === "granted" ? (
        <>
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${id}', {
                anonymize_ip: true,
                send_page_view: false,
                allow_google_signals: false,
                allow_ad_personalization_signals: false
              });
            `}
          </Script>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
            strategy="afterInteractive"
            onLoad={() => setScriptReady(true)}
          />
        </>
      ) : null}
      {ready && consent === null ? (
        <div
          className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-rail px-5 py-5 md:px-10 lg:px-16"
          role="dialog"
          aria-labelledby="cookie-title"
          aria-describedby="cookie-text"
        >
          <div className="flex max-w-5xl flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
            <div>
              <p id="cookie-title" className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brass">
                {t.cookie.title}
              </p>
              <p id="cookie-text" className="mt-3 max-w-xl text-sm leading-relaxed text-ink/88">
                {t.cookie.text}{" "}
                <a className="underline decoration-brass/50 underline-offset-4 hover:text-brass" href={pathFor("privacy", locale)}>
                  {t.privacy}
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button type="button" className="btn-ghost min-h-12" onClick={() => choose("denied")}>
                {t.cookie.decline}
              </button>
              <button type="button" className="btn" onClick={() => choose("granted")}>
                {t.cookie.accept}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
