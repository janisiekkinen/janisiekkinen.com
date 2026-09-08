import { HomeView } from "../components/HomeView";
import { SitePage } from "../components/SitePage";
import { buildMetadata } from "../lib/metadata";

export const metadata = buildMetadata({ locale: "fi", page: "home" });

export default function Page() {
  return (
    <SitePage locale="fi" page="home">
      <HomeView locale="fi" />
    </SitePage>
  );
}
