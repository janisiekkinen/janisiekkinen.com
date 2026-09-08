import { OfferingView } from "../../components/OfferingView";
import { SitePage } from "../../components/SitePage";
import { copy } from "../../i18n";
import { buildMetadata } from "../../lib/metadata";
import jersey from "../../assets/images/jersey.jpg";

const locale = "fi" as const;
const t = copy(locale);

export const metadata = buildMetadata({ locale, page: "gameon" });

export default function Page() {
  return (
    <SitePage locale={locale} page="gameon" overlay>
      <OfferingView locale={locale} page="gameon" image={jersey} alt={t.alts.jersey} intro={t.gameonPage.intro} items={t.gameonPage.items} imagePosition="center 32%" />
    </SitePage>
  );
}
