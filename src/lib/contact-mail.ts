import { site, type Locale, type ServiceId } from "../config/site";

const RAIL = "#0c0e0d";
const SLATE = "#121614";
const BRASS = "#c4a574";
const INK = "#f3eee4";
const MUTED = "#a39e93";
const FELT = "#1f3d2e";

const topicFi: Record<ServiceId, string> = {
  private: "Valmennukset",
  group: "Pienryhmä",
  beginner: "Alkeet",
  corporate: "Yritys",
  school: "Koulu",
  events: "Tilaisuudet",
  repairs: "Huollot",
  jersey: "GameOn",
  house: "Kotikäynti",
  travel: "Matka",
  video: "Videoanalyysi",
  sponsor: "Yhteistyö",
  other: "Muu",
};

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (ch) => {
    switch (ch) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      default:
        return "&#39;";
    }
  });
}

function firstName(name: string): string {
  return name.split(/\s+/)[0] || name;
}

function nl(value: string): string {
  return escapeHtml(value).replace(/\n/g, "<br>");
}

function shell(preheader: string, inner: string): string {
  return `<!DOCTYPE html>
<html lang="fi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="dark">
<meta name="supported-color-schemes" content="dark">
<title>Jani Siekkinen</title>
</head>
<body style="margin:0;padding:0;background:${RAIL};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${RAIL};">
<tr>
<td align="center" style="padding:32px 12px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background:${SLATE};">
<tr><td style="height:6px;line-height:6px;font-size:0;background:${BRASS};">&nbsp;</td></tr>
<tr>
<td style="padding:40px 44px 36px;font-family:Arial,Helvetica,sans-serif;color:${INK};">
${inner}
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>`;
}

function kicker(text: string): string {
  return `<p style="margin:0;font-size:11px;letter-spacing:0.28em;text-transform:uppercase;color:${BRASS};">${escapeHtml(text)}</p>`;
}

function headline(text: string): string {
  return `<p style="margin:14px 0 0;font-family:Arial Narrow,Arial,Helvetica,sans-serif;font-size:42px;line-height:0.92;font-weight:700;letter-spacing:0.02em;text-transform:uppercase;color:${INK};">${escapeHtml(text)}</p>`;
}

function hairline(): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:28px 0;"><tr><td style="height:1px;line-height:1px;font-size:0;background:${BRASS};opacity:0.45;">&nbsp;</td></tr></table>`;
}

function field(label: string, value: string, href?: string): string {
  const body = href
    ? `<a href="${escapeHtml(href)}" style="color:${INK};text-decoration:none;border-bottom:1px solid ${BRASS};">${escapeHtml(value)}</a>`
    : escapeHtml(value);
  return `<tr>
<td valign="top" style="padding:0 16px 16px 0;width:120px;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:${BRASS};">${escapeHtml(label)}</td>
<td valign="top" style="padding:0 0 16px;font-size:16px;line-height:1.45;color:${INK};">${body}</td>
</tr>`;
}

function button(href: string, label: string): string {
  return `<a href="${escapeHtml(href)}" style="display:inline-block;min-height:48px;padding:16px 24px;background:${INK};color:${RAIL};font-size:12px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;text-decoration:none;">${escapeHtml(label)}</a>`;
}

function footer(): string {
  const ig = site.instagramHandle ? `@${site.instagramHandle}` : "";
  return `${hairline()}
<p style="margin:0;font-size:12px;line-height:1.6;color:${MUTED};">Helsinki${ig ? ` · Instagram ${escapeHtml(ig)}` : ""}<br>
<a href="${escapeHtml(site.domain)}" style="color:${BRASS};text-decoration:none;">janisiekkinen.com</a></p>`;
}

export function ownerMail(input: {
  name: string;
  email: string;
  phone: string;
  service: ServiceId;
  locale: Locale;
  message: string;
}): { subject: string; text: string; html: string } {
  const topic = topicFi[input.service];
  const given = firstName(input.name);
  const subject = `janisiekkinen.com · ${topic} · ${input.name}`;
  const text = [
    "Uusi viesti lomakkeelta",
    `Nimi: ${input.name}`,
    `Sähköposti: ${input.email}`,
    `Puhelin: ${input.phone || "-"}`,
    `Aihe: ${topic}`,
    `Kieli: ${input.locale.toUpperCase()}`,
    "",
    input.message,
  ].join("\n");

  const mailto = `mailto:${encodeURIComponent(input.email)}?subject=${encodeURIComponent(`Re: ${topic}`)}`;
  const html = shell(`${input.name} · ${topic}`, `${kicker("janisiekkinen.com")}
${headline("Uusi viesti")}
<p style="margin:12px 0 0;font-size:15px;color:${MUTED};">Yhteydenottolomake · ${escapeHtml(topic)}</p>
${hairline()}
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
${field("Nimi", input.name)}
${field("Sähköposti", input.email, `mailto:${input.email}`)}
${field("Puhelin", input.phone || "-")}
${field("Aihe", topic)}
${field("Kieli", input.locale.toUpperCase())}
</table>
<p style="margin:8px 0 10px;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:${BRASS};">Viesti</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr>
<td style="padding:18px 20px;background:${FELT};border-left:3px solid ${BRASS};font-size:16px;line-height:1.55;color:${INK};">${nl(input.message)}</td>
</tr>
</table>
<p style="margin:28px 0 0;">${button(mailto, `Vastaa ${given}`)}</p>
<p style="margin:16px 0 0;font-size:12px;color:${MUTED};">Reply-To on jo asetettu lähettäjän osoitteeseen.</p>
${footer()}`);

  return { subject, text, html };
}

function signoff(name: string): string {
  return `<p style="margin:28px 0 0;font-size:17px;line-height:1.6;color:${INK};">${escapeHtml(name)}</p>`;
}

export function replyMail(input: {
  name: string;
  locale: Locale;
}): { subject: string; text: string; html: string } {
  const given = firstName(input.name);

  if (input.locale === "en") {
    const body = "Thanks for getting in touch. I'll read this myself and get back to you as soon as I can.";
    const text = `Hey ${given},\n\n${body}\n\nJani\n${site.domain}`;
    const html = shell(body, `${kicker("Jani Siekkinen")}
${headline(`Hey, ${given}`)}
<p style="margin:22px 0 0;font-size:17px;line-height:1.6;color:${INK};">${escapeHtml(body)}</p>
${signoff("Jani")}
${footer()}`);
    return { subject: "Thanks for the message · Jani Siekkinen", text, html };
  }

  const body = "Viesti tuli perille. Luen sen itse ja palaan.";
  const text = `Hei ${given},\n\n${body}\n\nJani\n${site.domain}`;
  const html = shell(body, `${kicker("Jani Siekkinen")}
${headline(`Hei, ${given}`)}
<p style="margin:22px 0 0;font-size:17px;line-height:1.6;color:${INK};">${escapeHtml(body)}</p>
${signoff("Jani")}
${footer()}`);
  return { subject: "Kiitos viestistä · Jani Siekkinen", text, html };
}
