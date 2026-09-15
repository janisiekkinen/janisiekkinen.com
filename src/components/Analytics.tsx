"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import type { Locale } from "../config/site";
import { copy } from "../i18n";
import { pathFor } from "../i18n/routes";
import { GA_NOTICE_KEY, gaMeasurementId, trackEvent, trackPageView } from "../lib/analytics";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

function noticeDismissed(): boolean {
  try {
    return localStorage.getItem(GA_NOTICE_KEY) === "1";
  } catch {
    return false;
  }
}

export function Analytics({ locale }: { locale: Locale }) {
  const id = gaMeasurementId();
  const t = copy(locale);
  const pathname = usePathname();
  const [showNotice, setShowNotice] = useState(() => !noticeDismissed());
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    if (!id || !scriptReady) return;
    trackPageView(pathname);
  }, [id, pathname, scriptReady]);

  useEffect(() => {
    if (!id || !scriptReady) return;
    function onClick(e: MouseEvent) {
      const link = (e.target as Element).closest("a");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      if (!/(^|\/)yhteystiedot\/?$|\/en\/contact\/?$/.test(href)) return;
      trackEvent("contact_click", {
        link_url: href,
        link_text: link.textContent?.trim().slice(0, 100) ?? "",
      });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [id, scriptReady]);

  if (!id) return null;

  function dismissNotice() {
    try {
      localStorage.setItem(GA_NOTICE_KEY, "1");
    } catch {
      /* private mode */
    }
    setShowNotice(false);
  }

  return (
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
      {showNotice ? (
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
              <button type="button" className="btn-ghost min-h-12" onClick={dismissNotice}>
                {t.cookie.decline}
              </button>
              <button type="button" className="btn" onClick={dismissNotice}>
                {t.cookie.accept}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
