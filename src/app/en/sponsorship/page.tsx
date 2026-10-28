import { CurrentPartners } from "../../../components/CurrentPartners";
import { OfferingView } from "../../../components/OfferingView";
import { SitePage } from "../../../components/SitePage";
import { copy } from "../../../i18n";
import { buildMetadata } from "../../../lib/metadata";
import hands from "../../../assets/images/hands-cue.jpg";

const locale = "en" as const;
const t = copy(locale);

export const metadata = buildMetadata({ locale, page: "sponsor" });

export default function Page() {
  return (
    <SitePage locale={locale} page="sponsor" overlay>
      <OfferingView
        locale={locale}
        page="sponsor"
        image={hands}
        alt={t.alts.hands}
        intro={t.sponsorPage.intro}
        items={t.sponsorPage.items}
        imagePosition="center 46%"
      >
        <CurrentPartners label={t.sponsorPage.partnersLabel} />
      </OfferingView>
    </SitePage>
  );
}
