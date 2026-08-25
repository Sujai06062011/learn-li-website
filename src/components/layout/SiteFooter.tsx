import Link from "next/link";
import { SealLogo } from "@/components/brand/Logo";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/10 print:hidden">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="flex gap-5">
          <SealLogo className="size-20 shrink-0" />
          <div>
            <p className="font-display text-2xl tracking-tight">{site.name}</p>
            <p className="mt-1 text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
              {site.tagline}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              AI-assisted learning for CBSE students in Grades 6–12, with dashboards
              for families and teachers.
            </p>
          </div>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.28em] uppercase">Visit</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/product" className="hover:opacity-70">
                Product
              </Link>
            </li>
            <li>
              <Link href="/company" className="hover:opacity-70">
                Company
              </Link>
            </li>
            <li>
              <Link href="/brand" className="hover:opacity-70">
                Logo &amp; app icon
              </Link>
            </li>
            <li>
              <Link href="/brochure" className="hover:opacity-70">
                Company brochure
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.28em] uppercase">Product</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={site.productUrl} className="hover:opacity-70" target="_blank" rel="noreferrer">
                learnli.in
              </a>
            </li>
            <li>
              <a href={site.pdfPath} className="hover:opacity-70">
                Download PDF
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} LearnLi. All rights reserved.</p>
          <p className="tracking-[0.18em] uppercase">CBSE · Grades 6–12</p>
        </div>
      </div>
    </footer>
  );
}
