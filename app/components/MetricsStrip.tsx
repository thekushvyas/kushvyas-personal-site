"use client";

import { useRef } from "react";
import Link from "next/link";
import { useReveal } from "./useReveal";

const tile = "card p-8 md:p-10";

export default function MetricsStrip() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-page px-5">
        <div data-item className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.2em] text-mute">
              <span className="h-px w-8 bg-ink/30" />
              01 — Now
            </p>
            <h2
              className="mt-4 font-medium leading-[1.05] tracking-[-0.03em] text-ink"
              style={{ fontSize: "clamp(34px, 5vw, 56px)" }}
            >
              Currently.
            </h2>
          </div>
          <Link href="/publications" className="text-[15px] text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink">
            Read my research ›
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
          <div data-item className={`${tile} flex items-center gap-6 md:col-span-2`}>
            <img src="/lego.png" alt="Kush as a LEGO minifigure" className="h-28 w-auto" />
            <p className="text-[21px] font-semibold leading-[1.2] tracking-tight text-ink">
              Also available in <span className="text-gradient">LEGO.</span>
            </p>
          </div>

          {/* dark feature tile */}
          <div
            data-item
            className="relative overflow-hidden rounded-[20px] bg-ink p-8 text-white md:col-span-4 md:p-12"
          >
            <div aria-hidden className="glow glow-blue -right-20 -top-40 h-[380px] w-[520px] opacity-70" />
            <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-white/50">Now</p>
                <p
                  className="mt-3 font-medium leading-[1.08] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
                >
                  Marketing & Data Management Intern
                  <br />
                  <span className="text-white/55">at DaidaEx, New York.</span>
                </p>
              </div>
              <Link
                href="/experience"
                className="self-start whitespace-nowrap rounded-full bg-white px-6 py-3 text-[17px] text-ink transition-colors hover:bg-white/90 md:self-auto"
              >
                View timeline
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
