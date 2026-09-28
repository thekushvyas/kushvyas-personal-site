import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { PROFILE, NAV } from "./data";
import Nav from "./components/Nav";
import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  title: "Kush Vyas — MSBA @ Boston University",
  description:
    "Kush Vyas — Research-driven business analyst. MSBA candidate at Boston University. SQL, Python, Power BI, finance and supply chain analytics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <SmoothScroll />

        {/* Apple-style frosted global nav */}
        <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-[rgba(251,251,253,0.8)] backdrop-blur-xl backdrop-saturate-150">
          <div className="mx-auto flex h-12 w-full max-w-page items-center justify-between gap-6 px-5">
            <Link
              href="/"
              className="shrink-0 text-[15px] font-semibold tracking-tight text-ink"
            >
              Kush Vyas
            </Link>
            <Nav />
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-cloud">
          <div className="mx-auto w-full max-w-page px-5 py-8 text-[12px] leading-5 text-mute">
            <nav className="flex flex-wrap gap-x-6 gap-y-2 border-b border-hairline pb-4">
              {NAV.map((n) => (
                <Link key={n.href} href={n.href} className="hover:text-ink hover:underline">
                  {n.label}
                </Link>
              ))}
              <a href={`mailto:${PROFILE.email}`} className="hover:text-ink hover:underline">
                Email
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink hover:underline">
                LinkedIn
              </a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-ink hover:underline">
                GitHub
              </a>
            </nav>
            <div className="flex flex-col justify-between gap-2 pt-4 md:flex-row">
              <span>
                Copyright © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
              </span>
              <span>{PROFILE.location}</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
