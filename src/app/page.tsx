import Image from "next/image";
import Link from "next/link";
import { FeatureCard } from "@/components/brand/FeatureCard";
import { LiIcon } from "@/components/brand/LiIcon";
import { buttonVariants } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  careerNote,
  company,
  heroCopy,
  highlightTiles,
  learningModes,
  practiceFeatures,
  promises,
  roles,
  site,
  smartSections,
  snapshot,
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
          {heroCopy.headline}
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
              buttonVariants({ variant: "success", size: "lg" }),
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
        <div className="overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#3b82f6,#6366f1)] p-8 text-white shadow-[0_18px_50px_-24px_rgba(59,130,246,0.65)] sm:p-12">
          <p className="text-[11px] tracking-[0.22em] uppercase opacity-80">The company</p>
          <p className="font-display mt-3 max-w-3xl text-3xl tracking-tight sm:text-4xl">
            LearnLi builds an AI companion for school —{" "}
            <span className="text-[#fde68a]">not a replacement for teachers</span>, and not a
            feed of generic answers.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/12 p-5">
              <p className="text-[11px] tracking-[0.2em] uppercase opacity-80">Vision</p>
              <p className="mt-2 text-sm leading-relaxed sm:text-base">{company.vision}</p>
            </div>
            <div className="rounded-2xl bg-white/12 p-5">
              <p className="text-[11px] tracking-[0.2em] uppercase opacity-80">Mission</p>
              <p className="mt-2 text-sm leading-relaxed sm:text-base">{company.mission}</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/company"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-li-blue"
            >
              About LearnLi
            </Link>
            <a
              href={site.productUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-li-green px-5 py-2.5 text-sm font-semibold text-white"
            >
              Go to learnli.in
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {learningModes.map((mode) => (
            <FeatureCard key={mode.title} {...mode} />
          ))}
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
        <SectionLabel>Why LearnLi</SectionLabel>
        <h2 className="font-display mt-3 max-w-xl text-3xl tracking-tight sm:text-4xl">
          Why this companion holds up in a real week of school.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {promises.map((item, index) => {
            const tones = ["pink", "mint", "lavender", "sun"] as const;
            const tone = tones[index] ?? "sky";
            return (
              <article
                key={item.n}
                className={cn("rounded-3xl p-6 shadow-sm sm:p-7", toneClass[tone])}
              >
                <p className="text-sm font-semibold text-foreground/35">{item.n}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">{item.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <SectionLabel>What students actually open</SectionLabel>
        <h2 className="font-display mt-3 max-w-xl text-3xl tracking-tight sm:text-4xl">
          Not a lecture. A set of tools.
        </h2>
        <div className="mt-10 grid gap-x-16 sm:grid-cols-2">
          {[highlightTiles.slice(0, 4), highlightTiles.slice(4)].map((column, columnIndex) => (
            <ul key={columnIndex} className="border-b border-foreground/10">
              {column.map((tile, index) => {
                const n = columnIndex * 4 + index + 1;
                return (
                  <li
                    key={tile.title}
                    className="flex items-start gap-4 border-t border-foreground/10 py-5"
                  >
                    <span className="font-display w-8 shrink-0 pt-0.5 text-xl text-foreground/25">
                      {String(n).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "flex size-10 shrink-0 items-center justify-center rounded-full",
                        toneInk[tile.tone]
                      )}
                    >
                      <LiIcon name={tile.icon} className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold">{tile.title}</p>
                      <p className="mt-0.5 text-sm text-foreground/60">{tile.hint}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
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
