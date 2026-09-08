import { site } from "../../../config/site";

const SERVICES = new Set([
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
]);

const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 8;
const MAX_KEYS = 8_000;
const MIN_FILL_MS = 4_000;
const MAX_FILL_MS = 2 * 60 * 60 * 1000;

function json(body: object, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function escapeText(value: string): string {
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

function pruneHits(now: number) {
  if (hits.size < MAX_KEYS) return;
  for (const [key, times] of hits) {
    const kept = times.filter((t) => now - t < WINDOW_MS);
    if (kept.length === 0) hits.delete(key);
    else hits.set(key, kept);
  }
}

function limited(key: string): boolean {
  const now = Date.now();
  pruneHits(now);
  const prev = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (prev.length >= MAX_HITS) {
    hits.set(key, prev);
    return true;
  }
  prev.push(now);
  hits.set(key, prev);
  return false;
}

function str(v: unknown, max: number): string {
  if (typeof v !== "string") return "";
  return v.replace(/[\u0000-\u001F\u007F]/g, " ").trim().slice(0, max);
}

function clientIp(request: Request): string {
  const cf = request.headers.get("cf-connecting-ip")?.trim();
  if (cf) return cf.slice(0, 45);
  const real = request.headers.get("x-real-ip")?.trim();
  if (real) return real.slice(0, 45);
  const forwarded = request.headers.get("x-forwarded-for");
  const first = forwarded?.split(",")[0]?.trim();
  if (first) return first.slice(0, 45);
  return "unknown";
}

function allowedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (!origin || !host) return process.env.NODE_ENV !== "production";
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!allowedOrigin(request)) return json({ ok: false }, 403);

  const ip = clientIp(request);
  if (limited(`ip:${ip}`)) return json({ ok: false }, 429);

  const raw = await request.text();
  if (raw.length > 20_000) return json({ ok: false }, 413);

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw) as Record<string, unknown>;
  } catch {
    return json({ ok: false }, 400);
  }

  if (str(body.website, 200)) return json({ ok: true });

  const started = Number(body.t);
  const elapsed = Date.now() - started;
  if (!Number.isFinite(started) || elapsed < MIN_FILL_MS || elapsed > MAX_FILL_MS) {
    return json({ ok: false }, 400);
  }

  const name = str(body.name, 80);
  const email = str(body.email, 120);
  const phone = str(body.phone, 40);
  const service = str(body.service, 40) || "other";
  const message = str(body.message, 4000);
  const locale = str(body.locale, 2) === "en" ? "en" : "fi";
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (name.length < 2 || !emailOk || message.length < 8 || !SERVICES.has(service)) {
    return json({ ok: false }, 400);
  }

  if (limited(`em:${email.toLowerCase()}`)) return json({ ok: false }, 429);

  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (site.turnstileSiteKey || secret) {
    if (!secret) return json({ ok: false }, 503);
    const token = str(body["cf-turnstile-response"], 4000);
    if (!token) return json({ ok: false }, 400);
    const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
    });
    const outcome = (await verify.json()) as { success?: boolean };
    if (!outcome.success) return json({ ok: false }, 400);
  }

  const apiKey = process.env.SMTP2GO_API_KEY;
  const mailFrom = process.env.MAIL_FROM;
  const mailTo = process.env.MAIL_TO;
  if (!apiKey || !mailFrom || !mailTo) {
    return json({ ok: false }, 503);
  }

  const fields = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "-"],
    ["Topic", service],
    ["Locale", locale],
    ["Message", message],
  ];
  const textBody = fields.map(([k, v]) => `${k}: ${v}`).join("\n");
  const htmlBody = `<pre>${escapeText(textBody)}</pre>`;

  const owner = await sendMail(apiKey, {
    sender: mailFrom,
    to: [mailTo],
    subject: `[janisiekkinen.com] ${service} · ${name}`,
    text_body: textBody,
    html_body: htmlBody,
    custom_headers: [{ header: "Reply-To", value: email }],
  });
  if (!owner) return json({ ok: false }, 502);

  const reply =
    locale === "en"
      ? {
          subject: "Message received · Jani Siekkinen",
          text: "I got your message and will reply. No need to resend personal details.",
        }
      : {
          subject: "Viesti perillä · Jani Siekkinen",
          text: "Viesti tuli perille. Palaan asiaan. Älä lähetä lisää henkilötietoja turhaan.",
        };

  await sendMail(apiKey, {
    sender: mailFrom,
    to: [email],
    subject: reply.subject,
    text_body: reply.text,
    html_body: `<p>${escapeText(reply.text)}</p>`,
  });

  return json({ ok: true });
}

async function sendMail(
  apiKey: string,
  payload: {
    sender: string;
    to: string[];
    subject: string;
    text_body: string;
    html_body: string;
    custom_headers?: { header: string; value: string }[];
  },
): Promise<boolean> {
  const res = await fetch("https://eu-api.smtp2go.com/v3/email/send", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-Smtp2go-Api-Key": apiKey,
    },
    body: JSON.stringify(payload),
  });
  return res.ok;
}
