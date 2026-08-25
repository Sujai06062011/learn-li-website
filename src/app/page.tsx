import Image from "next/image";
import Link from "next/link";
import { FeatureCard } from "@/components/brand/FeatureCard";
import { LiIcon } from "@/components/brand/LiIcon";
import { LiveStudio } from "@/components/home/LiveStudio";
import { buttonVariants } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  careerNote,
  company,
  extras,
  heroCopy,
  highlightTiles,
  learningModes,
  practiceFeatures,
  promises,
  roles,
  site,
  smartSections,
  snapshot,
  steps,
  toneClass,
  toneInk,
} from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-5 pt-10 pb-6 sm:px-8 sm:pt-14">
        <div className="flex flex-wrap gap-2">
          {["CBSE", "Grades 6–12", "Ask Li", "Voice & listen"].map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white px-3 py-1 text-[11px] font-medium tracking-[0.14em] text-li-blue uppercase shadow-sm ring-1 ring-li-blue/15"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-display mt-6 max-w-3xl text-[2.6rem] leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-[4.2rem]">
          Choose <span className="text-[#c9a227]">depth</span> over drill.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg">
          {heroCopy.lede}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={site.productUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "gold", size: "lg" }),
              "h-12 rounded-full px-7 text-sm font-semibold"
            )}
          >
            Open LearnLi
          </a>
          <Link
            href="/product"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 rounded-full px-7 text-sm font-semibold"
            )}
          >
            See features
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-[#123a4a] p-8 text-white shadow-[0_24px_60px_-28px_rgba(18,58,74,0.7)] sm:p-12">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[#f5d76e] uppercase">
            About LearnLi
          </p>
          <p className="font-display mt-3 max-w-3xl text-3xl tracking-tight sm:text-5xl">
            An AI companion for school —{" "}
            <span className="text-[#f5d76e]">not a replacement for teachers</span>, and not a
            feed of generic answers.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.4rem] bg-white/8 p-6 ring-1 ring-white/10">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-[#f5d76e] uppercase">
                Vision
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
                {company.vision}
              </p>
            </div>
            <div className="rounded-[1.4rem] bg-white/8 p-6 ring-1 ring-white/10">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-[#f5d76e] uppercase">
                Mission
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
                {company.mission}
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/company"
              className="inline-flex min-h-12 items-center rounded-full bg-white px-6 text-sm font-semibold text-[#123a4a]"
            >
              About LearnLi
            </Link>
            <a
              href={site.productUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center rounded-full bg-[#f5d76e] px-6 text-sm font-semibold text-[#123a4a]"
            >
              Go to learnli.in
            </a>
          </div>
        </div>
      </section>

      <LiveStudio />

      <section className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {learningModes.map((mode) => {
            const modeId =
              mode.title === "Learn with Li"
                ? "li-mode-learn"
                : mode.title === "Visual learning"
                  ? "li-mode-visual"
                  : "li-mode-ask";
            return (
              <label key={mode.title} htmlFor={modeId} className="block cursor-pointer">
                <FeatureCard {...mode} />
              </label>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
        <div className="overflow-hidden rounded-3xl bg-white shadow-[0_18px_50px_-28px_rgba(27,63,71,0.4)] ring-1 ring-foreground/8">
          <Image
            src="/brand/learnli-hero-campus.png"
            alt="Fine-line drawing of a quiet school campus, with students reading under a tree and a constellation of sparks in the sky."
            width={1920}
            height={1080}
            priority
            className="h-auto w-full"
          />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-foreground/8 sm:grid-cols-4 sm:p-5">
          {snapshot.map((item) => (
            <div key={item.label} className="px-2 py-1">
              <p className="text-2xl font-semibold tracking-tight text-li-blue">{item.value}</p>
              <p className="mt-1 text-xs text-foreground/55">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-[#123a4a]/55 uppercase">
          Why LearnLi
        </p>
        <h2 className="font-display mt-3 max-w-xl text-3xl tracking-tight sm:text-5xl">
          Why this companion{" "}
          <span className="text-[#c9a227]">holds up in a real week of school.</span>
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {promises.map((item) => (
            <article
              key={item.n}
              className="rounded-[1.6rem] bg-white p-6 shadow-[0_14px_40px_-24px_rgba(18,58,74,0.35)] ring-1 ring-foreground/8 sm:p-8"
            >
              <p className="font-display text-4xl text-[#123a4a]/18">{item.n}</p>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-6 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.n}
              className="rounded-[1.6rem] bg-[#123a4a] p-6 text-white shadow-[0_18px_40px_-24px_rgba(18,58,74,0.55)] sm:p-7"
            >
              <p className="font-display text-3xl text-[#f5d76e]">{step.n}</p>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <SectionLabel>What students actually open</SectionLabel>
        <h2 className="font-display mt-3 max-w-xl text-3xl tracking-tight sm:text-4xl">
          Not a lecture. A set of tools.
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {highlightTiles.map((tile) => (
            <div
              key={tile.title}
              className={cn(
                "rounded-3xl p-4 shadow-sm transition hover:-translate-y-1",
                toneClass[tile.tone]
              )}
            >
              <div
                className={cn(
                  "flex size-10 items-center justify-center rounded-2xl",
                  toneInk[tile.tone]
                )}
              >
                <LiIcon name={tile.icon} className="size-5" />
              </div>
              <p className="mt-3 font-semibold">{tile.title}</p>
              <p className="mt-1 text-xs text-foreground/60">{tile.hint}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-6 sm:px-8 sm:py-10">
        <SectionLabel>Inside every chapter</SectionLabel>
        <h2 className="font-display mt-3 max-w-xl text-3xl tracking-tight sm:text-4xl">
          Smart sections
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {smartSections.map((section, index) => (
            <FeatureCard
              key={section.title}
              {...section}
              index={String(index + 1).padStart(2, "0")}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="overflow-hidden rounded-3xl bg-white shadow-[0_18px_50px_-28px_rgba(27,63,71,0.4)] ring-1 ring-foreground/8">
          <Image
            src="/brand/learnli-tools-still-life.png"
            alt="Line drawing of headphones, a microphone, an open textbook, a study plan checklist, and a phone — the tools of LearnLi."
            width={1920}
            height={1080}
            className="h-auto w-full"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <SectionLabel>Practice</SectionLabel>
        <h2 className="font-display mt-3 max-w-xl text-3xl tracking-tight sm:text-4xl">
          Tests you shape. Plans you keep.
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {practiceFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {extras.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:pb-16">
        <SectionLabel>Everyone around the student</SectionLabel>
        <h2 className="font-display mt-3 max-w-xl text-3xl tracking-tight sm:text-4xl">
          Three dashboards. One story.
        </h2>
        <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-[0_18px_50px_-28px_rgba(27,63,71,0.4)] ring-1 ring-foreground/8">
          <Image
            src="/brand/learnli-roles-illustration.png"
            alt="Three fine-line scenes: a student talking with Li, a parent reviewing progress, and a teacher studying a class overview."
            width={1920}
            height={1080}
            className="h-auto w-full"
          />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {roles.map((role) => (
            <FeatureCard key={role.title} {...role} />
          ))}
        </div>
        <p className="mt-6 text-sm text-foreground/60">{careerNote}</p>
      </section>
    </main>
  );
}
