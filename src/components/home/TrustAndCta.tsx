import { buttonVariants } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { schoolCta, site, trustMatters } from "@/lib/site";
import { cn } from "@/lib/utils";

export function TrustAndCta() {
  return (
    <section id="trust" className="pdf-block mx-auto max-w-6xl scroll-mt-24 px-5 py-14 sm:px-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-end">
        <div>
          <SectionLabel>{trustMatters.kicker}</SectionLabel>
          <h2 className="font-display mt-3 max-w-2xl text-3xl tracking-tight sm:text-5xl">
            {trustMatters.title}
          </h2>
        </div>
        <p className="text-base leading-relaxed text-foreground/65">{trustMatters.body}</p>
      </div>
      <div className="li-trust-cards mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {trustMatters.cards.map((card) => (
          <article
            key={card.title}
            className="rounded-[1.4rem] bg-white p-6 shadow-sm ring-1 ring-foreground/8"
          >
            <h3 className="font-display text-xl tracking-tight">{card.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/65">{card.body}</p>
          </article>
        ))}
      </div>
      <p className="mt-4 text-xs text-foreground/45">{trustMatters.note}</p>
    </section>
  );
}

export function SchoolCta() {
  return (
    <section id="demo" className="pdf-center mx-auto max-w-6xl scroll-mt-24 px-5 py-8 sm:px-8 sm:pb-16">
      <div className="rounded-[2.2rem] bg-foreground px-6 py-12 text-center text-cream sm:px-12 sm:py-16">
        <SectionLabel className="text-[#a9ddcf]">{schoolCta.kicker}</SectionLabel>
        <h2 className="font-display mx-auto mt-4 max-w-3xl text-3xl tracking-tight sm:text-5xl">
          {schoolCta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-cream/75 sm:text-base">
          {schoolCta.body}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={site.productUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 rounded-full border-transparent bg-white px-7 text-sm font-semibold text-foreground"
            )}
          >
            Book a School Demo
          </a>
          <a
            href={site.productUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 rounded-full border-white/35 bg-transparent px-7 text-sm font-semibold text-cream hover:bg-white/10"
            )}
          >
            Request a Pilot
          </a>
          <a
            href={site.pdfPath}
            download="LearnLi-website.pdf"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 rounded-full border-white/35 bg-transparent px-7 text-sm font-semibold text-cream hover:bg-white/10 print:hidden"
            )}
          >
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}
