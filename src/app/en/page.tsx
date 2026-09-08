import { HomeView } from "../../components/HomeView";
import { SitePage } from "../../components/SitePage";
import { buildMetadata } from "../../lib/metadata";

export const metadata = buildMetadata({ locale: "en", page: "home" });

export default function Page() {
  return (
    <SitePage locale="en" page="home">
      <HomeView locale="en" />
    </SitePage>
  );
}
