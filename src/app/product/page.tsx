import type { Metadata } from "next";
import Image from "next/image";
import { FeatureCard, WhiteFeatureCard } from "@/components/brand/FeatureCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  extras,
  learningModes,
  practiceFeatures,
  roles,
  smartSections,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Product",
  description:
    "LearnLi product: guided lessons, Ask Li, visual learning, quizzes, custom tests, study plans, and dashboards for students, parents, and teachers.",
};

export default function ProductPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
      <div className="flex flex-wrap gap-2">
        {["Learn with Li", "Ask Li", "Visuals", "Quizzes", "Voice"].map((tag) => (
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
        Grade, subject, chapter. Then choose how to learn, how to practise, and how
        to show the work.
      </p>

      <section className="mt-10">
        <div className="grid gap-4 md:grid-cols-3">
          {learningModes.map((mode) => (
            <FeatureCard key={mode.title} {...mode} />
          ))}
        </div>
      </section>

      <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow-[0_18px_50px_-28px_rgba(27,63,71,0.4)] ring-1 ring-foreground/8">
        <Image
          src="/brand/learnli-tools-still-life.png"
          alt="Study tools drawn in teal ink on cream paper."
          width={1920}
          height={1080}
          className="h-auto w-full"
        />
      </div>

      <section className="mt-16">
        <SectionLabel>Inside the chapter</SectionLabel>
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

      <section className="mt-16">
        <SectionLabel>Tests and plans</SectionLabel>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {practiceFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="mt-16 mb-4">
        <SectionLabel>Dashboards</SectionLabel>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {roles.map((role) => (
            <WhiteFeatureCard key={role.title} {...role} />
          ))}
        </div>
      </section>
    </main>
  );
}
