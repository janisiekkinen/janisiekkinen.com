import { PageHead } from "../../components/PageHead";
import { SitePage } from "../../components/SitePage";
import { pageMeta, privacyParagraphs } from "../../i18n";
import { buildMetadata } from "../../lib/metadata";

const locale = "fi" as const;

export const metadata = buildMetadata({ locale, page: "privacy" });

export default function Page() {
  const meta = pageMeta(locale, "privacy");
  return (
    <SitePage locale={locale} page="privacy">
      <PageHead title={meta.h1} />
      <div className="max-w-2xl space-y-5 px-5 py-14 text-lg leading-relaxed md:px-10 lg:px-16">
        {privacyParagraphs(locale).map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </SitePage>
  );
}
