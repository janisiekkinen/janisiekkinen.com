import { JaniView } from "../../../components/JaniView";
import { SitePage } from "../../../components/SitePage";
import { buildMetadata } from "../../../lib/metadata";

export const metadata = buildMetadata({ locale: "en", page: "jani" });

export default function Page() {
  return (
    <SitePage locale="en" page="jani" overlay>
      <JaniView locale="en" />
    </SitePage>
  );
}
