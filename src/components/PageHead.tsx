import Image, { type StaticImageData } from "next/image";
import { cn } from "../lib/cn";

export function PageHead({
  kicker,
  title,
  lead,
  image,
  alt = "",
  imagePosition = "center 35%",
  layout = "cover",
}: {
  kicker?: string;
  title: string;
  lead?: string;
  image?: StaticImageData;
  alt?: string;
  imagePosition?: string;
  layout?: "cover" | "portrait";
}) {
  if (image && layout === "portrait") {
    return (
      <header className="relative overflow-hidden bg-rail md:grid md:min-h-[78svh] md:grid-cols-12">
        <div className="mast-frame relative aspect-[3/4] md:col-span-6 md:aspect-auto md:min-h-[78svh] lg:col-span-7">
          <Image
            src={image}
            alt={alt}
            fill
            priority
            sizes="(min-width: 768px) 58vw, 100vw"
            className="photo-mast object-cover"
            style={{ objectPosition: imagePosition }}
          />
        </div>
        <div className="relative z-10 flex flex-col justify-end px-5 py-10 md:col-span-6 md:px-10 md:py-16 lg:col-span-5 lg:px-16">
          {kicker ? <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brass">{kicker}</p> : null}
          <h1 className="display-wrap font-display mt-3 max-w-5xl text-[clamp(2.7rem,8vw,5.5rem)] font-bold uppercase text-balance">
            {title}
          </h1>
          {lead ? <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/88 md:text-lg">{lead}</p> : null}
        </div>
      </header>
    );
  }

  return (
    <header className={cn("relative overflow-hidden", image ? "min-h-[78svh] bg-rail" : "border-b border-ink/10")}>
      {image ? (
        <>
          <div className="mast-frame absolute inset-0">
            <Image
              src={image}
              alt={alt}
              fill
              priority
              sizes="100vw"
              className="photo-mast object-cover"
              style={{ objectPosition: imagePosition }}
            />
          </div>
          <div className="mast-veil absolute inset-0" aria-hidden="true" />
        </>
      ) : null}
      <div
        className={cn(
          "relative z-10 px-5 md:px-10 lg:px-16",
          image ? "flex min-h-[78svh] flex-col justify-end pb-12 pt-32 md:pb-16" : "pb-12 pt-12 md:pb-16 md:pt-16",
        )}
      >
        {kicker ? <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brass">{kicker}</p> : null}
        <h1 className="display-wrap font-display mt-3 max-w-5xl text-[clamp(2.7rem,9vw,7rem)] font-bold uppercase text-balance">
          {title}
        </h1>
        {lead ? <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/88 md:text-lg">{lead}</p> : null}
      </div>
    </header>
  );
}
