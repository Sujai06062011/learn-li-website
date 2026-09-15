import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { schoolPlatform, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SchoolPlatform() {
  return (
    <section id="schools" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-10 sm:px-8">
      <div className="grid items-center gap-8 rounded-[2rem] bg-[#efe8dc] p-6 sm:p-10 lg:grid-cols-2">
        <div>
          <SectionLabel>{schoolPlatform.kicker}</SectionLabel>
          <h2 className="font-display mt-3 text-3xl tracking-tight sm:text-5xl">
            {schoolPlatform.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/65">{schoolPlatform.body}</p>
          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            <strong className="font-semibold">
              Position your institution as a technology-forward school
            </strong>{" "}
            that provides modern learning infrastructure both inside and outside the classroom.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={site.productUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "ink", size: "lg" }),
                "h-12 rounded-full px-6 text-sm font-semibold"
              )}
            >
              Request a School Pilot
            </a>
            <a
              href="#trust"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 rounded-full bg-white px-6 text-sm font-semibold"
              )}
            >
              See Safety &amp; Governance
            </a>
          </div>
        </div>

        <div className="rounded-[1.7rem] bg-white p-4 shadow-sm ring-1 ring-foreground/8 sm:p-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 font-semibold">
              <span className="size-9 rounded-full bg-[linear-gradient(135deg,#513d8e,#2f8f79)]" />
              {schoolPlatform.schoolName}
            </div>
            <span className="rounded-full bg-cream px-3 py-1 text-[11px] font-semibold ring-1 ring-foreground/10">
              Powered by LearnLi
            </span>
          </div>
          <p className="mb-3 text-[11px] font-semibold tracking-[0.16em] text-foreground/50 uppercase">
            {schoolPlatform.welcome}
          </p>
          <div className="overflow-hidden rounded-2xl ring-1 ring-foreground/8">
            <Image
              src={schoolPlatform.shot.src}
              alt={schoolPlatform.shot.alt}
              width={schoolPlatform.shot.width}
              height={schoolPlatform.shot.height}
              unoptimized
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
