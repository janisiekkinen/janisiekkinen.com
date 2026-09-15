import { site, type Locale } from "../../config/site";
import { copy } from "../../i18n";
import { routePairs, type PageId } from "../../i18n/routes";
import { tips } from "../../lib/tips";

export const dynamic = "force-static";

const order: PageId[] = [
  "home",
  "coaching",
  "events",
  "repairs",
  "gameon",
  "sponsor",
  "jani",
  "results",
  "tips",
  "contact",
  "privacy",
  "terms",
];

function pageLines(locale: Locale) {
  const t = copy(locale);
  return order.map((page) => {
    const meta = t.meta[page];
    const url = `${site.domain}${routePairs[page][locale]}`;
    return `- [${meta.h1}](${url}): ${meta.description}`;
  });
}

function tipLines(locale: Locale) {
  return tips
    .filter((tip) => tip.locale === locale)
    .map((tip) => {
      const path = locale === "fi" ? `/vinkit/${tip.slug}/` : `/en/tips/${tip.slug}/`;
      return `- [${tip.title}](${site.domain}${path}): ${tip.description}`;
    });
}

function contactLines() {
  const lines: string[] = [];
  if (site.email) lines.push(`- Email: ${site.email}`);
  if (site.phoneDisplay) lines.push(`- Phone: ${site.phoneDisplay}`);
  if (site.whatsapp) lines.push(`- WhatsApp: https://wa.me/${site.whatsapp}`);
  lines.push(`- Instagram: ${site.instagramUrl}`);
  lines.push(`- Contact form: ${site.domain}${routePairs.contact.fi} (Finnish), ${site.domain}${routePairs.contact.en} (English)`);
  return lines;
}

function body() {
  return [
    "# Jani Siekkinen",
    "",
    "> Finnish professional pool player (more than 20 Finnish championship medals, 8-ball national champion 2018, still competing on the Euro Tour and WNT).",
    "> Bookable for 1-to-1 and small-group pool coaching, beginner sessions, remote video analysis, corporate and",
    "> private exhibition events, cue repairs, GameOn jerseys and sponsorship partnerships. Based in Helsinki,",
    "> Finland; works across Finland and abroad by agreement.",
    "",
    "The site is bilingual: Finnish pages live at the root, English pages under /en/. Every page has a hreflang",
    "counterpart. Pricing is by quote only. No prices are published, and quotes depend on venue, duration and",
    "group size. Enquiries go through the contact form and are answered personally by Jani Siekkinen.",
    "",
    "## Services",
    "",
    "- Private 1-to-1 coaching: one player, one table, content driven by what the player's own game reveals.",
    "- Small-group coaching (2–4 players): shared corrections for friends or club players.",
    "- Fundamentals for beginners: grip, stance, aim and cue-ball control from zero.",
    "- Video analysis, remote: the player sends phone clips, gets prioritised corrections and drills back.",
    "- Corporate and private events: exhibition shots plus guided play for groups, including complete beginners.",
    "- Schools and youth sessions.",
    "- Cue repairs: tip, ferrule and shaft work, quoted before any work starts.",
    "- GameOn jerseys: sizes and stock vary, ordered via the form; there is no webshop.",
    "- Sponsorship and partnerships: jersey, tour, social media and local collaborations. Current partners: Mezz Cues, Sisubiljardi, Taom Billiards, Holly Case.",
    "",
    "## Pages (Finnish)",
    "",
    ...pageLines("fi"),
    "",
    "## Notes, Finnish (/vinkit/)",
    "",
    ...tipLines("fi"),
    "",
    "## Pages (English)",
    "",
    ...pageLines("en"),
    "",
    "## Notes, English (/en/tips/)",
    "",
    ...tipLines("en"),
    "",
    "## Contact",
    "",
    ...contactLines(),
    "",
    "## Optional",
    "",
    `- [Sitemap](${site.domain}/sitemap.xml): every indexable URL with hreflang alternates.`,
    `- [robots.txt](${site.domain}/robots.txt)`,
    "",
  ].join("\n");
}

export async function GET() {
  return new Response(body(), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
