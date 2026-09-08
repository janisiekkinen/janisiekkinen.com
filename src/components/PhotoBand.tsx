import Image, { type StaticImageData } from "next/image";
import { cn } from "../lib/cn";

export function PhotoBand({ image, alt, ratio = "wide" }: { image: StaticImageData; alt: string; ratio?: "wide" | "portrait" }) {
  return (
    <figure className="relative overflow-hidden bg-rail" data-placeholder="photo">
      <Image
        src={image}
        alt={alt}
        sizes="100vw"
        className={cn(
          "photo band-photo h-full w-full object-cover",
          ratio === "wide" ? "max-h-[70vh] min-h-[42vh] object-center" : "mx-auto max-h-[80vh] w-full max-w-3xl object-cover",
        )}
      />
    </figure>
  );
}
