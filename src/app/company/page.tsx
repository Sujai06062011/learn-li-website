import type { Metadata } from "next";
import Image from "next/image";
import { LiIcon } from "@/components/brand/LiIcon";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { buttonVariants } from "@/components/ui/button";
import { company, schoolPartner, site, subjects, toneClass, toneInk } from "@/lib/site";
import { ProfluentLabs } from "@/components/home/ProfluentLabs";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Company",
  description:
    "LearnLi is built by Profluent Labs Pvt. Ltd. — an EdTech SaaS company and trusted technology partner to global clients.",
};

export default function CompanyPage() {
  return (
    <main>
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
      <SectionLabel>The company</SectionLabel>
      <h1 className="font-display mt-4 max-w-3xl text-4xl tracking-tight text-balance sm:text-6xl">
        Built for the classroom as it actually is.
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/70">
        {company.statement} Chapters, marks, parents who want a window, teachers who
        need a wider one.
      </p>

      <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow-[0_18px_50px_-28px_rgba(27,63,71,0.4)] ring-1 ring-foreground/8">
        <Image
          src="/brand/learnli-library-banner.png"
          alt="Line drawing of a library hall opening onto palms and hills."
          width={1920}
          height={1080}
          className="h-auto w-full"
        />
      </div>

      <section className="mt-14 grid gap-4 md:grid-cols-3">
        {company.audience.map((item) => (
          <article
            key={item.title}
            className={cn("rounded-3xl p-6 shadow-sm", toneClass[item.tone])}
          >
            <div
              className={cn(
                "flex size-11 items-center justify-center rounded-2xl",
                toneInk[item.tone]
              )}
            >
              <LiIcon name={item.icon} className="size-5" />
            </div>
            <h2 className="mt-4 text-lg font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm text-foreground/70">{item.body}</p>
          </article>
        ))}
      </section>

      <section className="mt-14 grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl bg-[linear-gradient(135deg,#3b82f6,#6366f1)] p-6 text-white shadow-sm sm:p-8">
          <SectionLabel className="text-white/80">Vision</SectionLabel>
          <p className="mt-4 text-base leading-relaxed">{company.vision}</p>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-foreground/8 sm:p-8">
          <SectionLabel>Mission</SectionLabel>
          <p className="mt-4 text-base leading-relaxed">{company.mission}</p>
        </div>
      </section>

      <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-foreground/8 sm:p-8">
        <SectionLabel>What we make</SectionLabel>
        <p className="mt-4 text-base leading-relaxed text-foreground/70">
          {company.product}
        </p>
      </section>

      <section className="mt-6 rounded-3xl bg-[#123a4a] p-6 text-white sm:p-8">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-[#f5d76e] uppercase">
          {schoolPartner.kicker}
        </p>
        <h2 className="font-display mt-3 text-2xl tracking-tight sm:text-3xl">
          {schoolPartner.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/85">{schoolPartner.body}</p>
      </section>

      <section className="mt-10">
        <SectionLabel>Subjects</SectionLabel>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {subjects.map((subject) => (
            <div
              key={subject.name}
              className={cn("rounded-3xl p-4 shadow-sm", toneClass[subject.tone])}
            >
              <div
                className={cn(
                  "flex size-10 items-center justify-center rounded-2xl",
                  toneInk[subject.tone]
                )}
              >
                <LiIcon name={subject.icon} className="size-5" />
              </div>
              <p className="mt-3 font-semibold">{subject.name}</p>
            </div>
          ))}
        </div>
        <a
          href={site.productUrl}
          className={cn(
            buttonVariants({ variant: "success", size: "lg" }),
            "mt-8 inline-flex h-11 rounded-full px-6 text-sm font-semibold"
          )}
        >
          Open learnli.in
        </a>
      </section>
      </div>
      <ProfluentLabs />
    </main>
  );
}
