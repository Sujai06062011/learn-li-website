import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { profluentLabs, toneClass, type Tone } from "@/lib/site";
import { cn } from "@/lib/utils";

function BeliefCard({
  title,
  body,
  tone,
}: {
  title: string;
  body: string;
  tone: Tone;
}) {
  return (
    <article className={cn("rounded-[1.5rem] p-6 shadow-sm", toneClass[tone])}>
      <h3 className="font-display text-2xl tracking-tight">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-foreground/65">{body}</p>
    </article>
  );
}

export function ProfluentLabs() {
  return (
    <section id="profluent" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-14 sm:px-8">
      <div className="overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_22px_50px_-28px_rgba(27,63,71,0.45)] ring-1 ring-foreground/8 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>{profluentLabs.kicker}</SectionLabel>
            <h2 className="font-display mt-3 text-3xl tracking-tight sm:text-5xl">
              {profluentLabs.title}
            </h2>
            <p className="mt-2 text-sm font-semibold tracking-[0.08em] text-[#2c7e69]">
              {profluentLabs.legalName}
            </p>
          </div>
          <Image
            src={profluentLabs.logo.src}
            alt={profluentLabs.logo.alt}
            width={profluentLabs.logo.width}
            height={profluentLabs.logo.height}
            unoptimized
            className="h-12 w-auto sm:h-14"
          />
        </div>

        <div className="mt-8">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-li-blue uppercase">
            {profluentLabs.aboutTitle}
          </p>
          <p className="mt-3 max-w-4xl text-base leading-relaxed text-foreground/70">
            {profluentLabs.about}
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <BeliefCard {...profluentLabs.purpose} />
          <BeliefCard {...profluentLabs.promise} />
          <BeliefCard {...profluentLabs.believe} />
        </div>

        <div className="mt-8 rounded-[1.6rem] bg-foreground p-6 text-cream sm:p-8">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[#9fd4c6] uppercase">
            {profluentLabs.storyTitle}
          </p>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-cream/80">
            {profluentLabs.story}
          </p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-[1.5rem] bg-[#fff4d6] p-6">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-[#2c7e69] uppercase">
              Recognition
            </p>
            <p className="font-display mt-3 text-xl tracking-tight sm:text-2xl">
              {profluentLabs.award}
            </p>
          </div>
          <div className="rounded-[1.5rem] bg-[#e8f1ff] p-6">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-[#2c7e69] uppercase">
              Trusted by
            </p>
            <ul className="mt-4 space-y-3">
              {profluentLabs.clients.map((client) => (
                <li key={client.name}>
                  <p className="font-display text-xl tracking-tight">{client.name}</p>
                  <p className="text-sm text-foreground/55">{client.hint}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-[1.6rem] bg-[#e7f6ee] p-6 sm:p-8">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-li-blue uppercase">
            {profluentLabs.reach.title}
          </p>
          <p className="font-display mt-3 text-2xl tracking-tight">{profluentLabs.reach.name}</p>
          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.16em] text-[#2c7e69] uppercase">
                Address
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                {profluentLabs.reach.address}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.16em] text-[#2c7e69] uppercase">
                Phone
              </p>
              <a
                href={profluentLabs.reach.phoneHref}
                className="mt-2 inline-block text-sm font-semibold text-foreground hover:opacity-70"
              >
                {profluentLabs.reach.phone}
              </a>
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.16em] text-[#2c7e69] uppercase">
                Website
              </p>
              <a
                href={profluentLabs.reach.website}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm font-semibold text-li-blue hover:opacity-70"
              >
                {profluentLabs.reach.websiteLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
