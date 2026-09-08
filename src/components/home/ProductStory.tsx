import Image from "next/image";
import { AskLiDemo } from "@/components/home/AskLiDemo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  lifecycle,
  productShots,
  schoolPartner,
  scoreBands,
  teacherSupport,
} from "@/lib/site";

function Shot({
  src,
  alt,
  width,
  height,
  priority,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-[0_22px_50px_-28px_rgba(27,63,71,0.45)] ring-1 ring-foreground/8">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-full"
      />
    </div>
  );
}

export function ProductStory() {
  return (
    <>
      <section id="schools" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-10 sm:px-8">
        <SectionLabel>{schoolPartner.kicker}</SectionLabel>
        <h2 className="font-display mt-3 max-w-3xl text-3xl tracking-tight sm:text-5xl">
          {schoolPartner.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70">
          {schoolPartner.body}
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {schoolPartner.points.map((point, index) => (
            <article key={point.title} className="border-t border-foreground/10 pt-5">
              <p className="font-display text-2xl text-foreground/20">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-semibold">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">{point.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="teachers" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-6 sm:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#8b5cf6,#6366f1)] p-8 text-white sm:p-12">
          <p className="text-[11px] tracking-[0.22em] uppercase opacity-80">
            {teacherSupport.kicker}
          </p>
          <h2 className="font-display mt-3 max-w-3xl text-3xl tracking-tight sm:text-4xl">
            {teacherSupport.title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
            {teacherSupport.body}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {teacherSupport.points.map((point) => (
              <div key={point.title} className="rounded-2xl bg-white/12 p-5">
                <h3 className="font-semibold">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lifecycle" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-12 sm:px-8">
        <SectionLabel>Student lifecycle</SectionLabel>
        <h2 className="font-display mt-3 max-w-2xl text-3xl tracking-tight sm:text-4xl">
          Features mapped to the hour a student actually lives.
        </h2>
        <ol className="mt-10">
          {lifecycle.map((item, index) => (
            <li
              key={item.n}
              className="grid gap-2 border-t border-foreground/10 py-6 sm:grid-cols-[4.5rem_8rem_7rem_1fr] sm:items-baseline sm:gap-6"
            >
              <span className="font-display text-2xl text-li-blue">{item.n}</span>
              <p className="text-[11px] font-semibold tracking-[0.16em] text-foreground/45 uppercase">
                {item.moment}
              </p>
              <p className="font-semibold">{item.feature}</p>
              <p className="text-sm leading-relaxed text-foreground/65">{item.body}</p>
              {index === lifecycle.length - 1 ? (
                <span className="sr-only">End of lifecycle</span>
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      <section id="every-student" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-6 sm:px-8">
        <SectionLabel>{scoreBands.kicker}</SectionLabel>
        <h2 className="font-display mt-3 max-w-2xl text-3xl tracking-tight sm:text-4xl">
          {scoreBands.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70">
          {scoreBands.body}
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {scoreBands.bands.map((band) => (
            <article
              key={band.label}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-foreground/8 sm:p-8"
            >
              <p className="text-[11px] font-semibold tracking-[0.18em] text-li-blue uppercase">
                {band.range}
              </p>
              <h3 className="mt-3 text-xl font-semibold">{band.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">{band.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="dashboard" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-12 sm:px-8">
        <SectionLabel>{productShots.dashboard.kicker}</SectionLabel>
        <h2 className="font-display mt-3 max-w-3xl text-3xl tracking-tight sm:text-4xl">
          {productShots.dashboard.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70">
          {productShots.dashboard.body}
        </p>
        <div className="mt-8">
          <Shot
            src={productShots.dashboard.src}
            alt={productShots.dashboard.alt}
            width={productShots.dashboard.width}
            height={productShots.dashboard.height}
            priority
          />
        </div>
      </section>

      <section id="ask-li" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-8 sm:px-8">
        <SectionLabel>{productShots.askLi.kicker}</SectionLabel>
        <h2 className="font-display mt-3 max-w-3xl text-3xl tracking-tight sm:text-4xl">
          {productShots.askLi.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70">
          {productShots.askLi.body}
        </p>
        <div className="mt-8 flex justify-center">
          <AskLiDemo />
        </div>
        <p className="mt-4 text-center text-xs text-foreground/50">
          Tap Photosynthesis, Heat, or Integers — the chat plays the reply the way a real Ask Li
          window does.
        </p>
      </section>

      <section id="interactive" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-12 sm:px-8">
        <SectionLabel>{productShots.interactive.kicker}</SectionLabel>
        <h2 className="font-display mt-3 max-w-3xl text-3xl tracking-tight sm:text-4xl">
          {productShots.interactive.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70">
          {productShots.interactive.body}
        </p>
        <div className="mt-8 grid gap-4">
          {productShots.interactive.shots.map((shot) => (
            <Shot
              key={shot.src}
              src={shot.src}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
            />
          ))}
        </div>
      </section>

      <section id="scoring" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-12 sm:px-8">
        <SectionLabel>{productShots.scoring.kicker}</SectionLabel>
        <h2 className="font-display mt-3 max-w-3xl text-3xl tracking-tight sm:text-4xl">
          {productShots.scoring.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70">
          {productShots.scoring.body}
        </p>
        <div className="mt-8 grid gap-4">
          {productShots.scoring.shots.map((shot) => (
            <Shot
              key={shot.src}
              src={shot.src}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
            />
          ))}
        </div>
      </section>

      <section id="create-test" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-12 sm:px-8">
        <SectionLabel>{productShots.createTest.kicker}</SectionLabel>
        <h2 className="font-display mt-3 max-w-3xl text-3xl tracking-tight sm:text-4xl">
          {productShots.createTest.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70">
          {productShots.createTest.body}
        </p>
        <div className="mt-8">
          <Shot
            src={productShots.createTest.src}
            alt={productShots.createTest.alt}
            width={productShots.createTest.width}
            height={productShots.createTest.height}
          />
        </div>
      </section>
    </>
  );
}
