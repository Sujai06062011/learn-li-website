import { SectionLabel } from "@/components/ui/SectionLabel";
import { learningJourney, toneClass, type Tone } from "@/lib/site";
import { cn } from "@/lib/utils";

function JourneyCard({
  title,
  body,
  tone,
}: {
  title: string;
  body: string;
  tone: Tone;
}) {
  return (
    <article className={cn("rounded-[1.5rem] p-6 shadow-sm", toneClass[tone])}>
      <h3 className="font-display text-2xl tracking-tight">{title}</h3>
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

      <div className="mt-10 space-y-12">
        {learningJourney.groups.map((group, index) => (
          <div key={group.title}>
            <h3 className="font-display text-2xl tracking-tight sm:text-3xl">
              <span className="mr-2 text-[#2c7e69]">{index + 1}.</span>
              {group.title}
            </h3>
            <div
              className={cn(
                "mt-5 grid gap-4",
                group.cards.length === 1
                  ? "max-w-xl"
                  : group.cards.length === 2
                    ? "sm:grid-cols-2"
                    : group.cards.length === 4
                      ? "sm:grid-cols-2"
                      : "sm:grid-cols-2 lg:grid-cols-3"
              )}
            >
              {group.cards.map((card) => (
                <JourneyCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
