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

          <div className="grid min-w-[18rem] flex-1 grid-cols-3 gap-1 rounded-full bg-cream p-1 sm:min-w-0 sm:flex-none">
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
            <label
              htmlFor="li-mode-visual"
              data-tab="visual"
              className="relative isolate flex min-h-11 cursor-pointer items-center justify-center rounded-full px-3 text-center text-xs font-semibold text-foreground/50"
            >
              <HitRadio id="li-mode-visual" name="li-mode" />
              <span className="pointer-events-none relative z-0">Visual learning</span>
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

        <div className="li-panel li-panel-visual p-5 sm:p-8">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-[#8b5cf6] uppercase">
            Tap a part of the idea
          </p>
          <p className="mt-2 max-w-xl text-sm text-foreground/65">
            Photosynthesis as a small scene — tap the leaf, the sun, or the air.
          </p>

          <div className="mt-5 overflow-hidden rounded-3xl bg-gradient-to-b from-[#dbeafe] via-li-mint to-[#fde68a] p-5 sm:p-8">
            <div className="relative mx-auto flex min-h-[220px] max-w-lg items-end justify-center">
              <label
                htmlFor="li-part-sun"
                data-part="sun"
                className="li-scene absolute top-2 right-6 isolate flex size-16 cursor-pointer items-center justify-center rounded-full bg-[#facc15] text-2xl shadow-[0_8px_24px_-8px_rgba(250,204,21,0.9)] ring-4 ring-white/70 sm:size-20"
              >
                <HitRadio id="li-part-sun" name="li-part" />
                <span className="pointer-events-none">☀</span>
              </label>
              <label
                htmlFor="li-part-co2"
                data-part="co2"
                className="li-scene absolute top-10 left-4 isolate cursor-pointer rounded-full bg-white/80 px-3 py-2 text-xs font-semibold text-[#0ea5e9] shadow-sm sm:left-8 sm:text-sm"
              >
                <HitRadio id="li-part-co2" name="li-part" />
                <span className="pointer-events-none">CO₂ in the air</span>
              </label>
              <label
                htmlFor="li-part-leaf"
                data-part="leaf"
                className="li-scene relative isolate z-[1] mb-2 cursor-pointer"
              >
                <HitRadio id="li-part-leaf" name="li-part" defaultChecked />
                <svg
                  viewBox="0 0 180 140"
                  className="pointer-events-none h-36 w-44 sm:h-44 sm:w-56"
                  aria-hidden
                >
                  <path
                    d="M20 110 C40 40 90 10 160 30 C120 70 90 110 70 128 C48 122 30 120 20 110Z"
                    fill="#22c55e"
                  />
                  <path
                    d="M70 128 C90 80 120 50 160 30"
                    fill="none"
                    stroke="#166534"
                    strokeWidth="3"
                  />
                  <path d="M78 70 Q100 78 118 62" fill="none" stroke="#166534" strokeWidth="2" />
                  <path d="M72 92 Q92 98 108 84" fill="none" stroke="#166534" strokeWidth="2" />
                </svg>
              </label>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {parts.map((part) => (
              <label
                key={part.id}
                htmlFor={`li-part-${part.id}`}
                data-part={part.id}
                className="li-chip inline-flex min-h-11 cursor-pointer items-center rounded-full bg-li-lavender px-4 text-sm font-semibold"
              >
                {part.label}
              </label>
            ))}
          </div>

          {parts.map((part) => (
            <p
              key={part.id}
              className={cn(
                "li-part-copy mt-6 rounded-3xl bg-li-lavender px-5 py-4 text-sm leading-relaxed",
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
