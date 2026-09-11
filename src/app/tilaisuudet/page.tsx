import { Faq } from "../../components/Faq";
import { OfferingView } from "../../components/OfferingView";
import { SitePage } from "../../components/SitePage";
import { copy } from "../../i18n";
import { buildMetadata } from "../../lib/metadata";
import showShot from "../../assets/images/show-shot.jpg";

const locale = "fi" as const;
const t = copy(locale);

export const metadata = buildMetadata({ locale, page: "events" });

export default function Page() {
  return (
    <SitePage locale={locale} page="events" overlay>
      <OfferingView
        locale={locale}
        page="events"
        image={showShot}
        alt={t.alts.show}
        intro={t.eventsPage.intro}
        items={t.eventsPage.items}
        showLocation
        imagePosition="32% 38%"
      >
        <Faq
          locale={locale}
          items={t.eventsPage.faq}
          label={t.eventsPage.faqLabel}
          title={t.eventsPage.faqTitle}
          intro={t.eventsPage.faqIntro}
        />
      </OfferingView>
    </SitePage>
  );
}
