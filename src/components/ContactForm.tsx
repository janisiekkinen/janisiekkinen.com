"use client";

import { useState } from "react";
import { site, type Locale, type ServiceId } from "../config/site";
import { copy } from "../i18n";
import { trackEvent } from "../lib/analytics";
import { cn } from "../lib/cn";

const topics = ["private", "events", "repairs", "jersey", "sponsor", "other"] as const satisfies readonly ServiceId[];

export function ContactForm({ locale }: { locale: Locale }) {
  const t = copy(locale);
  const [started] = useState(() => Date.now());
  const [topic, setTopic] = useState<ServiceId | "">("");
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const topicLabel: Record<(typeof topics)[number], string> = {
    private: t.nav.coaching,
    events: t.nav.events,
    repairs: t.nav.repairs,
    jersey: t.nav.gameon,
    sponsor: t.nav.sponsor,
    other: t.services.other,
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    setSending(true);
    setStatus("");
    const data = Object.fromEntries(new FormData(form).entries());
    const tokenEl = form.querySelector('[name="cf-turnstile-response"]');
    if (tokenEl instanceof HTMLInputElement) {
      data["cf-turnstile-response"] = tokenEl.value;
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok?: boolean };
      setStatus(json.ok ? t.form.ok : t.form.err);
      if (json.ok) {
        trackEvent("generate_lead", {
          lead_source: "contact_form",
          service: topic || "other",
          locale,
        });
        form.reset();
        setTopic("");
      }
    } catch {
      setStatus(t.form.err);
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="max-w-xl space-y-6" noValidate onSubmit={onSubmit}>
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="t" value={String(started)} />
      <input type="hidden" name="service" value={topic || "other"} />
      <div className="hp" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" hidden />
      </div>

      <label className="block">
        <span className="text-sm text-muted">{t.form.name}</span>
        <input required name="name" autoComplete="name" minLength={2} maxLength={80} className="input-line" />
      </label>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm text-muted">{t.form.email}</span>
          <input required type="email" name="email" autoComplete="email" maxLength={120} className="input-line" />
        </label>
        <label className="block">
          <span className="text-sm text-muted">
            {t.form.phone} <span className="text-ink/40">· {t.form.phoneHint}</span>
          </span>
          <input name="phone" type="tel" autoComplete="tel" className="input-line" />
        </label>
      </div>

      <fieldset>
        <legend className="text-sm text-muted">{t.form.topic}</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {topics.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => {
                setTopic(id);
                trackEvent("select_service", { service: id, locale });
              }}
              className={cn(
                "min-h-11 px-3 text-[0.72rem] font-semibold uppercase tracking-[0.12em]",
                topic === id ? "bg-ink text-rail" : "border border-ink/20 text-ink/80 hover:border-ink/45",
              )}
            >
              {topicLabel[id]}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="block">
        <span className="text-sm text-muted">{t.form.message}</span>
        <textarea
          required
          name="message"
          minLength={8}
          maxLength={4000}
          rows={5}
          placeholder={t.form.messageHint}
          className="input-line mt-1 min-h-28 border border-ink/15 px-3 placeholder:text-ink/35"
        />
      </label>

      {site.turnstileSiteKey ? <div className="cf-turnstile" data-sitekey={site.turnstileSiteKey} data-theme="dark" /> : null}
      <p className={status ? "text-sm" : "hidden text-sm"} role="status">
        {status}
      </p>
      <button type="submit" className="btn" disabled={sending}>
        {sending ? t.form.sending : t.form.submit}
      </button>
    </form>
  );
}
