"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROFILE, SKILLS } from "../data";
import { useReveal } from "./useReveal";

export default function AboutBody() {
  const wrapRef = useRef<HTMLDivElement>(null);
  useReveal(wrapRef);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      // Apple-style: words fill in from light gray to ink as you scroll
      gsap.fromTo(
        "[data-word]",
        { color: "#d2d2d7" },
        {
          color: "#1d1d1f",
          ease: "none",
          stagger: 0.05,
          scrollTrigger: {
            trigger: "[data-about]",
            start: "top 80%",
            end: "bottom 55%",
            scrub: 0.4,
          },
        }
      );
    }, wrapRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef}>
      <section className="py-24 md:py-36">
        <div className="mx-auto w-full max-w-page px-5">
          <p
            data-item
            className="flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.2em] text-mute"
          >
            <span className="h-px w-8 bg-ink/30" />
            02 — About
          </p>
          <p
            data-about
            aria-label={PROFILE.about}
            className="mt-8 font-normal leading-[1.3] tracking-[-0.02em] text-ink"
            style={{ fontSize: "clamp(24px, 3.2vw, 40px)" }}
          >
            {PROFILE.about.split(" ").map((w, i) => (
              <span key={i} data-word aria-hidden>
                {w}{" "}
              </span>
            ))}
          </p>

          <div data-item className="mt-20">
            <p className="flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.2em] text-mute">
              <span className="h-px w-8 bg-ink/30" />
              03 — Toolkit
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {SKILLS.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-black/[0.1] bg-white/70 px-4 py-2 text-[14px] text-ink md:text-[15px]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* closing call to action */}
      <section className="relative isolate overflow-hidden py-24 text-center md:py-32">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="glow glow-violet left-[calc(50%-380px)] top-[calc(50%-210px)] h-[420px] w-[760px]" />
        </div>
        <div className="mx-auto w-full max-w-page px-5">
          <h2
            data-item
            className="font-medium leading-[1.08] tracking-[-0.035em] text-ink"
            style={{ fontSize: "clamp(36px, 5.5vw, 64px)" }}
          >
            Let’s build something
            <br />
            <span className="font-light italic text-gradient">worth measuring.</span>
          </h2>
          <div data-item className="mt-10 flex items-center justify-center gap-6">
            <Link
              href="/contact"
              className="rounded-full bg-ink px-6 py-3 text-[15px] text-white transition-colors hover:bg-black"
            >
              Contact me
            </Link>
            <Link href="/projects" className="text-[15px] text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink">
              Explore projects ›
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
