import { OfferingView } from "../../../components/OfferingView";
import { SitePage } from "../../../components/SitePage";
import { copy } from "../../../i18n";
import { buildMetadata } from "../../../lib/metadata";
import table from "../../../assets/images/hero-table.jpg";

const locale = "en" as const;
const t = copy(locale);

export const metadata = buildMetadata({ locale, page: "repairs" });

export default function Page() {
  return (
    <SitePage locale={locale} page="repairs" overlay>
      <OfferingView locale={locale} page="repairs" image={table} alt={t.alts.cue} intro={t.repairsPage.intro} items={t.repairsPage.items} imagePosition="center 72%" />
    </SitePage>
  );
}
