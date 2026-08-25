import type { Metadata } from "next";
import Image from "next/image";
import {
  learningModes,
  practiceFeatures,
  roles,
  smartSections,
} from "@/lib/site";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Product",
  description:
    "LearnLi product: guided lessons, Ask Li, visual learning, quizzes, custom tests, study plans, and dashboards for students, parents, and teachers.",
};

const extras = [
  {
    title: "Listen mode",
    body: "Li reads the lesson aloud so a student can follow with their ears as well as their eyes — useful on a walk, a commute, or a tired evening.",
  },
  {
    title: "Voice mode",
    body: "Talk to Li. Ask the next question without typing. The conversation stays inside the chapter, not a generic chat.",
  },
  {
    title: "Image upload",
    body: "Photograph a diagram, a worked example, or a page from the book. Li can explain it, or fold it into a test.",
  },
];

export default function ProductPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <SectionLabel>The product</SectionLabel>
      <h1 className="font-display mt-4 max-w-3xl text-4xl tracking-tight text-balance sm:text-6xl">
        An AI companion for the CBSE chapter.
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
        LearnLi is organised the way school is organised: grade, subject, chapter.
        Inside each chapter the student chooses how to learn, then how to practise,
        then how to show the work.
      </p>

      <div className="mt-12 overflow-hidden rounded-sm border border-foreground/12">
        <Image
          src="/brand/learnli-tools-still-life.png"
          alt="Study tools drawn in teal ink on cream paper."
          width={1920}
          height={1080}
          className="h-auto w-full"
        />
      </div>

      <section className="mt-20">
        <SectionLabel>Learning modes</SectionLabel>
        <div className="mt-8 space-y-10">
          {learningModes.map((mode) => (
            <article
              key={mode.title}
              className="grid gap-3 border-t border-foreground/12 pt-8 md:grid-cols-[220px_1fr]"
            >
              <h2 className="font-display text-2xl">{mode.title}</h2>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {mode.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <SectionLabel>Inside the chapter</SectionLabel>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {smartSections.map((section) => (
            <article key={section.title}>
              <h2 className="text-lg font-medium">{section.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <SectionLabel>Listen, speak, upload</SectionLabel>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {extras.map((item) => (
            <article key={item.title} className="border border-foreground/12 p-6">
              <h2 className="text-lg font-medium">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <SectionLabel>Tests and plans</SectionLabel>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          {practiceFeatures.map((feature) => (
            <article key={feature.title} className="border-t border-foreground/12 pt-6">
              <h2 className="text-lg font-medium">{feature.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {feature.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 mb-8">
        <SectionLabel>Dashboards</SectionLabel>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {roles.map((role) => (
            <article key={role.title}>
              <h2 className="text-lg font-medium">{role.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {role.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
