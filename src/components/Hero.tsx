import Image, { type StaticImageData } from "next/image";
import type { Locale } from "../config/site";
import { copy } from "../i18n";
import { pathFor } from "../i18n/routes";

export function Hero({ locale, image }: { locale: Locale; image: StaticImageData }) {
  const t = copy(locale);
  return (
    <section className="relative overflow-hidden bg-rail md:h-[100svh]">
      <div className="relative aspect-[5/4] overflow-hidden md:absolute md:inset-0 md:aspect-auto md:h-full">
        <Image
          src={image}
          alt={t.hero.alt}
          fill
          priority
          sizes="100vw"
          className="hero-photo object-cover object-[22%_48%] md:object-[16%_58%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate via-slate/25 to-rail/35 md:hidden" aria-hidden="true" />
        <div className="hero-veil absolute inset-0 hidden md:block" aria-hidden="true" />
      </div>
      <div className="relative z-10 px-5 pb-8 pt-5 md:absolute md:inset-0 md:flex md:flex-col md:items-end md:justify-start md:px-10 md:pb-10 md:pt-28 md:text-right lg:px-16 lg:pt-32">
        <div className="hero-copy min-w-0 w-full md:w-fit md:max-w-full md:bg-rail/85 md:px-8 md:py-7 md:shadow-[0_0_80px_56px_rgb(12_14_13_/_0.82)]">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brass">{t.hero.kicker}</p>
          <h1 className="mt-3 font-display font-bold uppercase leading-[0.82] tracking-tight md:mt-4 md:leading-[0.78]">
            <span className="block whitespace-nowrap text-[clamp(3.25rem,12vw,5.5rem)] md:text-[min(6.25rem,calc((100vw-8rem)/9.4))]">
              {t.hero.first}
            </span>
            <span className="block whitespace-nowrap text-[clamp(3.25rem,12vw,5.5rem)] md:text-[min(6.25rem,calc((100vw-8rem)/9.4))]">
              {t.hero.last}
            </span>
          </h1>
          <div className="mt-6 max-w-md md:ml-auto md:mt-8">
            <p className="text-sm text-ink">{t.hero.proof}</p>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/95 md:mt-3 md:text-lg">{t.hero.lead}</p>
            <a href={pathFor("contact", locale)} className="btn mt-6">
              {t.hero.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
