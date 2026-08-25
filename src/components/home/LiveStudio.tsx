"use client";

import { useState } from "react";
import { ImagePlus, Mic, SendHorizonal } from "lucide-react";
import { cn } from "@/lib/utils";

const topics = [
  {
    id: "autotrophs",
    label: "Autotrophs",
    prompt: "Explain Autotrophs",
    reply:
      "Autotrophs make their own food. Photoautotrophs use light — green plants, algae. Chemoautotrophs use chemical energy — some bacteria.",
  },
  {
    id: "photosynthesis",
    label: "Photosynthesis",
    prompt: "Explain Photosynthesis",
    reply:
      "Carbon dioxide + water → glucose + oxygen, with sunlight and chlorophyll. Light reaction in the thylakoid, dark reaction in the stroma.",
  },
  {
    id: "heat",
    label: "Heat",
    prompt: "Explain Heat",
    reply:
      "Heat is energy moving from a hotter body to a colder one: conduction, convection, radiation. Temperature is not heat — it is how hot the body is.",
  },
  {
    id: "integers",
    label: "Integers",
    prompt: "Explain Integers",
    reply:
      "Integers are the whole numbers and their negatives: … −2, −1, 0, 1, 2 … On a number line, left is smaller. Adding a negative is subtracting.",
  },
] as const;

const parts = [
  {
    id: "leaf",
    label: "Leaf",
    copy: "The workshop. Chloroplasts sit in the mesophyll. Stomata let gases in and out.",
  },
  {
    id: "sun",
    label: "Sunlight",
    copy: "The energy that splits water and lifts electrons in the light reaction.",
  },
  {
    id: "co2",
    label: "CO₂",
    copy: "The carbon source. It enters through stomata and is fixed in the stroma.",
  },
] as const;

const lessonSteps = [
  "See the chapter outline first — know the shape before paragraph one.",
  "Walk the idea with Li, in order, the way a patient teacher would.",
  "Stop and ask. Li stays inside this chapter, not the whole internet.",
];

