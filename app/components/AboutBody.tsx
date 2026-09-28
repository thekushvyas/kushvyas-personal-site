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
          <p data-item className="text-[17px] font-semibold md:text-[21px]">
            <span className="text-gradient">About</span>
          </p>
          <p
            data-about
            aria-label={PROFILE.about}
            className="mt-6 font-semibold leading-[1.18] tracking-[-0.025em] text-ink"
            style={{ fontSize: "clamp(28px, 3.8vw, 48px)" }}
          >
            {PROFILE.about.split(" ").map((w, i) => (
              <span key={i} data-word aria-hidden>
                {w}{" "}
              </span>
            ))}
          </p>

          <div data-item className="mt-20">
            <h3 className="text-[28px] font-semibold tracking-[-0.02em] text-ink md:text-[32px]">
              Toolkit.
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {SKILLS.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-cloud px-5 py-2.5 text-[15px] text-ink md:text-[17px]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* closing call to action */}
      <section className="relative isolate overflow-hidden border-t border-black/[0.06] py-24 text-center md:py-32">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="glow glow-violet left-[calc(50%-380px)] top-[calc(50%-210px)] h-[420px] w-[760px]" />
        </div>
        <div className="mx-auto w-full max-w-page px-5">
          <h2
            data-item
            className="font-semibold leading-[1.05] tracking-[-0.04em] text-ink"
            style={{ fontSize: "clamp(44px, 7vw, 80px)" }}
          >
            Let’s build something
            <br />
            <span className="text-gradient">worth measuring.</span>
          </h2>
          <div data-item className="mt-10 flex items-center justify-center gap-6">
            <Link
              href="/contact"
              className="rounded-full bg-apple px-6 py-3 text-[17px] text-white transition-colors hover:bg-[#0077ed]"
            >
              Contact me
            </Link>
            <Link href="/projects" className="text-[17px] text-apple hover:underline">
              Explore projects ›
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
