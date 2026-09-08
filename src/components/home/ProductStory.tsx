import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { productShots } from "@/lib/site";

function Shot({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-[0_22px_50px_-28px_rgba(27,63,71,0.45)] ring-1 ring-foreground/8">
      <Image src={src} alt={alt} width={width} height={height} className="h-auto w-full" />
    </div>
  );
}

export function ProductStory() {
  return (
    <section id="interactive" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-12 sm:px-8">
      <SectionLabel>{productShots.interactive.kicker}</SectionLabel>
      <h2 className="font-display mt-3 max-w-3xl text-3xl tracking-tight sm:text-4xl">
        {productShots.interactive.title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70">
        {productShots.interactive.body}
      </p>
      <div className="mt-8 grid gap-4">
        {productShots.interactive.shots.map((shot) => (
          <Shot
            key={shot.src}
            src={shot.src}
            alt={shot.alt}
            width={shot.width}
            height={shot.height}
          />
        ))}
      </div>
    </section>
  );
}
