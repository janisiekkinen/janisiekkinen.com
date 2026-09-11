import { notFound } from "next/navigation";
import { PageHead } from "../../../components/PageHead";
import { SitePage } from "../../../components/SitePage";
import { articleJsonLd } from "../../../lib/schema";
import { buildMetadata } from "../../../lib/metadata";
import { tipBySlug, tipsFor } from "../../../lib/tips";

export function generateStaticParams() {
  return tipsFor("fi").map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = tipBySlug("fi", slug);
  if (!post) return {};
  return buildMetadata({
    locale: "fi",
    page: "tips",
    canonicalPath: `/vinkit/${post.slug}/`,
    title: `${post.title} · Jani Siekkinen`,
    description: post.description,
    ogType: "article",
    alternateFi: `/vinkit/${post.slug}/`,
    alternateEn: `/en/tips/${post.counterpart}/`,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = tipBySlug("fi", slug);
  if (!post) notFound();
  return (
    <SitePage
      locale="fi"
      page="tips"
      langHref={`/en/tips/${post.counterpart}/`}
      jsonLdExtra={[
        articleJsonLd({
          locale: "fi",
          title: post.title,
          description: post.description,
          path: `/vinkit/${post.slug}/`,
          datePublished: post.published,
        }),
      ]}
    >
      <PageHead title={post.title} />
      <article className="max-w-2xl px-5 py-14 md:px-10 lg:px-16">
        <div className="space-y-5 text-lg leading-relaxed">
          {post.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </article>
    </SitePage>
  );
}
