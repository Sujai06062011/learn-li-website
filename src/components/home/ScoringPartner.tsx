import { SectionLabel } from "@/components/ui/SectionLabel";
import { scoringPartner } from "@/lib/site";
import { cn } from "@/lib/utils";

const kindClass = {
  miss: "bg-[#fff1d4]",
  wrong: "bg-[#f7dfe2]",
  inc: "bg-[#e6eef8]",
  good: "bg-[#e1f2e8]",
};

export function ScoringPartner() {
  return (
    <section id="scoring" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-12 sm:px-8">
      <div className="li-score overflow-hidden rounded-[2rem] bg-foreground p-6 text-cream shadow-[0_22px_50px_-28px_rgba(27,63,71,0.55)] sm:p-8 lg:p-10">
        <input
          id="li-score-science"
          type="radio"
          name="li-score-mode"
          className="sr-only"
          defaultChecked
        />
        <input id="li-score-math" type="radio" name="li-score-mode" className="sr-only" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <SectionLabel className="text-[#9fd4c6]">{scoringPartner.kicker}</SectionLabel>
            <h2 className="font-display mt-3 text-3xl tracking-tight sm:text-5xl">
              {scoringPartner.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-cream/75 sm:text-base">
              {scoringPartner.body}
            </p>
          </div>
          <div className="flex shrink-0 self-start rounded-full bg-white/10 p-1">
            <label
              htmlFor="li-score-science"
              className="cursor-pointer rounded-full px-4 py-2 text-sm font-semibold text-cream/80"
            >
              Science
            </label>
            <label
              htmlFor="li-score-math"
              className="cursor-pointer rounded-full px-4 py-2 text-sm font-semibold text-cream/80"
            >
              Mathematics
            </label>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
          <article className="rounded-3xl bg-white p-5 text-foreground sm:p-6">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-foreground/45 uppercase">
              Student Answer
            </p>
            <div className="li-score-science mt-4 min-h-[13rem] rounded-2xl bg-[#f6f5f0] p-4 text-sm leading-relaxed">
              <p>{scoringPartner.science.answer}</p>
              <p className="mt-4 italic text-foreground/55">{scoringPartner.science.answerNote}</p>
            </div>
            <div className="li-score-math mt-4 min-h-[13rem] rounded-2xl bg-[#f6f5f0] p-4 text-sm leading-relaxed">
              {scoringPartner.math.answerLines.map((line) => (
                <p key={line} className={line.startsWith("Solve") ? "font-semibold" : undefined}>
                  {line}
                </p>
              ))}
              <p className="mt-4 italic text-foreground/55">{scoringPartner.math.answerNote}</p>
            </div>
          </article>

          <article className="rounded-3xl bg-white p-5 text-foreground sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.16em] text-foreground/45 uppercase">
                  Scoring Partner Feedback
                </p>
                <p className="mt-1 text-xs text-foreground/45">Example evaluation</p>
              </div>
              <p className="font-display text-4xl tracking-tight">8.5/10</p>
            </div>
            <div className="li-score-science mt-4 grid gap-2">
              {scoringPartner.science.items.map((item) => (
                <p
                  key={item.text}
                  className={cn(
                    "rounded-2xl px-3.5 py-3 text-[13px] font-semibold leading-relaxed",
                    kindClass[item.kind]
                  )}
                >
                  {item.text}
                </p>
              ))}
            </div>
            <div className="li-score-math mt-4 grid gap-2">
              {scoringPartner.math.items.map((item) => (
                <div key={item.label} className="rounded-2xl bg-[#f3f4f2] px-3.5 py-3">
                  <p className="text-[13px] font-semibold">{item.label}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-foreground/70">{item.text}</p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <p className="mt-5 text-sm text-cream/75">
          <span className="mr-1.5 text-li-green">✓</span>
          {scoringPartner.note}
        </p>
      </div>
    </section>
  );
}
