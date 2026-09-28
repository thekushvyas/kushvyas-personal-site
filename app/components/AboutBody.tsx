"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROFILE, SKILLS } from "../data";

export default function AboutBody() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      // About text lights up word by word as you scroll through it
      if (!reduce) {
        gsap.fromTo(
          "[data-word]",
          { opacity: 0.12 },
          {
            opacity: 1,
            ease: "none",
            stagger: 0.05,
            scrollTrigger: {
              trigger: "[data-about]",
              start: "top 85%",
              end: "bottom 72%",
              scrub: 0.5,
            },
          }
        );
      }

      gsap.from("[data-reveal]", {
        y: 28,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top 80%",
        },
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrapRef} className="py-16 md:py-24">
      <h2
        data-reveal
        className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.2em] text-blue-700"
      >
        About
      </h2>
      <p
        data-about
        aria-label={PROFILE.about}
        className="max-w-3xl text-xl font-medium leading-9 text-slate-900 md:text-2xl md:leading-[1.6]"
      >
        {PROFILE.about.split(" ").map((w, i) => (
          <span key={i} data-word aria-hidden className="inline-block">
            {w}&nbsp;
          </span>
        ))}
      </p>

      <div data-reveal className="mt-10">
        <h3 className="mb-3 text-xs uppercase tracking-[0.18em] text-black/50">
          Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((s) => (
            <span
              key={s}
              className="rounded-full border border-blue-200 bg-white/70 px-3 py-1 text-xs text-blue-900 backdrop-blur"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
