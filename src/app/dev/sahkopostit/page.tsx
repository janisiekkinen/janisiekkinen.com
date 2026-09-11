import { notFound } from "next/navigation";
import { ownerMail, replyMail } from "../../../lib/contact-mail";

function bodyHtml(full: string): string {
  const match = full.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  return match?.[1] ?? full;
}

const sample = {
  name: "Anna Virtanen",
  email: "anna@example.com",
  phone: "+358 40 123 4567",
  service: "private" as const,
  message:
    "Haluaisin yksityistunnin Helsingissä.\nPelannut noin vuoden. Asento ja valkoinen vuotaa.\nVapaa viikonloppuisin.",
};

export default function MailPreviewPage() {
  if (process.env.NODE_ENV === "production") notFound();

  const owner = ownerMail({ ...sample, locale: "fi" });
  const replyFi = replyMail({ name: sample.name, locale: "fi" });
  const replyEn = replyMail({ name: sample.name, locale: "en" });

  const cards = [
    { title: "Janille", subject: owner.subject, html: owner.html },
    { title: "Asiakkaalle (FI)", subject: replyFi.subject, html: replyFi.html },
    { title: "Asiakkaalle (EN)", subject: replyEn.subject, html: replyEn.html },
  ];

  return (
    <main className="min-h-dvh bg-[#d8d4cc] px-4 py-10 text-[#121614]">
      <div className="mx-auto max-w-[40rem]">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#6b6458]">Paikallinen esikatselu</p>
        <h1 className="mt-2 font-display text-4xl font-bold uppercase">Sähköpostit</h1>
        <p className="mt-3 text-sm text-[#5c564c]">Esimerkkiviesti Annalta. Tämä sivu on pois päältä tuotannossa.</p>
        <div className="mt-10 space-y-12">
          {cards.map((card) => (
            <section key={card.title}>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[#6b6458]">{card.title}</p>
              <p className="mt-1 mb-4 text-sm text-[#5c564c]">Aihe: {card.subject}</p>
              <div dangerouslySetInnerHTML={{ __html: bodyHtml(card.html) }} />
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
