import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { scoringPartner } from "@/lib/site";

function ScoringShot({
  label,
  caption,
  src,
  alt,
  width,
  height,
}: {
  label: string;
  caption: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <article>
      <h3 className="font-display text-2xl tracking-tight sm:text-3xl">{label}</h3>
      <p className="mt-1 text-sm leading-relaxed text-cream/70">{caption}</p>
      <div className="mt-4 overflow-hidden rounded-2xl bg-white shadow-[0_18px_40px_-28px_rgba(0,0,0,0.45)]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          unoptimized
          className="h-auto w-full"
        />
      </div>
    </article>
  );
}

export function ScoringPartner() {
  return (
    <section id="scoring" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-12 sm:px-8">
      <div className="overflow-hidden rounded-[2rem] bg-foreground p-6 text-cream shadow-[0_22px_50px_-28px_rgba(27,63,71,0.55)] sm:p-8 lg:p-10">
        <div className="max-w-3xl">
          <SectionLabel className="text-[#9fd4c6]">{scoringPartner.kicker}</SectionLabel>
          <h2 className="font-display mt-3 text-3xl tracking-tight sm:text-5xl">
            {scoringPartner.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-cream/75 sm:text-base">
            {scoringPartner.body}
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-start">
          <ScoringShot {...scoringPartner.science} />
          <ScoringShot {...scoringPartner.maths} />
        </div>

        <p className="mt-6 text-sm text-cream/75">
          <span className="mr-1.5 text-li-green">✓</span>
          {scoringPartner.note}
        </p>
      </div>
    </section>
  );
}
