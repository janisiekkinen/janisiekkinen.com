import { ContactView } from "../../../components/ContactView";
import { SitePage } from "../../../components/SitePage";
import { buildMetadata } from "../../../lib/metadata";

export const metadata = buildMetadata({ locale: "en", page: "contact" });

export default function Page() {
  return (
    <SitePage locale="en" page="contact">
      <ContactView locale="en" />
    </SitePage>
  );
}
