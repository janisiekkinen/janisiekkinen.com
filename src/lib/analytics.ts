import { site } from "../config/site";

export const GA_NOTICE_KEY = "ga-notice";

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const noticeListeners = new Set<() => void>();

export function subscribeNotice(onStoreChange: () => void) {
  noticeListeners.add(onStoreChange);
  return () => {
    noticeListeners.delete(onStoreChange);
  };
}

export function noticeDismissed(): boolean {
  if (typeof window === "undefined") return true;
  try {
    return localStorage.getItem(GA_NOTICE_KEY) === "1";
  } catch {
    return false;
  }
}

export function dismissNotice() {
  try {
    localStorage.setItem(GA_NOTICE_KEY, "1");
  } catch {
    /* private mode */
  }
  noticeListeners.forEach((listener) => listener());
}

export function gaMeasurementId(): string {
  const id = site.gaMeasurementId.trim();
  return /^G-[A-Z0-9]+$/i.test(id) ? id : "";
}

export function trackEvent(name: string, params?: EventParams) {
  if (!gaMeasurementId()) return;
  window.gtag?.("event", name, params);
}

export function trackPageView(pathname: string) {
  if (!gaMeasurementId()) return;
  window.gtag?.("event", "page_view", {
    page_path: pathname,
    page_location: window.location.href,
    page_title: document.title,
  });
}
