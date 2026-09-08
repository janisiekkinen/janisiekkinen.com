import type { Locale } from "../config/site";
import { copy } from "../i18n";
import { pathFor } from "../i18n/routes";
import { Faq } from "./Faq";
import { Hero } from "./Hero";
import { PhotoBand } from "./PhotoBand";
import { Pitch } from "./Pitch";
import { ServiceLead } from "./ServiceLead";
import { StatsBar } from "./StatsBar";
import hero from "../assets/images/hero-wide.jpg";
import breakShot from "../assets/images/break-shot.jpg";

export function HomeView({ locale }: { locale: Locale }) {
  const t = copy(locale);
  return (
    <>
      <Hero locale={locale} image={hero} />
      <StatsBar items={t.stats} />
      <Pitch locale={locale} />
      <div className="px-5 md:px-10 lg:px-16">
        <p className="pt-10 text-[0.7rem] uppercase tracking-[0.28em] text-brass md:pt-16">{t.workLabel}</p>
        <ServiceLead index="01" href={pathFor("coaching", locale)} title={t.leads.coaching.title} body={t.leads.coaching.body} />
        <ServiceLead index="02" href={pathFor("events", locale)} title={t.leads.events.title} body={t.leads.events.body} />
        <ServiceLead index="03" href={pathFor("repairs", locale)} title={t.leads.repairs.title} body={t.leads.repairs.body} />
        <ServiceLead index="04" href={pathFor("gameon", locale)} title={t.leads.gameon.title} body={t.leads.gameon.body} />
        <ServiceLead index="05" href={pathFor("sponsor", locale)} title={t.leads.sponsor.title} body={t.leads.sponsor.body} />
      </div>
      <PhotoBand image={breakShot} alt={t.alts.break} />
      <Faq locale={locale} items={t.faq} label={t.faqLabel} title={t.faqTitle} intro={t.faqIntro} />
    </>
  );
}
