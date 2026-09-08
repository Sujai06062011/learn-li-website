import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ecosystemStrip, heroCopy, heroProof, site } from "@/lib/site";
import { cn } from "@/lib/utils";

function Plant({ extraLeaf }: { extraLeaf?: boolean }) {
  return (
    <div className="relative mx-auto h-[5.5rem] w-14">
      <span className="absolute bottom-0 left-1/2 h-16 w-0.5 -translate-x-1/2 rounded bg-[#5b8e5d]" />
      <span className="absolute bottom-8 left-1 h-4 w-8 -rotate-[22deg] rounded-[50%_0_50%_0] bg-[#8fbd7f]" />
      {extraLeaf ? (
        <span className="absolute right-0.5 bottom-11 h-4 w-8 rotate-[22deg] scale-x-[-1] rounded-[50%_0_50%_0] bg-[#8fbd7f]" />
      ) : null}
      <span className="absolute top-1 left-1/2 size-[1.4rem] -translate-x-1/2 rounded-full bg-[#f0b352] shadow-[0_-10px_0_-3px_#f3cf68,10px_0_0_-3px_#f3cf68,-10px_0_0_-3px_#f3cf68,0_10px_0_-3px_#f3cf68]" />
    </div>
  );
}

export function SchoolHero() {
  return (
    <>
      <section className="relative mx-auto max-w-6xl overflow-hidden px-5 pt-10 pb-8 sm:px-8 sm:pt-14">
        <div className="pointer-events-none absolute -top-40 -right-20 size-[28rem] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18),transparent_70%)]" />
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white/70 px-3 py-1.5 text-[12px] font-semibold">
              <span className="size-2 rounded-full bg-li-green" />
              {heroCopy.kicker}
            </p>
            <h1 className="font-display mt-5 max-w-3xl text-[2.5rem] leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-[4.4rem]">
              Extend great teaching{" "}
              <span className="text-[#2c7e69]">beyond the classroom.</span>
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
                  buttonVariants({ variant: "ink", size: "lg" }),
                  "h-12 rounded-full px-6 text-sm font-semibold"
                )}
              >
                Book a School Demo →
              </a>
              <Link
                href="#why"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 rounded-full bg-white px-6 text-sm font-semibold"
                )}
              >
                See Why Schools Choose LearnLi
              </Link>
            </div>
            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-foreground/55">
              {heroProof.map((item) => (
                <li key={item}>
                  <span className="mr-1.5 text-[#2c7e69]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] bg-white p-4 shadow-[0_22px_50px_-28px_rgba(27,63,71,0.45)] ring-1 ring-foreground/8 sm:p-5">
            <div className="mb-3 flex items-start justify-between gap-3 px-1">
              <div>
                <p className="text-sm font-semibold">Interactive Classroom Learning</p>
                <p className="text-xs text-foreground/50">Smart board · TV · Projector</p>
              </div>
              <span className="rounded-full bg-cream px-3 py-1 text-[11px] font-semibold ring-1 ring-foreground/10">
                Biology · Pollination
              </span>
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-[#edf4ef] p-5 sm:p-6">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-[#2c6f5e] uppercase">
                See the concept, stage by stage
              </p>
              <h2 className="font-display mt-2 text-2xl tracking-tight sm:text-3xl">
                How pollination happens
              </h2>
              <p className="mt-2 max-w-md text-sm text-foreground/60">
                Move through each stage to help students understand the process visually before
                they read the detailed explanation.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {[
                  ["1 · Flower opens", false],
                  ["2 · Pollen forms", true],
                  ["3 · Transfer", true],
                  ["4 · Fertilisation", true],
                ].map(([label, extra]) => (
                  <div
                    key={String(label)}
                    className="relative min-h-[8.5rem] rounded-2xl bg-white p-3 shadow-sm ring-1 ring-foreground/8"
                  >
                    <p className="text-[11px] font-semibold">{label}</p>
                    <Plant extraLeaf={Boolean(extra)} />
                  </div>
                ))}
              </div>
              <span className="li-pollen absolute top-36 right-16 size-2 rounded-full bg-[#e9a92b]" />
              <span className="li-pollen absolute top-44 right-24 size-2 rounded-full bg-[#e9a92b] [animation-delay:0.4s]" />
              <span className="li-pollen absolute top-28 right-32 size-2 rounded-full bg-[#e9a92b] [animation-delay:0.8s]" />
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Teacher-led", "Student-accessible at home", "Replayable concepts"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full bg-cream px-3 py-1 text-[11px] font-semibold ring-1 ring-foreground/10"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 pb-4 sm:px-8">
        <div className="grid gap-4 rounded-[1.6rem] bg-foreground px-5 py-5 text-cream sm:grid-cols-[1.4fr_repeat(3,0.8fr)] sm:items-center sm:px-7">
          <div>
            <p className="font-display text-xl">{ecosystemStrip.title}</p>
            <p className="mt-1 text-sm text-cream/75">{ecosystemStrip.body}</p>
          </div>
          {ecosystemStrip.metrics.map((metric) => (
            <div
              key={metric.label}
              className="border-t border-white/15 pt-3 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-5"
            >
              <p className="font-display text-2xl">{metric.label}</p>
              <p className="text-xs text-cream/70">{metric.hint}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
