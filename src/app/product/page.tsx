import type { Metadata } from "next";
import { FeatureCard, WhiteFeatureCard } from "@/components/brand/FeatureCard";
import { AskLiDemo } from "@/components/home/AskLiDemo";
import { ProductStory } from "@/components/home/ProductStory";
import { ScoringPartner } from "@/components/home/ScoringPartner";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { extras, learningModes, productShots, smartSections } from "@/lib/site";

export const metadata: Metadata = {
  title: "Product",
  description:
    "LearnLi product: Ask Li, interactive classroom visuals, scoring partner, and chapter tools for CBSE Grades 6–12.",
};

export default function ProductPage() {
  return (
    <main>
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:pt-16">
        <div className="flex flex-wrap gap-2">
          {["Ask Li", "Interactive", "Scoring partner", "Smart sections"].map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white px-3 py-1 text-[11px] font-medium tracking-[0.14em] text-li-blue uppercase shadow-sm ring-1 ring-li-blue/15"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-display mt-5 max-w-3xl text-4xl tracking-tight text-balance sm:text-6xl">
          An AI companion for the CBSE chapter.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/70">
          Ask Li, see the idea, explain it back. The same chapter tools on a classroom screen and
          at home.
        </p>

        <section className="mt-10">
          <div className="grid gap-4 md:grid-cols-3">
            {learningModes.map((mode) => (
              <FeatureCard key={mode.title} {...mode} />
            ))}
          </div>
        </section>
      </div>

      <ScoringPartner />

      <section id="ask-li" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-8 sm:px-8">
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
      </section>

      <ProductStory />

      <div className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <section>
          <SectionLabel>Inside every chapter</SectionLabel>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {smartSections.map((section, index) => (
              <WhiteFeatureCard
                key={section.title}
                {...section}
                index={String(index + 1).padStart(2, "0")}
              />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <SectionLabel>Listen, speak, upload</SectionLabel>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {extras.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
