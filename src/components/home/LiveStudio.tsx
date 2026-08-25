"use client";

import { useState } from "react";
import { ImagePlus, Mic, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const modes = [
  { id: "learn", label: "Learn with Li", accent: "bg-[#ec4899]" },
  { id: "ask", label: "Ask Li", accent: "bg-[#10b981]" },
  { id: "visual", label: "Visual learning", accent: "bg-[#8b5cf6]" },
] as const;

const topics = [
  {
    id: "autotrophs",
    label: "Autotrophs",
    reply:
      "Autotrophs make their own food. Photoautotrophs use light — green plants, algae. Chemoautotrophs use chemical energy — some bacteria. That is why a leaf is not just a leaf; it is a kitchen.",
  },
  {
    id: "photosynthesis",
    label: "Photosynthesis",
    reply:
      "Photosynthesis: carbon dioxide + water → glucose + oxygen, in the presence of sunlight and chlorophyll. Light reaction in the thylakoid, dark reaction in the stroma.",
  },
  {
    id: "heat",
    label: "Heat",
    reply:
      "Heat is energy in transit, from a hotter body to a colder one. Conduction, convection, radiation — three paths. Temperature is not heat; it is how hot the body is.",
  },
  {
    id: "integers",
    label: "Integers",
    reply:
      "Integers are the whole numbers and their negatives: … −2, −1, 0, 1, 2 … On a number line, left is smaller. Adding a negative is the same as subtracting.",
  },
];

const lessonSteps = [
  "Open the chapter outline — know the shape before the first paragraph.",
  "Walk the idea with Li, in order, the way a patient teacher would.",
  "Stop and ask. Li stays inside this chapter, not the whole internet.",
];

const visualParts = [
  { id: "leaf", label: "Leaf", note: "The workshop. Stomata let gases in and out." },
  { id: "sun", label: "Sunlight", note: "The energy that splits water and lifts electrons." },
  { id: "co2", label: "CO₂", note: "The carbon source. Enters through stomata." },
];

export function LiveStudio() {
  const [mode, setMode] = useState<(typeof modes)[number]["id"]>("ask");
  const [topicId, setTopicId] = useState(topics[0].id);
  const [step, setStep] = useState(0);
  const [partId, setPartId] = useState(visualParts[0].id);
  const [listening, setListening] = useState(false);
  const [draft, setDraft] = useState("");
  const [custom, setCustom] = useState<string | null>(null);

  const topic = topics.find((item) => item.id === topicId) ?? topics[0];
  const part = visualParts.find((item) => item.id === partId) ?? visualParts[0];

  function sendDraft() {
    const text = draft.trim();
    if (!text) return;
    setCustom(
      `Li, on this chapter: “${text}” — start from the definition, then one school example, then a one-mark check.`
    );
    setDraft("");
    setMode("ask");
  }

  return (
    <section className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
      <div className="overflow-hidden rounded-3xl bg-white shadow-[0_18px_50px_-28px_rgba(27,63,71,0.4)] ring-1 ring-foreground/8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-foreground/8 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-li-green opacity-60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-li-green" />
            </span>
            <p className="text-sm font-semibold">Try it here — Grade 7 · Science</p>
          </div>
          <div className="flex flex-wrap gap-1 rounded-full bg-cream p-1">
            {modes.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setMode(item.id)}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs font-semibold transition",
                  mode === item.id ? "bg-white text-foreground shadow-sm" : "text-foreground/50 hover:text-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {mode === "ask" ? (
          <div className="grid gap-0 lg:grid-cols-[1fr_16rem]">
            <div className="flex min-h-[320px] flex-col p-5">
              <p className="rounded-2xl bg-li-mint px-4 py-3 text-sm leading-relaxed">
                Hi — I am Li. Tap a topic, type a doubt, or use the mic. I stay inside this chapter.
              </p>
              <button
                type="button"
                className="mt-3 self-end rounded-full bg-li-blue px-4 py-2 text-sm font-semibold text-white"
                onClick={() => setCustom(null)}
              >
                Explain {topic.label}
              </button>
              <div className="mt-3 rounded-2xl bg-li-sky px-4 py-3 text-sm leading-relaxed">
                <p className="font-semibold text-li-blue">{custom ? "Your question" : topic.label}</p>
                <p className="mt-2">{custom ?? topic.reply}</p>
              </div>
              <div className="mt-auto flex items-center gap-2 pt-5">
                <button
                  type="button"
                  aria-label="Attach an image"
                  className="flex size-10 items-center justify-center rounded-full bg-cream text-foreground/70 hover:bg-li-cyan"
                >
                  <ImagePlus className="size-4" />
                </button>
                <input
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") sendDraft();
                  }}
                  placeholder="Ask a question about this chapter…"
                  className="h-10 flex-1 rounded-full bg-cream px-4 text-sm outline-none ring-1 ring-foreground/10 focus:ring-li-blue"
                />
                <button
                  type="button"
                  aria-pressed={listening}
                  aria-label="Voice mode"
                  onClick={() => setListening((value) => !value)}
                  className={cn(
                    "flex size-10 items-center justify-center rounded-full transition",
                    listening ? "bg-li-green text-white" : "bg-cream text-foreground/70 hover:bg-li-mint"
                  )}
                >
                  <Mic className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label="Send"
                  onClick={sendDraft}
                  className="flex size-10 items-center justify-center rounded-full bg-li-blue text-white"
                >
                  <Send className="size-4" />
                </button>
              </div>
              {listening ? (
                <p className="mt-2 text-xs font-medium text-li-green">Voice mode on — speak, then Li answers in this chapter.</p>
              ) : null}
            </div>
            <aside className="border-t border-foreground/8 bg-cream/60 p-4 lg:border-t-0 lg:border-l">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-li-blue uppercase">
                Suggested
              </p>
              <div className="mt-3 flex flex-col gap-2">
                {topics.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setTopicId(item.id);
                      setCustom(null);
                    }}
                    className={cn(
                      "rounded-2xl px-3 py-2.5 text-left text-sm font-medium transition",
                      topicId === item.id && !custom
                        ? "bg-li-blue text-white shadow-sm"
                        : "bg-white hover:bg-li-sky"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </aside>
          </div>
        ) : null}

        {mode === "learn" ? (
          <div className="p-5 sm:p-8">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-li-blue uppercase">
              Guided lesson · Nutrition in Plants
            </p>
            <p className="mt-3 text-lg font-semibold">{lessonSteps[step]}</p>
            <div className="mt-6 flex gap-2">
              {lessonSteps.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setStep(index)}
                  className={cn(
                    "h-2 flex-1 rounded-full transition",
                    index <= step ? "bg-[#ec4899]" : "bg-foreground/10"
                  )}
                  aria-label={`Step ${index + 1}`}
                />
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <button
                type="button"
                disabled={step === 0}
                onClick={() => setStep((value) => Math.max(0, value - 1))}
                className="rounded-full bg-cream px-4 py-2 text-sm font-semibold disabled:opacity-40"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep((value) => Math.min(lessonSteps.length - 1, value + 1))}
                className="rounded-full bg-[#ec4899] px-4 py-2 text-sm font-semibold text-white"
              >
                {step === lessonSteps.length - 1 ? "Ask a doubt →" : "Next"}
              </button>
            </div>
          </div>
        ) : null}

        {mode === "visual" ? (
          <div className="p-5 sm:p-8">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-[#8b5cf6] uppercase">
              Tap a part of the idea
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {visualParts.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setPartId(item.id)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-semibold transition",
                    partId === item.id ? "bg-[#8b5cf6] text-white" : "bg-li-lavender hover:bg-[#ddd6fe]"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <p className="mt-6 rounded-3xl bg-li-lavender px-5 py-4 text-sm leading-relaxed">
              <span className="font-semibold">{part.label}. </span>
              {part.note}
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
