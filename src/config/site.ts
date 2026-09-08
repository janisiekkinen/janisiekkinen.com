export const site = {
  name: "Jani Siekkinen",
  domain: "https://janisiekkinen.com",
  instagramHandle: "jsiegopool",
  email: "janisiekkinentmi@gmail.com",
  /** E.164 with + for schema/tel */
  phone: "+358407647729",
  phoneDisplay: "+358 40 764 7729",
  whatsapp: "358407647729",
  /** Cloudflare Web Analytics token. Leave empty until set. */
  analyticsToken: "",
  /** Public Turnstile site key */
  turnstileSiteKey: "",
  pricingMode: "quote" as const,
  /** TODO: real starting-from amounts. Do not show until filled. */
  startingFrom: {
    private: "",
    group: "",
    show: "",
  },
} as const;

export const serviceIds = [
  "private",
  "group",
  "beginner",
  "corporate",
  "school",
  "events",
  "repairs",
  "jersey",
  "house",
  "travel",
  "video",
  "sponsor",
  "other",
] as const;

export type ServiceId = (typeof serviceIds)[number];
export type Locale = "fi" | "en";
