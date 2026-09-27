"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROFILE, SKILLS } from "../data";

export default function AboutBody() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
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
        className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-blue-700"
      >
        About
      </h2>
      <p
        data-reveal
        className="max-w-2xl text-[17px] leading-8 text-black/85 md:text-lg"
      >
        {PROFILE.about}
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
