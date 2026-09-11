import { Faq } from "../../../components/Faq";
import { OfferingView } from "../../../components/OfferingView";
import { SitePage } from "../../../components/SitePage";
import { copy } from "../../../i18n";
import { buildMetadata } from "../../../lib/metadata";
import action from "../../../assets/images/break-shot.jpg";

const locale = "en" as const;
const t = copy(locale);

export const metadata = buildMetadata({ locale, page: "coaching" });

export default function Page() {
  return (
    <SitePage locale={locale} page="coaching" overlay>
      <OfferingView
        locale={locale}
        page="coaching"
        image={action}
        alt={t.alts.break}
        intro={t.coaching.intro}
        items={t.coaching.items}
        showLocation
        imagePosition="32% 42%"
      >
        <Faq
          locale={locale}
          items={t.coaching.faq}
          label={t.coaching.faqLabel}
          title={t.coaching.faqTitle}
          intro={t.coaching.faqIntro}
        />
      </OfferingView>
    </SitePage>
  );
}
