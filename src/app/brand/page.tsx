import type { Metadata } from "next";
import Image from "next/image";
import { AppIconSvg, GraduationMark, SealLogo } from "@/components/brand/Logo";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Brand",
  description: "LearnLi logo, app icon, colour, and usage for the marketing system.",
};

const colours = [
  { name: "Cream", hex: "#F6F1E8", note: "Page ground — kept quiet" },
  { name: "App blue", hex: "#3B82F6", note: "Buttons, active nav, numbers" },
  { name: "App green", hex: "#22C55E", note: "Open product, start actions" },
  { name: "Pink", hex: "#FCE4EC", note: "Learn with Li" },
  { name: "Mint", hex: "#E7F6EE", note: "Ask Li" },
  { name: "Lavender", hex: "#EEE8FF", note: "Visual learning" },
  { name: "Sun", hex: "#FFF4D6", note: "Overview, levels" },
  { name: "Sky", hex: "#E8F1FF", note: "Math, student, listen" },
  { name: "Rose", hex: "#FFE4E8", note: "Social Studies, images" },
  { name: "Ink", hex: "#1B3F47", note: "Headlines and body" },
];

export default function BrandPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <SectionLabel>Brand kit</SectionLabel>
      <h1 className="font-display mt-4 max-w-3xl text-4xl tracking-tight sm:text-6xl">
        Logo, app icon, and the ink it sits in.
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/70">
        Cream paper stays. The product’s pink, mint, lavender, sun, and blue–green
        sit on cards, buttons, and icons — so marketing feels like the app a
        student already opens.
      </p>

      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        <figure className="rounded-3xl border border-foreground/8 bg-white p-8 shadow-sm sm:p-12">
          <SectionLabel>Seal</SectionLabel>
          <div className="mt-8 flex justify-center">
            <Image
              src="/brand/learnli-seal-logo.png"
              alt="LearnLi circular seal with a mortarboard and spark, reading LearnLi Learn Smart."
              width={640}
              height={640}
              className="h-auto w-full max-w-sm"
            />
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Primary mark for brochures, the website, and formal documents. A
            mortarboard with an AI spark as the tassel.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <a
              href="/brand/learnli-seal-logo.png"
              download
              className="text-[11px] tracking-[0.22em] uppercase"
            >
              Download PNG
            </a>
            <a href="/brand/learnli-mark.svg" download className="text-[11px] tracking-[0.22em] uppercase">
              Download mark SVG
            </a>
          </div>
        </figure>

        <figure className="rounded-3xl border border-foreground/8 bg-white p-8 shadow-sm sm:p-12">
          <SectionLabel>App icon</SectionLabel>
          <div className="mt-8 flex justify-center">
            <Image
              src="/brand/learnli-app-icon.png"
              alt="LearnLi app icon: rounded square, cream field, teal mortarboard with a spark tassel."
              width={640}
              height={640}
              className="h-auto w-64 rounded-[28%]"
            />
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            The home-screen mark. Same mortarboard, no lettering — readable at
            the size of a thumb.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <a
              href="/brand/learnli-app-icon.png"
              download
              className="text-[11px] tracking-[0.22em] uppercase"
            >
              Download PNG
            </a>
            <a href="/brand/learnli-app-icon.svg" download className="text-[11px] tracking-[0.22em] uppercase">
              Download SVG
            </a>
          </div>
        </figure>
      </section>

      <section className="mt-16 grid gap-8 md:grid-cols-3">
        <figure className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-foreground/8">
          <SectionLabel>Line seal</SectionLabel>
          <SealLogo className="mx-auto mt-8 size-40" />
        </figure>
        <figure className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-foreground/8">
          <SectionLabel>Mark</SectionLabel>
          <GraduationMark title="LearnLi mark" className="mx-auto mt-8 size-24" />
        </figure>
        <figure className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-foreground/8">
          <SectionLabel>Vector icon</SectionLabel>
          <AppIconSvg className="mx-auto mt-8 size-28 overflow-visible rounded-[28%] shadow-sm" />
        </figure>
      </section>

      <section className="mt-16">
        <SectionLabel>Colour</SectionLabel>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {colours.map((colour) => (
            <article key={colour.hex} className="overflow-hidden rounded-2xl ring-1 ring-foreground/8">
              <div className="h-24" style={{ background: colour.hex }} />
              <div className="p-4">
                <p className="text-sm font-medium">{colour.name}</p>
                <p className="mt-1 font-mono text-xs">{colour.hex}</p>
                <p className="mt-2 text-xs text-muted-foreground">{colour.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 max-w-2xl">
        <SectionLabel>Type</SectionLabel>
        <p className="font-display mt-6 text-4xl tracking-tight">Fraunces for headlines.</p>
        <p className="mt-4 text-lg">Outfit for everything a student has to read.</p>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Headings sit large and a little literary. Labels travel in small caps
          with open tracking, the way a brochure names a section without shouting.
        </p>
      </section>
    </main>
  );
}
