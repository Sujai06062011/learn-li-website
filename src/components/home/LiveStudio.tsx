"use client";

import { useState } from "react";
import { ImagePlus, Mic, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const topics = [
  {
    id: "autotrophs",
    label: "Autotrophs",
    prompt: "Explain Autotrophs",
    reply:
      "Autotrophs make their own food. Photoautotrophs use light — green plants, algae. Chemoautotrophs use chemical energy — some bacteria. That is why a leaf is not just a leaf; it is a kitchen.",
  },
  {
    id: "photosynthesis",
    label: "Photosynthesis",
    prompt: "Explain Photosynthesis",
    reply:
      "Photosynthesis: carbon dioxide + water → glucose + oxygen, in the presence of sunlight and chlorophyll. Light reaction in the thylakoid, dark reaction in the stroma.",
  },
  {
    id: "heat",
    label: "Heat",
    prompt: "Explain Heat",
    reply:
      "Heat is energy in transit, from a hotter body to a colder one. Conduction, convection, radiation — three paths. Temperature is not heat; it is how hot the body is.",
  },
  {
    id: "integers",
    label: "Integers",
    prompt: "Explain Integers",
    reply:
      "Integers are the whole numbers and their negatives: … −2, −1, 0, 1, 2 … On a number line, left is smaller. Adding a negative is the same as subtracting.",
  },
] as const;

const lessonSteps = [
  "Open the chapter outline — know the shape before the first paragraph.",
  "Walk the idea with Li, in order, the way a patient teacher would.",
  "Stop and ask. Li stays inside this chapter, not the whole internet.",
];

function HitRadio({
  id,
  name,
  defaultChecked,
  onChange,
}: {
  id: string;
  name: string;
  defaultChecked?: boolean;
  onChange?: () => void;
}) {
  return (
    <input
      id={id}
      type="radio"
      name={name}
      defaultChecked={defaultChecked}
      onChange={onChange}
      className="li-hit"
    />
  );
}

export function LiveStudio() {
  const [step, setStep] = useState(0);
  const [listening, setListening] = useState(false);
  const [draft, setDraft] = useState("");
  const [sent, setSent] = useState<string | null>(null);

  function sendDraft() {
    const text = draft.trim();
    if (!text) return;
    setSent(text);
    setDraft("");
  }

  return (
    <section id="try-li" className="relative z-20 mx-auto max-w-6xl scroll-mt-24 px-5 py-6 sm:px-8">
      <div className="li-studio overflow-hidden rounded-3xl bg-white text-foreground shadow-[0_18px_50px_-28px_rgba(27,63,71,0.4)] ring-1 ring-foreground/8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-foreground/8 bg-gradient-to-r from-li-mint/80 via-white to-li-sky/80 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-li-green opacity-60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-li-green" />
            </span>
            <p className="text-sm font-semibold">Try it here — Grade 7 · Science</p>
          </div>

          <div className="grid min-w-[14rem] flex-1 grid-cols-2 gap-1 rounded-full bg-cream p-1 sm:min-w-0 sm:flex-none">
            <label
              htmlFor="li-mode-learn"
              data-tab="learn"
              className="relative isolate flex min-h-11 cursor-pointer items-center justify-center rounded-full px-3 text-center text-xs font-semibold text-foreground/50"
            >
              <HitRadio id="li-mode-learn" name="li-mode" />
              <span className="pointer-events-none relative z-0">Learn with Li</span>
            </label>
            <label
              htmlFor="li-mode-ask"
              data-tab="ask"
              className="relative isolate flex min-h-11 cursor-pointer items-center justify-center rounded-full px-3 text-center text-xs font-semibold text-foreground/50"
            >
              <HitRadio id="li-mode-ask" name="li-mode" defaultChecked />
              <span className="pointer-events-none relative z-0">Ask Li</span>
            </label>
          </div>
        </div>

        <div className="li-panel li-panel-learn p-5 sm:p-8">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-[#ec4899] uppercase">
            Guided lesson · Nutrition in Plants
          </p>
          <p className="mt-3 text-lg font-semibold leading-relaxed sm:text-xl">{lessonSteps[step]}</p>
          <div className="mt-6 flex gap-2">
            {lessonSteps.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setStep(index)}
                className={cn(
                  "h-2 flex-1 cursor-pointer rounded-full transition",
                  index <= step ? "bg-[#ec4899]" : "bg-foreground/10"
                )}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <button
              type="button"
              disabled={step === 0}
              onClick={() => setStep((value) => Math.max(0, value - 1))}
              className="min-h-11 cursor-pointer rounded-full bg-cream px-5 text-sm font-semibold disabled:opacity-40"
            >
              Back
            </button>
            {step === lessonSteps.length - 1 ? (
              <label
                htmlFor="li-mode-ask"
                className="inline-flex min-h-11 cursor-pointer items-center rounded-full bg-[#ec4899] px-5 text-sm font-semibold text-white"
              >
                Ask a doubt →
              </label>
            ) : (
              <button
                type="button"
                onClick={() => setStep((value) => value + 1)}
                className="min-h-11 cursor-pointer rounded-full bg-[#ec4899] px-5 text-sm font-semibold text-white"
              >
                Next
              </button>
            )}
          </div>
        </div>

        <div className="li-panel li-panel-ask">
          <div className="grid gap-0 lg:grid-cols-[1fr_16rem]">
            <div className="flex min-h-[320px] flex-col p-5">
              <p className="rounded-2xl bg-li-mint px-4 py-3 text-sm leading-relaxed">
                Hi — I am Li. Tap a topic, type a doubt, or use the mic. I stay inside this chapter.
              </p>

              {sent ? (
                <>
                  <p className="mt-3 ml-auto max-w-[90%] rounded-full bg-li-blue px-4 py-2 text-sm font-semibold text-white">
                    {sent}
                  </p>
                  <div className="mt-3 rounded-2xl bg-li-sky px-4 py-3 text-sm leading-relaxed">
                    <p className="font-semibold text-li-blue">Your question</p>
                    <p className="mt-2">
                      Li, on this chapter: “{sent}” — start from the definition, then one school
                      example, then a one-mark check.
                    </p>
                  </div>
                </>
              ) : (
                topics.map((topic) => (
                  <div key={topic.id} className={cn("li-reply", `li-reply-${topic.id}`)}>
                    <p className="mt-3 ml-auto max-w-[90%] rounded-full bg-li-blue px-4 py-2 text-sm font-semibold text-white">
                      {topic.prompt}
                    </p>
                    <div className="mt-3 rounded-2xl bg-li-sky px-4 py-3 text-sm leading-relaxed">
                      <p className="font-semibold text-li-blue">{topic.label}</p>
                      <p className="mt-2">{topic.reply}</p>
                    </div>
                  </div>
                ))
              )}

              <div className="mt-auto flex items-center gap-2 pt-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-cream text-foreground/70">
                  <ImagePlus className="size-4" />
                </span>
                <input
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") sendDraft();
                  }}
                  placeholder="Ask a question about this chapter…"
                  className="h-10 min-w-0 flex-1 rounded-full bg-cream px-4 text-sm outline-none ring-1 ring-foreground/10 focus:ring-2 focus:ring-li-blue"
                />
                <button
                  type="button"
                  aria-pressed={listening}
                  aria-label="Voice mode"
                  onClick={() => setListening((value) => !value)}
                  className={cn(
                    "flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full transition",
                    listening ? "bg-li-green text-white" : "bg-cream text-foreground/70 hover:bg-li-mint"
                  )}
                >
                  <Mic className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label="Send"
                  onClick={sendDraft}
                  className="flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-li-blue text-white"
                >
                  <Send className="size-4" />
                </button>
              </div>
              {listening ? (
                <p className="mt-2 text-xs font-medium text-li-green">
                  Voice mode on — speak, then Li answers in this chapter.
                </p>
              ) : null}
            </div>

            <aside className="border-t border-foreground/8 bg-cream/60 p-4 lg:border-t-0 lg:border-l">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-li-blue uppercase">
                Suggested
              </p>
              <div className="mt-3 flex flex-col gap-2">
                {topics.map((topic, index) => (
                  <label
                    key={topic.id}
                    data-topic={topic.id}
                    className="relative isolate flex min-h-11 cursor-pointer items-center rounded-2xl bg-white px-3 py-2.5 text-left text-sm font-medium text-foreground"
                  >
                    <HitRadio
                      id={`li-topic-${topic.id}`}
                      name="li-topic"
                      defaultChecked={index === 0}
                      onChange={() => setSent(null)}
                    />
                    <span className="pointer-events-none relative z-0">{topic.label}</span>
                  </label>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
