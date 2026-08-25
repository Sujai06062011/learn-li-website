import { Fraunces, Outfit } from "next/font/google";
import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "LearnLi — Learn Smart",
    template: "%s · LearnLi",
  },
  description: site.description,
  metadataBase: new URL("https://learnli.in"),
  openGraph: {
    title: "LearnLi — Learn Smart",
    description: site.description,
    url: "https://learnli.in",
    siteName: "LearnLi",
    images: [{ url: "/brand/learnli-hero-campus.png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full font-sans antialiased", outfit.variable, fraunces.variable)}
    >
      <body className="min-h-full bg-background text-foreground">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
