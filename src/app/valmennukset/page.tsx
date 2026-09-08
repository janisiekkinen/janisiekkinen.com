import { OfferingView } from "../../components/OfferingView";
import { SitePage } from "../../components/SitePage";
import { copy } from "../../i18n";
import { buildMetadata } from "../../lib/metadata";
import hands from "../../assets/images/hands-cue.jpg";

const locale = "fi" as const;
const t = copy(locale);

export const metadata = buildMetadata({ locale, page: "coaching" });

export default function Page() {
  return (
    <SitePage locale={locale} page="coaching" overlay>
      <OfferingView
        locale={locale}
        page="coaching"
        image={hands}
        alt={t.alts.hands}
        intro={t.coaching.intro}
        items={t.coaching.items}
        showLocation
        imagePosition="center 22%"
      />
    </SitePage>
  );
}
