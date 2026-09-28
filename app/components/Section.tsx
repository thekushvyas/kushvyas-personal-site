"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useReveal } from "./useReveal";

/** Apple-style page shell: airy hero header on white, content on soft gray. */
export default function Section({
  label,
  title,
  intro,
  children,
}: {
  label: string;
  title?: string;
  intro?: string;
  children: React.ReactNode;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  useReveal(wrapRef);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-head]", {
        y: 30,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.1,
      });
    }, wrapRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef}>
      <section className="relative isolate overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="glow glow-blue -top-40 left-[10%] h-[420px] w-[620px]" />
          <div className="glow glow-violet -top-24 right-[5%] h-[360px] w-[520px]" />
        </div>
        <div className="mx-auto w-full max-w-page px-5 pb-12 pt-20 md:pb-16 md:pt-28">
          <p
            data-head
            className="flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.2em] text-mute"
          >
            <span className="h-px w-8 bg-ink/30" />
            {label}
          </p>
          <h1
            data-head
            className="mt-5 font-medium leading-[1.05] tracking-[-0.03em] text-ink"
            style={{ fontSize: "clamp(40px, 6.5vw, 76px)" }}
          >
            {title ?? label}.
          </h1>
          {intro && (
            <p
              data-head
              className="mt-6 max-w-2xl text-[18px] leading-[1.55] text-mute md:text-[20px]"
            >
              {intro}
            </p>
          )}
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto w-full max-w-page px-5">{children}</div>
      </section>
    </div>
  );
}
