import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  careerNote,
  company,
  heroCopy,
  highlights,
  learningModes,
  practiceFeatures,
  roles,
  site,
  smartSections,
} from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-5 pt-12 pb-8 sm:px-8 sm:pt-16">
        <SectionLabel>{heroCopy.kicker}</SectionLabel>
        <div className="mt-6 grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h1 className="font-display text-[2.6rem] leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-[4.35rem]">
              {heroCopy.headline}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {heroCopy.lede}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.productUrl}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 px-5 text-[11px] tracking-[0.2em] uppercase"
                )}
              >
                Open the product
              </a>
              <Link
                href="/brochure"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 px-5 text-[11px] tracking-[0.2em] uppercase"
                )}
              >
                Company PDF
              </Link>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground lg:justify-self-end lg:text-right">
            Built for the CBSE chapter as it is taught: Science, Mathematics,
            English, and Social Studies, from Grade 6 through Grade 12.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-4 sm:px-8">
        <div className="overflow-hidden rounded-sm border border-foreground/12 bg-card">
          <Image
            src="/brand/learnli-hero-campus.png"
            alt="Fine-line drawing of a quiet school campus, with students reading under a tree and a constellation of sparks in the sky."
            width={1920}
            height={1080}
            priority
            className="h-auto w-full"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionLabel>Product highlights</SectionLabel>
        <div className="mt-4 grid gap-10 lg:grid-cols-2">
          <h2 className="font-display max-w-md text-3xl tracking-tight text-balance sm:text-4xl">
            Everything a chapter needs, before the exam asks for it.
          </h2>
          <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="mt-[0.55rem] size-1 shrink-0 rounded-full bg-foreground" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <SectionLabel>Choose a learning mode</SectionLabel>
          <h2 className="font-display mt-4 max-w-xl text-3xl tracking-tight sm:text-4xl">
            Learn with Li. Ask Li. See the idea.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {learningModes.map((mode) => (
              <article
                key={mode.title}
                className="border border-foreground/12 bg-background p-6"
              >
                <p className="text-[11px] tracking-[0.24em] text-muted-foreground uppercase">
                  {mode.kicker}
                </p>
                <h3 className="mt-3 font-display text-2xl">{mode.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {mode.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionLabel>Smart sections</SectionLabel>
        <h2 className="font-display mt-4 max-w-xl text-3xl tracking-tight sm:text-4xl">
          The chapter, taken apart with care.
        </h2>
        <div className="mt-10 grid gap-px overflow-hidden border border-foreground/12 bg-foreground/12 sm:grid-cols-2 lg:grid-cols-3">
          {smartSections.map((section, index) => (
            <article key={section.title} className="bg-background p-6">
              <p className="font-display text-3xl text-foreground/25">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-base font-medium">{section.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
        <div className="overflow-hidden rounded-sm border border-foreground/12 bg-card">
          <Image
            src="/brand/learnli-tools-still-life.png"
            alt="Line drawing of headphones, a microphone, an open textbook, a study plan checklist, and a phone — the tools of LearnLi."
            width={1920}
            height={1080}
            className="h-auto w-full"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionLabel>Practice, plans, progress</SectionLabel>
        <h2 className="font-display mt-4 max-w-xl text-3xl tracking-tight sm:text-4xl">
          A test you can shape. A plan you can keep.
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {practiceFeatures.map((feature) => (
            <article key={feature.title} className="border-t border-foreground/12 pt-6">
              <h3 className="text-lg font-medium">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {feature.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <SectionLabel>For every desk in the house</SectionLabel>
          <h2 className="font-display mt-4 max-w-xl text-3xl tracking-tight sm:text-4xl">
            Student, parent, and teacher — each with a dashboard of their own.
          </h2>
          <div className="mt-10 overflow-hidden rounded-sm border border-foreground/12 bg-background">
            <Image
              src="/brand/learnli-roles-illustration.png"
              alt="Three fine-line scenes: a student talking with Li, a parent reviewing progress, and a teacher studying a class overview."
              width={1920}
              height={1080}
              className="h-auto w-full"
            />
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {roles.map((role) => (
              <article key={role.title}>
                <h3 className="text-base font-medium">{role.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {role.body}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {careerNote}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionLabel>The company</SectionLabel>
        <div className="mt-4 grid gap-10 lg:grid-cols-2">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
            {company.statement}
          </h2>
          <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>{company.mission}</p>
            <p>{company.product}</p>
            <Link
              href="/company"
              className="inline-block text-[11px] tracking-[0.22em] text-foreground uppercase"
            >
              Read the company note →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <div className="overflow-hidden rounded-sm border border-foreground/12 bg-card">
          <Image
            src="/brand/learnli-library-banner.png"
            alt="Architectural line drawing of a library opening onto a courtyard of palms and hills."
            width={1920}
            height={1080}
            className="h-auto w-full"
          />
          <div className="flex flex-col gap-6 px-6 py-8 sm:flex-row sm:items-end sm:justify-between sm:px-10 sm:py-10">
            <div>
              <p className="font-display text-3xl tracking-tight">Begin with a chapter.</p>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                Open LearnLi, pick a grade, and let Li take the first pass with you.
              </p>
            </div>
            <a
              href={site.productUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 px-5 text-[11px] tracking-[0.2em] uppercase"
              )}
            >
              Go to learnli.in
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
