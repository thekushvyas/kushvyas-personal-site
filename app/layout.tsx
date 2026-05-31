import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { PROFILE } from "./data";
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
      <body className="font-sans text-black antialiased">
        <SmoothScroll />

        {/* Floating top bar — minimal KV mark + nav */}
        <header className="sticky top-0 z-50 backdrop-blur-md">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              aria-label="Home"
              className="grid h-9 w-9 place-items-center rounded-full bg-blue-600 text-sm font-semibold text-white shadow-md hover:bg-blue-700"
            >
              KV
            </Link>
            <Nav />
          </div>
        </header>

        <div className="mx-auto w-full max-w-5xl px-6">
          <main className="min-h-[60vh]">{children}</main>

          <footer className="mt-16 border-t border-blue-100 py-6 text-xs text-black/50">
            © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js,
            deployed on Vercel.
          </footer>
        </div>
      </body>
    </html>
  );
}