function HitRadio({
  id,
  name,
  defaultChecked,
}: {
  id: string;
  name: string;
  defaultChecked?: boolean;
}) {
  return (
    <input
      id={id}
      type="radio"
      name={name}
      defaultChecked={defaultChecked}
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
      <div className="li-studio rounded-[2rem] bg-[#123a4a] p-4 text-white shadow-[0_24px_60px_-28px_rgba(18,58,74,0.65)] sm:p-6">
        <div className="mb-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2 px-1">
            <span className="size-2.5 rounded-full bg-[#22c55e]" aria-hidden />
            <p className="text-sm font-semibold">Try it here — Grade 7 · Science</p>
          </div>

          <div className="grid grid-cols-3 gap-1 rounded-full bg-black/20 p-1">
            <label
              htmlFor="li-mode-learn"
              data-tab="learn"
              className="relative isolate flex min-h-12 cursor-pointer items-center justify-center rounded-full px-3 text-center text-sm font-semibold text-white/80"
            >
              <HitRadio id="li-mode-learn" name="li-mode" />
              <span className="pointer-events-none relative z-0">Learn with Li</span>
            </label>
            <label
              htmlFor="li-mode-ask"
              data-tab="ask"
              className="relative isolate flex min-h-12 cursor-pointer items-center justify-center rounded-full px-3 text-center text-sm font-semibold text-white/80"
            >
              <HitRadio id="li-mode-ask" name="li-mode" defaultChecked />
              <span className="pointer-events-none relative z-0">Ask Li</span>
            </label>
            <label
              htmlFor="li-mode-visual"
              data-tab="visual"
              className="relative isolate flex min-h-12 cursor-pointer items-center justify-center rounded-full px-3 text-center text-sm font-semibold text-white/80"
            >
              <HitRadio id="li-mode-visual" name="li-mode" />
              <span className="pointer-events-none relative z-0">Visual learning</span>
            </label>
          </div>
        </div>

        <div className="li-panel li-panel-learn rounded-[1.4rem] bg-[#f6f1e8] p-5 text-foreground sm:p-7">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-[#ec4899] uppercase">
            Guided lesson
          </p>
          <p className="font-display mt-3 text-2xl tracking-tight sm:text-3xl">{lessonSteps[step]}</p>
          <div className="mt-6 flex gap-2">
            {lessonSteps.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setStep(index)}
                className={cn(
                  "h-3 flex-1 cursor-pointer rounded-full",
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
              className="min-h-12 cursor-pointer rounded-full bg-white px-6 text-sm font-semibold ring-1 ring-foreground/10 disabled:opacity-40"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => setStep((value) => Math.min(lessonSteps.length - 1, value + 1))}
              className="min-h-12 cursor-pointer rounded-full bg-[#ec4899] px-6 text-sm font-semibold text-white"
            >
              {step === lessonSteps.length - 1 ? "Last step" : "Next step"}
            </button>
            <label
              htmlFor="li-mode-ask"
              className="inline-flex min-h-12 cursor-pointer items-center rounded-full bg-[#123a4a] px-6 text-sm font-semibold text-white"
            >
              Ask a doubt
            </label>
          </div>
        </div>

        <div className="li-panel li-panel-ask rounded-[1.4rem] bg-[#f6f1e8] p-5 text-foreground sm:p-7">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_220px]">
            <div className="min-w-0">
              <p className="rounded-2xl bg-li-mint px-4 py-3 text-sm leading-relaxed">
                Hi — I am Li. Tap a topic, type a doubt, or use the mic. I stay inside this chapter.
              </p>

              {topics.map((topic) => (
                <div key={topic.id} className={cn("li-reply", `li-reply-${topic.id}`)}>
                  <p className="mt-4 ml-auto max-w-[90%] rounded-2xl bg-li-blue px-4 py-2.5 text-sm font-semibold text-white">
                    {topic.prompt}
                  </p>
                  <div className="mt-3 rounded-2xl bg-[#e8f1ff] px-4 py-3 text-sm leading-relaxed">
                    <p className="font-semibold text-li-blue">{topic.label}</p>
                    <p className="mt-2 text-foreground/75">{topic.reply}</p>
                  </div>
                </div>
              ))}

              {sent ? (
                <div className="mt-4 rounded-2xl bg-li-sky px-4 py-3 text-sm">
                  <p className="font-semibold text-li-blue">You asked</p>
                  <p className="mt-1">{sent}</p>
                  <p className="mt-2 text-foreground/70">
                    Li would start from the definition, then one school example, then a one-mark check.
                  </p>
                </div>
              ) : null}

              <div className="mt-5 flex items-center gap-2">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-foreground/60 ring-1 ring-foreground/10">
                  <ImagePlus className="size-4" />
                </span>
                <input
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") sendDraft();
                  }}
                  placeholder="Ask a question about this chapter…"
                  className="h-12 min-w-0 flex-1 rounded-full bg-white px-4 text-sm outline-none ring-1 ring-foreground/10 focus:ring-2 focus:ring-li-blue"
                />
                <button
                  type="button"
                  aria-pressed={listening}
                  aria-label="Voice mode"
                  onClick={() => setListening((value) => !value)}
                  className={cn(
                    "flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full",
                    listening ? "bg-li-green text-white" : "bg-white text-foreground/70 ring-1 ring-foreground/10"
                  )}
                >
                  <Mic className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label="Send"
                  onClick={sendDraft}
                  className="flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#f5d76e] text-[#123a4a]"
                >
                  <SendHorizonal className="size-4" />
                </button>
              </div>
              {listening ? (
                <p className="mt-2 text-xs font-medium text-li-green">
                  Voice mode on — speak, then Li answers here.
                </p>
              ) : null}
            </div>

            <aside>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-li-blue uppercase">
                Suggested
              </p>
              <div className="mt-3 flex flex-col gap-2">
                {topics.map((topic, index) => (
                  <label
                    key={topic.id}
                    data-topic={topic.id}
                    className="relative isolate flex min-h-14 cursor-pointer items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[#123a4a] ring-1 ring-foreground/10"
                  >
                    <HitRadio
                      id={`li-topic-${topic.id}`}
                      name="li-topic"
                      defaultChecked={index === 0}
                    />
                    <span className="pointer-events-none relative z-0">{topic.label}</span>
                  </label>
                ))}
              </div>
            </aside>
          </div>
        </div>

        <div className="li-panel li-panel-visual rounded-[1.4rem] bg-[#f6f1e8] p-5 text-foreground sm:p-7">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-[#8b5cf6] uppercase">
            Tap a part of photosynthesis
          </p>
          <p className="mt-2 text-sm text-foreground/65">
            Each card is a live control — the note below changes as you tap.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {parts.map((part, index) => (
              <label
                key={part.id}
                data-part={part.id}
                className="relative isolate flex min-h-28 cursor-pointer flex-col justify-between rounded-[1.4rem] bg-white p-5 ring-1 ring-foreground/10"
              >
                <HitRadio
                  id={`li-part-${part.id}`}
                  name="li-part"
                  defaultChecked={index === 0}
                />
                <span className="pointer-events-none text-xs font-semibold tracking-[0.18em] text-foreground/40 uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="pointer-events-none mt-6 text-xl font-semibold">{part.label}</span>
              </label>
            ))}
          </div>
          {parts.map((part) => (
            <p
              key={part.id}
              className={cn(
                "li-part-copy mt-5 rounded-[1.4rem] bg-li-lavender px-5 py-4 text-sm leading-relaxed",
                `li-part-${part.id}`
              )}
            >
              <span className="font-semibold">{part.label}. </span>
              {part.copy}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
