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
    <article className={cn("rounded-[1.35rem] px-5 py-4 shadow-sm", toneClass[tone])}>
      <h3 className="font-display text-[1.35rem] leading-snug tracking-tight sm:text-[1.45rem]">
        {title}
      </h3>
      <p className="mt-2 text-base leading-relaxed text-foreground/65 sm:text-[17px]">{body}</p>
    </article>
  );
}

export function LearningJourney() {
  return (
    <section id="ecosystem" data-pdf-chunk className="pdf-flow mx-auto max-w-6xl scroll-mt-24 px-5 py-14 sm:px-8">
      <div>
        <div>
          <SectionLabel>{learningJourney.kicker}</SectionLabel>
          <h2 className="font-display mt-3 max-w-4xl text-3xl tracking-tight sm:text-5xl">
            {learningJourney.title}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/65">
            {learningJourney.body}
          </p>
        </div>

        <div className="mt-10 space-y-8">
          {learningJourney.groups.slice(0, 2).map((group, index) => (
            <div key={group.title}>
              <h3 className="font-display text-xl tracking-tight sm:text-2xl">
                <span className="mr-2 text-[#2c7e69]">{index + 1}.</span>
                {group.title}
              </h3>
              <div className="li-journey-cards mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {group.cards.map((card) => (
                  <JourneyCard key={card.title} {...card} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 space-y-8">
        {learningJourney.groups.slice(2).map((group, index) => (
          <div key={group.title}>
            <h3 className="font-display text-xl tracking-tight sm:text-2xl">
              <span className="mr-2 text-[#2c7e69]">{index + 3}.</span>
              {group.title}
            </h3>
            <div className="li-journey-cards mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
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
