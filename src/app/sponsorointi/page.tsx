import { OfferingView } from "../../components/OfferingView";
import { SitePage } from "../../components/SitePage";
import { copy } from "../../i18n";
import { buildMetadata } from "../../lib/metadata";
import tour from "../../assets/images/tour.jpg";

const locale = "fi" as const;
const t = copy(locale);

export const metadata = buildMetadata({ locale, page: "sponsor" });

export default function Page() {
  return (
    <SitePage locale={locale} page="sponsor" overlay>
      <OfferingView
        locale={locale}
        page="sponsor"
        image={tour}
        alt={t.alts.tour}
        intro={t.sponsorPage.intro}
        items={t.sponsorPage.items}
        imagePosition="center 52%"
      />
    </SitePage>
  );
}
