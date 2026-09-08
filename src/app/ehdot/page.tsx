import { PageHead } from "../../components/PageHead";
import { SitePage } from "../../components/SitePage";
import { copy, pageMeta } from "../../i18n";
import { buildMetadata } from "../../lib/metadata";

const locale = "fi" as const;

export const metadata = buildMetadata({ locale, page: "terms" });

export default function Page() {
  const t = copy(locale);
  const meta = pageMeta(locale, "terms");
  return (
    <SitePage locale={locale} page="terms">
      <PageHead title={meta.h1} />
      <div className="max-w-2xl space-y-5 px-5 py-14 text-lg leading-relaxed md:px-10 lg:px-16">
        {t.termsBody.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </SitePage>
  );
}
