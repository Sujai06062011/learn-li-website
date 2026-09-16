import { SectionLabel } from "@/components/ui/SectionLabel";
import { toneClass, whySchools } from "@/lib/site";
import { cn } from "@/lib/utils";

export function WhySchools() {
  return (
    <section id="why" data-pdf-chunk className="pdf-block mx-auto max-w-6xl scroll-mt-24 px-5 py-14 sm:px-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-end">
        <div>
          <SectionLabel>{whySchools.kicker}</SectionLabel>
          <h2 className="font-display mt-3 max-w-xl text-3xl tracking-tight sm:text-5xl">
            {whySchools.title}
          </h2>
        </div>
        <p className="text-base leading-relaxed text-foreground/65">{whySchools.body}</p>
      </div>
      <div className="li-why-pillars mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {whySchools.pillars.map((pillar) => (
          <article
            key={pillar.n}
            className={cn(
              "flex min-h-[17rem] flex-col rounded-[1.6rem] p-6 shadow-sm",
              toneClass[pillar.tone]
            )}
          >
            <p className="font-display text-4xl text-foreground/15">{pillar.n}</p>
            <h3 className="font-display mt-6 text-2xl tracking-tight">{pillar.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/65">{pillar.body}</p>
            <p className="mt-5 text-[11px] font-semibold tracking-[0.12em] text-[#2c7e69] uppercase">
              {pillar.mini}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
