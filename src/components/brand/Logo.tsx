import { cn } from "@/lib/utils";

export function GraduationMark({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-foreground", className)}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <polygon
        points="32 12 58 24 32 36 6 24"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M16 28.5v7.5c0 5.5 7.2 9.2 16 9.2s16-3.7 16-9.2v-7.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M52 26.5v11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="52" cy="39.5" r="1.4" fill="currentColor" />
      <path d="M32 12v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M32 17c6 3 10.5 9.5 13.5 18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M45.5 37.5 47 32.2l1.6 5.1 5.3-1.1-4.2 3.6 4.2 3.6-5.3-1.1-1.6 5.1-1.5-5.3-5.3 1.1 4.2-3.6-4.2-3.6z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function Wordmark({
  className,
  showTagline = true,
}: {
  className?: string;
  showTagline?: boolean;
}) {
  return (
    <span className={cn("flex flex-col leading-none", className)}>
      <span className="font-medium tracking-[-0.03em] text-[1.05em]">LearnLi</span>
      {showTagline ? (
        <span className="mt-1 text-[0.58em] font-normal tracking-[0.28em] text-muted-foreground uppercase">
          Learn Smart
        </span>
      ) : null}
    </span>
  );
}

export function LogoLockup({
  className,
  markClassName,
  showTagline = true,
}: {
  className?: string;
  markClassName?: string;
  showTagline?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <GraduationMark className={cn("size-9", markClassName)} />
      <Wordmark showTagline={showTagline} />
    </span>
  );
}

export function SealLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-foreground", className)}
      role="img"
      aria-labelledby="learnli-seal-title"
    >
      <title id="learnli-seal-title">LearnLi seal — Learn Smart</title>
      <circle cx="100" cy="100" r="97" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="100" cy="100" r="91" stroke="currentColor" strokeWidth="0.7" />
      <defs>
        <path id="learnli-top-arc" d="M 42 104 A 58 58 0 0 1 158 104" />
        <path id="learnli-bot-arc" d="M 44 108 A 56 56 0 0 0 156 108" />
      </defs>
      <text
        fill="currentColor"
        fontSize="11.5"
        letterSpacing="4.2"
        fontFamily="var(--font-sans), Outfit, sans-serif"
        fontWeight="500"
      >
        <textPath href="#learnli-top-arc" startOffset="50%" textAnchor="middle">
          LEARNLI
        </textPath>
      </text>
      <text
        fill="currentColor"
        fontSize="8.5"
        letterSpacing="3.4"
        fontFamily="var(--font-sans), Outfit, sans-serif"
        fontWeight="500"
      >
        <textPath href="#learnli-bot-arc" startOffset="50%" textAnchor="middle">
          LEARN SMART
        </textPath>
      </text>
      <g transform="translate(100 108) scale(1.35)">
        <g transform="translate(-32 -32)">
          <polygon
            points="32 12 58 24 32 36 6 24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M16 28.5v7.5c0 5.5 7.2 9.2 16 9.2s16-3.7 16-9.2v-7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M52 26.5v11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="52" cy="39.5" r="1.2" fill="currentColor" />
          <path d="M32 12v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path
            d="M32 17c6 3 10.5 9.5 13.5 18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M45.5 37.5 47 32.2l1.6 5.1 5.3-1.1-4.2 3.6 4.2 3.6-5.3-1.1-1.6 5.1-1.5-5.3-5.3 1.1 4.2-3.6-4.2-3.6z"
            stroke="currentColor"
            strokeWidth="1.15"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}

export function AppIconSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-labelledby="learnli-app-icon-title"
    >
      <title id="learnli-app-icon-title">LearnLi app icon</title>
      <rect width="64" height="64" rx="14" fill="#F6F1E8" />
      <g transform="translate(8 8) scale(0.75)">
        <polygon
          points="32 12 58 24 32 36 6 24"
          stroke="#1B3F47"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M16 28.5v7.5c0 5.5 7.2 9.2 16 9.2s16-3.7 16-9.2v-7.5"
          stroke="#1B3F47"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M52 26.5v11" stroke="#1B3F47" strokeWidth="2" strokeLinecap="round" />
        <circle cx="52" cy="39.5" r="1.5" fill="#1B3F47" />
        <path d="M32 12v5" stroke="#1B3F47" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M32 17c6 3 10.5 9.5 13.5 18"
          stroke="#1B3F47"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M45.5 37.5 47 32.2l1.6 5.1 5.3-1.1-4.2 3.6 4.2 3.6-5.3-1.1-1.6 5.1-1.5-5.3-5.3 1.1 4.2-3.6-4.2-3.6z"
          stroke="#1B3F47"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
