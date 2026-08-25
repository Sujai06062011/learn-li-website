import { LiIcon } from "@/components/brand/LiIcon";
import { toneClass, toneInk, type Tone } from "@/lib/site";
import { cn } from "@/lib/utils";

export function FeatureCard({
  tone,
  icon,
  kicker,
  title,
  body,
  action,
  index,
  className,
}: {
  tone: Tone;
  icon: string;
  kicker?: string;
  title: string;
  body: string;
  action?: string;
  index?: string;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-3xl p-6 shadow-[0_10px_30px_-18px_rgba(27,63,71,0.35)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_40px_-16px_rgba(27,63,71,0.38)]",
        toneClass[tone],
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className={cn(
            "flex size-12 items-center justify-center rounded-2xl shadow-sm",
            toneInk[tone]
          )}
        >
          <LiIcon name={icon} className="size-6" />
        </div>
        {index ? (
          <span className="text-sm font-semibold text-foreground/30">{index}</span>
        ) : null}
      </div>
      {kicker ? (
        <p className="mt-4 text-[11px] font-medium tracking-[0.18em] text-foreground/55 uppercase">
          {kicker}
        </p>
      ) : null}
      <h3 className="mt-2 text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/70">{body}</p>
      {action ? (
        <p className="mt-5 text-sm font-semibold text-foreground">{action} →</p>
      ) : null}
    </article>
  );
}

export function WhiteFeatureCard({
  tone,
  icon,
  title,
  body,
  index,
}: {
  tone: Tone;
  icon: string;
  title: string;
  body: string;
  index?: string;
}) {
  return (
    <article className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-[0_10px_30px_-18px_rgba(27,63,71,0.28)] ring-1 ring-foreground/6">
      <div className="flex items-center justify-between">
        <div
          className={cn(
            "flex size-11 items-center justify-center rounded-2xl",
            toneInk[tone]
          )}
        >
          <LiIcon name={icon} className="size-5" />
        </div>
        {index ? (
          <span className="text-sm font-semibold text-foreground/25">{index}</span>
        ) : null}
      </div>
      <h3 className="mt-4 text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground/65">{body}</p>
    </article>
  );
}
