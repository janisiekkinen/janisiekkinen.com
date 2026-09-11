import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";
import type { Locale } from "../config/site";
import { copy, pageMeta } from "../i18n";
import type { PageId } from "../i18n/routes";
import { CtaStrip } from "./CtaStrip";
import { EditorialList } from "./EditorialList";
import { PageHead } from "./PageHead";

export function OfferingView({
  locale,
  page,
  image,
  alt,
  intro,
  items,
  showLocation = false,
  imagePosition,
  children,
}: {
  locale: Locale;
  page: PageId;
  image: StaticImageData;
  alt: string;
  intro: string;
  items: readonly { title: string; body: string }[];
  showLocation?: boolean;
  imagePosition?: string;
  children?: ReactNode;
}) {
  const t = copy(locale);
  const meta = pageMeta(locale, page);
  return (
    <>
      <PageHead kicker={t.quote} title={meta.h1} lead={intro} image={image} alt={alt} imagePosition={imagePosition} />
      {showLocation ? (
        <p className="px-5 pt-10 text-sm uppercase tracking-[0.18em] text-muted md:px-10 lg:px-16">{t.locationLine}</p>
      ) : null}
      <div className="py-4 md:py-8">
        <EditorialList items={items} />
      </div>
      {children}
      <CtaStrip locale={locale} />
    </>
  );
}
