"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { LogoLockup } from "@/components/brand/Logo";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/company", label: "Company" },
  { href: "/brand", label: "Brand" },
  { href: "/brochure", label: "Brochure" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/85 backdrop-blur-md print:hidden">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.25rem] sm:px-8">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <LogoLockup />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors",
                pathname === link.href
                  ? "bg-li-sky text-li-blue"
                  : "text-foreground/55 hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={site.productUrl}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ variant: "gold", size: "lg" }),
            "hidden h-10 rounded-full px-5 text-sm font-semibold md:inline-flex"
          )}
        >
          Open LearnLi
        </a>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open ? (
        <div className="border-t border-foreground/10 px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "py-1 text-sm tracking-[0.16em] uppercase",
                  pathname === link.href ? "opacity-100" : "opacity-60"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.productUrl}
              target="_blank"
              rel="noreferrer"
              className="pt-2 text-sm tracking-[0.16em] uppercase"
            >
              Open LearnLi
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
