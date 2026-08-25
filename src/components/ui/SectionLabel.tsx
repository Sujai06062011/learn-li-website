import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[11px] font-semibold tracking-[0.22em] text-li-blue uppercase",
        className
      )}
    >
      {children}
    </p>
  );
}
