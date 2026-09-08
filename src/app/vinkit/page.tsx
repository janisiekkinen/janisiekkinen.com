import { PageHead } from "../../components/PageHead";
import { SitePage } from "../../components/SitePage";
import { copy, pageMeta } from "../../i18n";
import { buildMetadata } from "../../lib/metadata";
import { tipsFor } from "../../lib/tips";

const locale = "fi" as const;

export const metadata = buildMetadata({ locale, page: "tips" });

export default function Page() {
  const t = copy(locale);
  const meta = pageMeta(locale, "tips");
  const posts = tipsFor(locale);
  return (
    <SitePage locale={locale} page="tips">
      <PageHead title={meta.h1} lead={t.tipsIndex} />
      <ul className="px-5 pb-20 md:px-10 lg:px-16">
        {posts.map((post) => (
          <li key={post.slug} className="max-w-2xl border-t border-ink/10 py-8">
            <a className="group block" href={`/vinkit/${post.slug}/`}>
              <h2 className="font-display text-3xl uppercase tracking-tight group-hover:text-brass">{post.title}</h2>
              <p className="mt-2 text-muted">{post.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </SitePage>
  );
}
