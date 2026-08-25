import type { Metadata } from "next";
import Image from "next/image";
import { SealLogo } from "@/components/brand/Logo";
import { buttonVariants } from "@/components/ui/button";
import {
  company,
  highlights,
  learningModes,
  practiceFeatures,
  roles,
  site,
  smartSections,
} from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Brochure",
  description: "LearnLi company and product brochure.",
};

function Sheet({ children }: { children: React.ReactNode }) {
  return (
    <article className="sheet mx-auto w-full max-w-[210mm] overflow-hidden border border-foreground/12 bg-[#f6f1e8] shadow-[0_24px_80px_-40px_rgba(27,63,71,0.45)] print:shadow-none">
      {children}
    </article>
  );
}

export default function BrochurePage() {
  return (
    <main className="bg-[#ebe4d6] px-4 py-10 sm:px-8 print:bg-white print:p-0">
      <div className="mx-auto mb-8 flex max-w-[210mm] flex-col gap-3 sm:flex-row sm:items-end sm:justify-between print:hidden">
        <div>
          <p className="text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
            Company &amp; product
          </p>
          <h1 className="font-display mt-2 text-3xl tracking-tight">LearnLi brochure</h1>
        </div>
        <a
          href={site.pdfPath}
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-11 px-5 text-[11px] tracking-[0.2em] uppercase"
          )}
        >
          Download PDF
        </a>
      </div>

      <div className="space-y-10 print:space-y-0">
        <Sheet>
          <div className="flex min-h-[297mm] flex-col px-8 py-10 sm:px-12 sm:py-12">
            <div className="flex items-start justify-between gap-6">
              <SealLogo className="size-24 sm:size-28" />
              <p className="max-w-[11rem] text-right text-[10px] leading-relaxed tracking-[0.18em] text-muted-foreground uppercase">
                CBSE · Grades 6–12
                <br />
                AI-assisted learning
              </p>
            </div>
            <div className="mt-16 max-w-lg">
              <p className="text-[11px] tracking-[0.32em] uppercase">LearnLi</p>
              <h2 className="font-display mt-4 text-4xl leading-[1.08] tracking-tight sm:text-5xl">
                Choose depth over drill.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                LearnLi is not just an app you open. It is a setting you study in —
                a companion for every chapter, every doubt, every test.
              </p>
            </div>
            <div className="mt-10 flex-1 overflow-hidden border border-foreground/10">
              <Image
                src="/brand/learnli-hero-campus.png"
                alt=""
                width={1400}
                height={788}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-8 text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
              learnli.in · Learn Smart
            </p>
          </div>
        </Sheet>

        <Sheet>
          <div className="flex min-h-[297mm] flex-col px-8 py-10 sm:px-12 sm:py-12">
            <p className="text-[11px] tracking-[0.32em] uppercase">Product highlights</p>
            <h2 className="font-display mt-3 max-w-md text-3xl tracking-tight">
              Everything a chapter needs, before the exam asks for it.
            </h2>
            <ul className="mt-10 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-[0.55rem] size-1 shrink-0 rounded-full bg-foreground" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 grid gap-6 border-t border-foreground/12 pt-8 sm:grid-cols-3">
              {learningModes.map((mode) => (
                <div key={mode.title}>
                  <p className="text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
                    {mode.kicker}
                  </p>
                  <p className="mt-2 font-medium">{mode.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {mode.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-10">
              <Image
                src="/brand/learnli-tools-still-life.png"
                alt=""
                width={1400}
                height={400}
                className="h-40 w-full object-cover object-center sm:h-48"
              />
            </div>
          </div>
        </Sheet>

        <Sheet>
          <div className="flex min-h-[297mm] flex-col px-8 py-10 sm:px-12 sm:py-12">
            <p className="text-[11px] tracking-[0.32em] uppercase">Inside the chapter</p>
            <h2 className="font-display mt-3 text-3xl tracking-tight">Smart sections</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {smartSections.map((section, index) => (
                <div key={section.title} className="border-t border-foreground/12 pt-4">
                  <p className="font-display text-xl text-foreground/30">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1 font-medium">{section.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 grid gap-6 border-t border-foreground/12 pt-8 sm:grid-cols-2">
              {practiceFeatures.map((feature) => (
                <div key={feature.title}>
                  <p className="font-medium">{feature.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {feature.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Sheet>

        <Sheet>
          <div className="flex min-h-[297mm] flex-col px-8 py-10 sm:px-12 sm:py-12">
            <p className="text-[11px] tracking-[0.32em] uppercase">People around the student</p>
            <h2 className="font-display mt-3 text-3xl tracking-tight">
              Three dashboards. One story of progress.
            </h2>
            <div className="mt-8 overflow-hidden border border-foreground/10">
              <Image
                src="/brand/learnli-roles-illustration.png"
                alt=""
                width={1400}
                height={500}
                className="h-auto w-full"
              />
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {roles.map((role) => (
                <div key={role.title}>
                  <p className="font-medium">{role.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {role.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 grid gap-8 border-t border-foreground/12 pt-8 sm:grid-cols-2">
              <div>
                <p className="text-[11px] tracking-[0.28em] uppercase">The company</p>
                <p className="mt-3 text-sm leading-relaxed">{company.mission}</p>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.28em] uppercase">The product</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {company.product}
                </p>
                <p className="mt-4 text-[11px] tracking-[0.2em] uppercase">
                  {site.productUrl.replace("https://", "")}
                </p>
              </div>
            </div>
            <p className="mt-auto pt-10 text-[11px] tracking-[0.24em] text-muted-foreground uppercase">
              LearnLi · Learn Smart · {new Date().getFullYear()}
            </p>
          </div>
        </Sheet>
      </div>
    </main>
  );
}
