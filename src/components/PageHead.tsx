import Image, { type StaticImageData } from "next/image";
import { cn } from "../lib/cn";

export function PageHead({
  kicker,
  title,
  lead,
  image,
  alt = "",
  imagePosition = "center 35%",
}: {
  kicker?: string;
  title: string;
  lead?: string;
  image?: StaticImageData;
  alt?: string;
  imagePosition?: string;
}) {
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
