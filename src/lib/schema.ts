import { site, serviceIds, type Locale } from "../config/site";
import { copy } from "../i18n";
import { absoluteUrl, breadcrumb } from "./seo";
import type { PageId } from "../i18n/routes";
import { pathFor } from "../i18n/routes";

const address = {
  "@type": "PostalAddress",
  addressLocality: "Helsinki",
  addressCountry: "FI",
};

function contactFields() {
  const fields: { email?: string; telephone?: string } = {};
  if (site.email) fields.email = site.email;
  if (site.phone) fields.telephone = site.phone;
  return fields;
}

export function personJsonLd(locale: Locale) {
  const t = copy(locale);
  return {
    "@type": "Person",
    "@id": `${site.domain}/#person`,
    name: "Jani Siekkinen",
    alternateName: "Siego",
    description: t.meta.jani.description,
    birthDate: "1987-04-19",
    birthPlace: { "@type": "Place", name: "Helsinki" },
    nationality: "FI",
    jobTitle: locale === "fi" ? "Poolammattilainen" : "Professional pool player",
    url: site.domain,
    image: `${site.domain}/og.jpg`,
    address,
    sameAs: [`https://instagram.com/${site.instagramHandle}`],
    knowsAbout: ["8-ball", "9-ball", "10-ball", "straight pool", "pool coaching"],
    ...contactFields(),
  };
}

export function serviceJsonLd(locale: Locale) {
  const t = copy(locale);
  const offers = serviceIds
    .filter((id) => id !== "other" && id !== "sponsor")
    .map((id) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: t.services[id],
        areaServed: "Finland",
      },
      availability: "https://schema.org/InStock",
      url: absoluteUrl(pathFor("contact", locale)),
    }));

  return {
    "@type": "ProfessionalService",
    "@id": `${site.domain}/#service`,
    name: locale === "fi" ? "Jani Siekkinen · poolvalmennus ja show" : "Jani Siekkinen · pool coaching and shows",
    description: t.meta.home.description,
    url: site.domain,
    image: `${site.domain}/og.jpg`,
    address,
    ...contactFields(),
    areaServed: {
      "@type": "AdministrativeArea",
      name: locale === "fi" ? "Helsingin seutu" : "Helsinki region",
    },
    founder: { "@id": `${site.domain}/#person` },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: locale === "fi" ? "Palvelut" : "Services",
      itemListElement: offers,
    },
  };
}

export function faqJsonLd(locale: Locale) {
  const t = copy(locale);
  return {
    "@type": "FAQPage",
    mainEntity: t.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
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
    publisher: { "@id": `${site.domain}/#person` },
  };
}

export function articleJsonLd(opts: {
  title: string;
  description: string;
  path: string;
  locale: Locale;
}) {
  return {
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    inLanguage: opts.locale === "fi" ? "fi-FI" : "en-GB",
    author: { "@id": `${site.domain}/#person` },
    publisher: { "@id": `${site.domain}/#person` },
    mainEntityOfPage: absoluteUrl(opts.path),
    url: absoluteUrl(opts.path),
    image: `${site.domain}/og.jpg`,
  };
}

export function graphJsonLd(locale: Locale, page: PageId, extra: object[] = []) {
  const graph: object[] = [websiteJsonLd(), personJsonLd(locale), serviceJsonLd(locale), breadcrumbJsonLd(locale, page)];
  if (page === "home") {
    graph.push(faqJsonLd(locale));
  }
  graph.push(...extra);
  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
