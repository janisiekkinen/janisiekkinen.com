import { PageHead } from "../../../components/PageHead";
import { SitePage } from "../../../components/SitePage";
import { copy, pageMeta } from "../../../i18n";
import { buildMetadata } from "../../../lib/metadata";

const locale = "en" as const;

export const metadata = buildMetadata({ locale, page: "privacy" });

export default function Page() {
  const t = copy(locale);
  const meta = pageMeta(locale, "privacy");
  return (
    <SitePage locale={locale} page="privacy">
      <PageHead title={meta.h1} />
      <div className="max-w-2xl space-y-5 px-5 py-14 text-lg leading-relaxed md:px-10 lg:px-16">
        {t.privacyBody.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </SitePage>
  );
}
