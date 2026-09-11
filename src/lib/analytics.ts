import { site } from "../config/site";

export const GA_CONSENT_KEY = "ga-consent";

export function gaMeasurementId(): string {
  const id = site.gaMeasurementId.trim();
  return /^G-[A-Z0-9]+$/i.test(id) ? id : "";
}
