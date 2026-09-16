import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { productShots } from "@/lib/site";

export function ProductStory() {
  const { kicker, title, body, shot } = productShots.interactive;

  return (
    <section id="interactive" data-pdf-chunk className="pdf-block mx-auto max-w-6xl scroll-mt-24 px-5 py-12 sm:px-8">
      <SectionLabel>{kicker}</SectionLabel>
      <h2 className="font-display mt-3 max-w-3xl text-3xl tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70">{body}</p>
      <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-[0_22px_50px_-28px_rgba(27,63,71,0.45)] ring-1 ring-foreground/8">
        <Image
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          unoptimized
          className="pdf-shot h-auto w-full"
        />
      </div>
    </section>
  );
}
