"use client";

import { useEffect, useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const topics = [
  {
    id: "photo",
    chip: "Photosynthesis",
    prompt: "what is photosynthesis ?",
    reply: [
      { heading: "Photosynthesis", text: "The process by which green plants make food using sunlight." },
      {
        heading: "Definition",
        text: "Carbon dioxide and water become glucose and oxygen, with chlorophyll and light.",
      },
      { heading: "Chemical equation", text: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂" },
    ],
  },
  {
    id: "heat",
    chip: "Heat",
    prompt: "what is heat ?",
    reply: [
      { heading: "Heat", text: "Energy moving from a hotter body to a colder one." },
      { heading: "Paths", text: "Conduction, convection, radiation — three ways the energy travels." },
      { heading: "Not temperature", text: "Temperature is how hot the body is. Heat is the energy in transit." },
    ],
  },
  {
    id: "integers",
    chip: "Integers",
    prompt: "explain integers",
    reply: [
      { heading: "Integers", text: "The whole numbers and their negatives: … −2, −1, 0, 1, 2 …" },
      { heading: "Number line", text: "Left is smaller. Adding a negative is the same as subtracting." },
      { heading: "School check", text: "(−3) + 8 = 5. Start at −3, move eight to the right." },
    ],
  },
] as const;

type TopicId = (typeof topics)[number]["id"];

export function AskLiDemo() {
  const [topicId, setTopicId] = useState<TopicId>("photo");
  const [showReply, setShowReply] = useState(true);
  const topic = topics.find((item) => item.id === topicId) ?? topics[0];

  useEffect(() => {
    setShowReply(false);
    const timer = window.setTimeout(() => setShowReply(true), 450);
    return () => window.clearTimeout(timer);
  }, [topicId]);

  function pick(id: TopicId) {
    setTopicId(id);
    setShowReply(false);
  }

  return (
    <div className="li-phone mx-auto flex w-full max-w-[22rem] flex-col overflow-hidden rounded-[1.8rem] bg-white shadow-[0_28px_60px_-28px_rgba(13,148,136,0.55)] ring-1 ring-foreground/10">
      <div className="flex items-center justify-between bg-[#0d9488] px-4 py-3 text-white">
        <div className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-full bg-white/15">
            <Sparkles className="size-4" />
          </span>
          <div>
            <p className="text-sm font-semibold">Ask Li</p>
            <p className="text-[11px] text-white/80">Your AI learning companion</p>
          </div>
        </div>
        <span className="flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.14em] uppercase">
          <span className="size-1.5 animate-pulse rounded-full bg-[#bbf7d0]" />
          Live
        </span>
      </div>

      <div className="flex min-h-[22rem] flex-1 flex-col gap-3 bg-[#f8fafc] p-4">
        <div className="flex items-end gap-2">
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#0d9488] text-white">
            <Sparkles className="size-3.5" />
          </span>
          <p className="max-w-[85%] rounded-2xl rounded-bl-md bg-white px-3 py-2 text-sm leading-relaxed shadow-sm">
            Hi! I am Li, your AI learning companion. Ask me anything about your studies.
          </p>
        </div>

        <div key={`${topic.id}-user`} className="li-chat-enter ml-auto flex max-w-[85%] items-end gap-2">
          <p className="rounded-2xl rounded-br-md bg-[#0d9488] px-3 py-2 text-sm font-medium text-white">
            {topic.prompt}
          </p>
        </div>

        {showReply ? (
          <div key={`${topic.id}-reply`} className="li-chat-enter flex items-end gap-2">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#0d9488] text-white">
              <Sparkles className="size-3.5" />
            </span>
            <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-white px-3 py-2 text-sm leading-relaxed shadow-sm">
              {topic.reply.map((block) => (
                <p key={block.heading} className="mt-2 first:mt-0">
                  <span className="font-semibold text-[#0f766e]">{block.heading}. </span>
                  {block.text}
                </p>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex items-end gap-2">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#0d9488] text-white">
              <Sparkles className="size-3.5" />
            </span>
            <div className="flex gap-1 rounded-2xl rounded-bl-md bg-white px-3 py-3 shadow-sm">
              <span className="li-dot size-1.5 rounded-full bg-[#0d9488]" />
              <span className="li-dot li-dot-2 size-1.5 rounded-full bg-[#0d9488]" />
              <span className="li-dot li-dot-3 size-1.5 rounded-full bg-[#0d9488]" />
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-foreground/8 bg-white p-3">
        <p className="mb-2 text-[10px] font-semibold tracking-[0.16em] text-[#0d9488] uppercase">
          Try asking
        </p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {topics.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => pick(item.id)}
              className={cn(
                "cursor-pointer rounded-full px-3 py-1.5 text-xs font-semibold transition",
                topicId === item.id
                  ? "bg-[#0d9488] text-white"
                  : "bg-[#f0fdfa] text-[#0f766e] hover:bg-[#ccfbf1]"
              )}
            >
              {item.chip}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="h-10 flex-1 rounded-full bg-[#f1f5f9] px-4 text-sm leading-10 text-foreground/40">
            Ask anything about your studies…
          </div>
          <span className="flex size-10 items-center justify-center rounded-full bg-[#0d9488] text-white">
            <Send className="size-4" />
          </span>
        </div>
      </div>
    </div>
  );
}
