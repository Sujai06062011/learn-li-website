import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ecosystemStrip, heroCopy, heroProof, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SchoolHero() {
  return (
    <>
      <section className="relative mx-auto max-w-7xl overflow-hidden px-5 pt-10 pb-8 sm:px-8 sm:pt-14">
        <div className="pointer-events-none absolute -top-40 -right-20 size-[28rem] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18),transparent_70%)]" />
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white/70 px-3 py-1.5 text-[12px] font-semibold">
              <span className="size-2 rounded-full bg-li-green" />
              {heroCopy.kicker}
            </p>
            <h1 className="font-display mt-5 text-[2.35rem] leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[3.35rem] xl:text-[3.7rem]">
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

          <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_22px_50px_-28px_rgba(27,63,71,0.45)] ring-1 ring-foreground/8">
            <Image
              src="/product/science-come-to-life.png?v=20260915"
              alt="Interactive maths and science learning: flower anatomy, cell voltage, linear programming, and a DNA helix explorer."
              width={1374}
              height={1145}
              priority
              unoptimized
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 pb-4 sm:px-8">
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
