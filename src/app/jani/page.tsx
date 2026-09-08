import { JaniView } from "../../components/JaniView";
import { SitePage } from "../../components/SitePage";
import { buildMetadata } from "../../lib/metadata";

export const metadata = buildMetadata({ locale: "fi", page: "jani" });

export default function Page() {
  return (
    <SitePage locale="fi" page="jani" overlay>
      <JaniView locale="fi" />
    </SitePage>
  );
}
