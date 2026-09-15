import type { Metadata } from "next";
import { headers } from "next/headers";
import { NotFoundView } from "../components/NotFoundView";
import { copy } from "../i18n";

async function localeFromRequest() {
  return (await headers()).get("x-locale") === "en" ? "en" : "fi";
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await localeFromRequest();
  const t = copy(locale).notFound;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    robots: { index: false, follow: true },
  };
}

export default async function NotFound() {
  const locale = await localeFromRequest();
  return <NotFoundView locale={locale} />;
}
