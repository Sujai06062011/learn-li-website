import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col justify-center px-5 py-24 sm:px-8">
      <SectionLabel>Missing page</SectionLabel>
      <h1 className="font-display mt-4 text-4xl tracking-tight sm:text-5xl">
        This chapter is not on the syllabus.
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you asked for is not here. Return home, or open the product.
      </p>
      <Link
        href="/"
        className="mt-8 text-[11px] tracking-[0.22em] uppercase hover:opacity-70"
      >
        Back to LearnLi →
      </Link>
    </main>
  );
}
