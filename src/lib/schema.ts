import { site, serviceIds, type Locale, type ServiceId } from "../config/site";
import { copy } from "../i18n";
import { absoluteUrl, breadcrumb } from "./seo";
import type { PageId } from "../i18n/routes";
import { pathFor } from "../i18n/routes";

const address = {
  "@type": "PostalAddress",
  addressLocality: "Helsinki",
  addressCountry: "FI",
};

const schemaServiceName: Record<Locale, Record<ServiceId, string>> = {
  fi: {
    private: "Biljardivalmennus, yksityinen 1-to-1",
    group: "Biljardivalmennus, pienryhmä 2–4",
    beginner: "Biljardiopetus, alkeet",
    corporate: "Yritysbiljardi / TYKY",
    school: "Biljardi kouluille ja nuorille",
    events: "Biljardi-ilta / show",
    repairs: "Biljardikepin huolto",
    jersey: "GameOn-pelipaita",
    house: "Biljardivalmennus kotikäyntinä",
    travel: "Biljardivalmennus matkalla",
    video: "Biljardin videoanalyysi",
    sponsor: "Yhteistyö / sponsori",
    other: "Muu",
  },
  en: {
    private: "Pool coaching, private 1-to-1",
    group: "Pool coaching, small group 2–4",
    beginner: "Billiards lessons, beginner",
    corporate: "Corporate pool / recreation",
    school: "Pool for schools and youth",
    events: "Pool event / exhibition",
    repairs: "Cue repair",
    jersey: "GameOn jersey",
    house: "Pool coaching house call",
    travel: "Pool coaching on the road",
    video: "Pool video analysis",
    sponsor: "Partnership / sponsor",
    other: "Other",
  },
};

function contactFields() {
  const fields: { email?: string; telephone?: string } = {};
  if (site.email) fields.email = site.email;
  if (site.phone) fields.telephone = site.phone;
  return fields;
}

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": `${site.domain}/#org`,
    name: site.name,
    url: site.domain,
    logo: {
      "@type": "ImageObject",
      url: `${site.domain}/icon-512.png`,
      width: 512,
      height: 512,
    },
    image: `${site.domain}/og.jpg`,
    sameAs: [site.instagramUrl],
    founder: { "@id": `${site.domain}/#person` },
  };
}

export function personJsonLd(locale: Locale) {
  const t = copy(locale);
  return {
    "@type": "Person",
    "@id": `${site.domain}/#person`,
    name: "Jani Siekkinen",
    alternateName: ["Siego", "Jani Siekkinen pool"],
    description: t.meta.jani.description,
    birthDate: "1987-04-19",
    birthPlace: { "@type": "Place", name: "Helsinki" },
    nationality: "FI",
    jobTitle: locale === "fi" ? "Biljardivalmentaja ja poolammattilainen" : "Pool coach and professional player",
    hasOccupation: {
      "@type": "Occupation",
      name: locale === "fi" ? "Biljardivalmentaja" : "Pool coach",
    },
    url: site.domain,
    image: `${site.domain}/og.jpg`,
    address,
    sameAs: [site.instagramUrl],
    knowsLanguage: ["fi", "en"],
    knowsAbout:
      locale === "fi"
        ? [
            "biljardi",
            "pool",
            "biljardivalmennus",
            "poolvalmennus",
            "8-pallo",
            "9-pallo",
            "10-pallo",
            "suora pallo",
          ]
        : ["billiards", "pool", "pool coaching", "8-ball", "9-ball", "10-ball", "straight pool"],
    worksFor: { "@id": `${site.domain}/#org` },
    ...contactFields(),
  };
}

export function serviceJsonLd(locale: Locale) {
  const t = copy(locale);
  const names = schemaServiceName[locale];
  const offers = serviceIds
    .filter((id) => id !== "other" && id !== "sponsor")
    .map((id) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: names[id],
        areaServed: ["Helsinki", "Finland"],
      },
      url: absoluteUrl(pathFor("contact", locale)),
    }));

  return {
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${site.domain}/#service`,
    name:
      locale === "fi"
        ? "Biljardivalmennus Helsinki · Jani Siekkinen"
        : "Pool coaching Helsinki · Jani Siekkinen",
    alternateName:
      locale === "fi" ? ["Poolvalmennus Helsinki", "Biljardiopetus Helsinki"] : ["Billiards coaching Helsinki"],
    description: t.meta.coaching.description,
    url: absoluteUrl(pathFor("coaching", locale)),
    image: `${site.domain}/og.jpg`,
    logo: `${site.domain}/icon-512.png`,
    address,
    ...contactFields(),
    currenciesAccepted: "EUR",
    serviceType:
      locale === "fi"
        ? ["Biljardivalmennus", "Poolvalmennus", "Biljardiopetus"]
        : ["Pool coaching", "Billiards coaching"],
    areaServed: [
      { "@type": "City", name: "Helsinki" },
      { "@type": "Country", name: "Finland" },
    ],
    availableLanguage: ["Finnish", "English"],
    founder: { "@id": `${site.domain}/#person` },
    parentOrganization: { "@id": `${site.domain}/#org` },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: locale === "fi" ? "Biljardivalmennus ja palvelut" : "Pool coaching and services",
      itemListElement: offers,
    },
  };
}

function faqAnswerText(answer: string | readonly string[]) {
  return typeof answer === "string" ? answer : answer.join(" ");
}

export function faqJsonLd(items: readonly { q: string; a: string | readonly string[] }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqAnswerText(item.a),
      },
    })),
  };
}

export function breadcrumbJsonLd(locale: Locale, page: PageId) {
  const items = breadcrumb(locale, page);
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": `${site.domain}/#website`,
    url: site.domain,
    name: site.name,
    inLanguage: ["fi-FI", "en-GB"],
    publisher: { "@id": `${site.domain}/#org` },
    image: `${site.domain}/og.jpg`,
  };
}

export function articleJsonLd(opts: {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  datePublished: string;
}) {
  return {
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    inLanguage: opts.locale === "fi" ? "fi-FI" : "en-GB",
    datePublished: opts.datePublished,
    dateModified: opts.datePublished,
    author: { "@id": `${site.domain}/#person` },
    publisher: { "@id": `${site.domain}/#org` },
    mainEntityOfPage: absoluteUrl(opts.path),
    url: absoluteUrl(opts.path),
    image: `${site.domain}/og.jpg`,
  };
}

export function graphJsonLd(locale: Locale, page: PageId, extra: object[] = []) {
  const graph: object[] = [
    organizationJsonLd(),
    websiteJsonLd(),
    personJsonLd(locale),
    serviceJsonLd(locale),
    breadcrumbJsonLd(locale, page),
  ];
  const t = copy(locale);
  if (page === "home") {
    graph.push(faqJsonLd(t.faq));
  }
  if (page === "coaching") {
    graph.push(faqJsonLd(t.coaching.faq));
  }
  if (page === "events") {
    graph.push(faqJsonLd(t.eventsPage.faq));
  }
  graph.push(...extra);
  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
