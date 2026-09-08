import { PageHead } from "../../components/PageHead";
import { SitePage } from "../../components/SitePage";
import { copy, pageMeta } from "../../i18n";
import { buildMetadata } from "../../lib/metadata";
import action from "../../assets/images/break-shot.jpg";

const locale = "fi" as const;

export const metadata = buildMetadata({ locale, page: "results" });

export default function Page() {
  const t = copy(locale);
  const meta = pageMeta(locale, "results");
  return (
    <SitePage locale={locale} page="results" overlay>
      <PageHead title={meta.h1} lead={t.resultsIntro} image={action} alt={t.alts.break} imagePosition="center 30%" />
      <ol className="px-5 pb-20 md:px-10 lg:px-16">
        {t.results.map((row) => (
          <li key={`${row.year}-${row.text}`} className="grid max-w-3xl grid-cols-[7.5rem_1fr] gap-6 border-t border-ink/10 py-7 last:border-b">
            <span className="font-display text-xl text-brass">{row.year}</span>
            <span className="text-lg">{row.text}</span>
          </li>
        ))}
      </ol>
    </SitePage>
  );
}
