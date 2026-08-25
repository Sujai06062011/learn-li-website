import type { Metadata } from "next";
import Image from "next/image";
import { company, site } from "@/lib/site";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Company",
  description:
    "LearnLi is the company behind the AI-assisted CBSE learning platform for Grades 6–12.",
};

export default function CompanyPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <SectionLabel>The company</SectionLabel>
      <h1 className="font-display mt-4 max-w-3xl text-4xl tracking-tight text-balance sm:text-6xl">
        A school companion, built with a quiet room in mind.
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
        {company.statement}
      </p>

      <div className="mt-12 overflow-hidden rounded-sm border border-foreground/12">
        <Image
          src="/brand/learnli-library-banner.png"
          alt="Line drawing of a library hall opening onto palms and hills."
          width={1920}
          height={1080}
          className="h-auto w-full"
        />
      </div>

      <section className="mt-16 grid gap-12 border-t border-foreground/12 pt-12 lg:grid-cols-2">
        <div>
          <SectionLabel>Mission</SectionLabel>
          <p className="mt-4 text-base leading-relaxed">{company.mission}</p>
        </div>
        <div>
          <SectionLabel>What we make</SectionLabel>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {company.product}
          </p>
        </div>
      </section>

      <section className="mt-16 grid gap-12 border-t border-foreground/12 pt-12 lg:grid-cols-2">
        <div>
          <SectionLabel>Who it is for</SectionLabel>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed">
            {company.audience.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-[0.55rem] size-1 shrink-0 rounded-full bg-foreground" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionLabel>Subjects in view</SectionLabel>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {company.subjects.join(" · ")} — mapped to CBSE chapters in Grades 6–12.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Product:{" "}
            <a className="text-foreground underline-offset-4 hover:underline" href={site.productUrl}>
              {site.productUrl.replace("https://", "")}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
