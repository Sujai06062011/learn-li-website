import { SectionLabel } from "@/components/ui/SectionLabel";
import { learningJourney, toneClass, type Tone } from "@/lib/site";
import { cn } from "@/lib/utils";

function JourneyCard({
  tag,
  title,
  body,
  tone,
}: {
  tag: string;
  title: string;
  body: string;
  tone: Tone;
}) {
  return (
    <article className={cn("rounded-[1.5rem] p-6 shadow-sm", toneClass[tone])}>
      <p className="text-[11px] font-semibold tracking-[0.14em] text-[#2c7e69] uppercase">
        {tag}
      </p>
      <h3 className="font-display mt-2 text-2xl tracking-tight">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-foreground/65">{body}</p>
    </article>
  );
}

export function LearningJourney() {
  return (
    <section id="ecosystem" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-14 sm:px-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-end">
        <div>
          <SectionLabel>{learningJourney.kicker}</SectionLabel>
          <h2 className="font-display mt-3 max-w-2xl text-3xl tracking-tight sm:text-5xl">
            {learningJourney.title}
          </h2>
        </div>
        <p className="text-base leading-relaxed text-foreground/65">{learningJourney.body}</p>
      </div>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {learningJourney.steps.map((step) => (
          <article
            key={step.title}
            className="min-h-[11.5rem] rounded-[1.4rem] bg-white p-5 shadow-sm ring-1 ring-foreground/8"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-li-mint text-lg">
              {step.icon}
            </span>
            <h3 className="font-display mt-6 text-xl tracking-tight">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/60">{step.body}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {learningJourney.features.map((feature) => (
          <JourneyCard key={feature.title} {...feature} />
        ))}
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {learningJourney.chapterCards.map((card) => (
          <JourneyCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}
