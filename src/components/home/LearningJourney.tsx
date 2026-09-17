import {
  BookOpen,
  ClipboardCheck,
  Compass,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { learningJourney } from "@/lib/site";
import { cn } from "@/lib/utils";

const stages = [
  {
    n: "01",
    color: "#2C7E69",
    icon: BookOpen,
    side: "left" as const,
    area: "s1",
  },
  {
    n: "02",
    color: "#7C6BC4",
    icon: Sparkles,
    side: "left" as const,
    area: "s2",
  },
  {
    n: "03",
    color: "#D4A017",
    icon: ClipboardCheck,
    side: "right" as const,
    area: "s3",
  },
  {
    n: "04",
    color: "#1B3F47",
    icon: Compass,
    side: "right" as const,
    area: "s4",
  },
];

function JourneyBulb() {
  return (
    <svg
      viewBox="0 0 240 318"
      className="h-auto w-[196px] sm:w-[228px]"
      role="img"
      aria-labelledby="journey-bulb-title"
    >
      <title id="journey-bulb-title">Four connected pieces of the LearnLi learning journey</title>
      <defs>
        <clipPath id="li-bulb-glass">
          <path d="M120 14c51 0 94 41 94 93 0 36-19 64-41 84l-9 9v16H76v-16l-9-9C45 171 26 143 26 107 26 55 69 14 120 14z" />
        </clipPath>
      </defs>

      <g clipPath="url(#li-bulb-glass)">
        <rect x="0" y="0" width="120" height="115" fill="#2C7E69" />
        <rect x="120" y="0" width="120" height="115" fill="#D4A017" />
        <rect x="0" y="115" width="120" height="130" fill="#7C6BC4" />
        <rect x="120" y="115" width="120" height="130" fill="#1B3F47" />
        <circle cx="120" cy="72" r="13" fill="#2C7E69" />
        <circle cx="72" cy="115" r="13" fill="#7C6BC4" />
        <circle cx="168" cy="115" r="13" fill="#7C6BC4" />
        <circle cx="120" cy="158" r="13" fill="#D4A017" />
      </g>

      <g
        fill="none"
        stroke="#F6F1E8"
        strokeWidth="4"
        strokeLinecap="round"
        clipPath="url(#li-bulb-glass)"
      >
        <line x1="120" y1="14" x2="120" y2="216" />
        <line x1="26" y1="115" x2="214" y2="115" />
        <circle cx="120" cy="72" r="13" />
        <circle cx="72" cy="115" r="13" />
        <circle cx="168" cy="115" r="13" />
        <circle cx="120" cy="158" r="13" />
      </g>

      <path
        d="M120 14c51 0 94 41 94 93 0 36-19 64-41 84l-9 9v16H76v-16l-9-9C45 171 26 143 26 107 26 55 69 14 120 14z"
        fill="none"
        stroke="#F6F1E8"
        strokeWidth="3"
      />

      <text
        x="68"
        y="82"
        textAnchor="middle"
        fill="white"
        fontSize="30"
        fontWeight="700"
        fontFamily="var(--font-display), Georgia, serif"
      >
        A
      </text>
      <text
        x="68"
        y="168"
        textAnchor="middle"
        fill="white"
        fontSize="30"
        fontWeight="700"
        fontFamily="var(--font-display), Georgia, serif"
      >
        B
      </text>
      <text
        x="172"
        y="82"
        textAnchor="middle"
        fill="white"
        fontSize="30"
        fontWeight="700"
        fontFamily="var(--font-display), Georgia, serif"
      >
        C
      </text>
      <text
        x="172"
        y="168"
        textAnchor="middle"
        fill="white"
        fontSize="30"
        fontWeight="700"
        fontFamily="var(--font-display), Georgia, serif"
      >
        D
      </text>

      <rect x="76" y="216" width="88" height="12" rx="3" fill="#C5CCD1" />
      <rect x="82" y="232" width="76" height="11" rx="3" fill="#A8B2B8" />
      <rect x="88" y="247" width="64" height="11" rx="3" fill="#8A9EA2" />
      <rect x="94" y="262" width="52" height="18" rx="6" fill="#6F7F84" />
    </svg>
  );
}

function StagePanel({
  n,
  color,
  title,
  icon: Icon,
  side,
  area,
  points,
}: {
  n: string;
  color: string;
  title: string;
  icon: LucideIcon;
  side: "left" | "right";
  area: string;
  points: { title: string }[];
}) {
  const connector = (
    <div className="flex shrink-0 items-center gap-2 pt-1">
      {side === "right" ? <span className="hidden h-px w-8 bg-foreground/20 lg:block" /> : null}
      <span
        className="flex size-10 items-center justify-center rounded-full text-[13px] font-bold text-white shadow-sm sm:size-11"
        style={{ backgroundColor: color }}
      >
        {n}
      </span>
      {side === "left" ? <span className="hidden h-px w-8 bg-foreground/20 lg:block" /> : null}
    </div>
  );

  return (
    <article
      data-area={area}
      data-side={side}
      className={cn(
        "li-journey-stage flex w-full max-w-md items-start gap-3",
        side === "left" ? "lg:ml-auto lg:flex-row-reverse" : "lg:mr-auto"
      )}
    >
      {connector}
      <div className="min-w-0 flex-1">
        <h3 className="font-display mt-1 flex items-center gap-2 text-xl tracking-tight sm:text-[1.35rem]">
          <Icon className="size-6 shrink-0 text-foreground" strokeWidth={1.6} />
          {title}
        </h3>
        <ul className="mt-2 space-y-1.5">
          {points.map((point) => (
            <li key={point.title} className="text-sm leading-snug text-foreground/70 sm:text-[15px]">
              <span className="mr-1.5 font-semibold" style={{ color }}>
                •
              </span>
              {point.title}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function LearningJourney() {
  return (
    <section
      id="ecosystem"
      data-pdf-chunk
      className="pdf-flow mx-auto max-w-6xl scroll-mt-24 px-5 py-14 sm:px-8"
    >
      <div className="max-w-3xl">
        <SectionLabel>{learningJourney.kicker}</SectionLabel>
        <h2 className="font-display mt-3 text-3xl tracking-tight sm:text-5xl">
          {learningJourney.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-foreground/65">{learningJourney.body}</p>
      </div>

      <div className="li-journey-puzzle mt-10 rounded-[2rem] bg-white/70 px-4 py-8 ring-1 ring-foreground/10 sm:px-8 sm:py-10">
        <div data-area="bulb" className="py-2">
          <JourneyBulb />
        </div>
        {learningJourney.groups.map((group, index) => {
          const stage = stages[index];
          return (
            <StagePanel
              key={group.title}
              n={stage.n}
              color={stage.color}
              title={group.title}
              icon={stage.icon}
              side={stage.side}
              area={stage.area}
              points={group.cards}
            />
          );
        })}
      </div>
    </section>
  );
}
