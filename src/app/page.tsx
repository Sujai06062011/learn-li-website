import { AskLiDemo } from "@/components/home/AskLiDemo";
import { ClassroomVisual } from "@/components/home/ClassroomVisual";
import { LearningJourney } from "@/components/home/LearningJourney";
import { SchoolHero } from "@/components/home/SchoolHero";
import { SchoolPlatform } from "@/components/home/SchoolPlatform";
import { ScoringPartner } from "@/components/home/ScoringPartner";
import { TrustAndCta } from "@/components/home/TrustAndCta";
import { WhySchools } from "@/components/home/WhySchools";
import { ProductStory } from "@/components/home/ProductStory";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { productShots } from "@/lib/site";

export default function Home() {
  return (
    <main>
      <SchoolHero />
      <WhySchools />
      <ClassroomVisual />

      <section id="ask-li" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-12 sm:px-8">
        <SectionLabel>{productShots.askLi.kicker}</SectionLabel>
        <h2 className="font-display mt-3 max-w-3xl text-3xl tracking-tight sm:text-4xl">
          {productShots.askLi.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70">
          {productShots.askLi.body}
        </p>
        <div className="mt-8 flex justify-center">
          <AskLiDemo />
        </div>
        <p className="mt-4 text-center text-xs text-foreground/50">
          Tap Photosynthesis, Heat, or Integers — the chat plays the reply the way a real Ask Li
          window does.
        </p>
      </section>

      <ProductStory />
      <ScoringPartner />
      <LearningJourney />
      <SchoolPlatform />
      <TrustAndCta />
    </main>
  );
}
