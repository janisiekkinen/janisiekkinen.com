import { ContactView } from "../../components/ContactView";
import { SitePage } from "../../components/SitePage";
import { buildMetadata } from "../../lib/metadata";

export const metadata = buildMetadata({ locale: "fi", page: "contact" });

export default function Page() {
  return (
    <SitePage locale="fi" page="contact">
      <ContactView locale="fi" />
    </SitePage>
  );
}
