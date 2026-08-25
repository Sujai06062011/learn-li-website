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
        "text-[11px] tracking-[0.32em] text-muted-foreground uppercase",
        className
      )}
    >
      {children}
    </p>
  );
}
