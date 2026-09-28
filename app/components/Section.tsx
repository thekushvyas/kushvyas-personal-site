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
        <div className="mx-auto w-full max-w-page px-5 pb-14 pt-20 md:pb-20 md:pt-28">
          <p data-head className="text-[17px] font-semibold md:text-[21px]">
            <span className="text-gradient">{label}</span>
          </p>
          <h1
            data-head
            className="mt-3 font-semibold leading-[1.03] tracking-[-0.035em] text-ink"
            style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
          >
            {title ?? label}.
          </h1>
          {intro && (
            <p
              data-head
              className="mt-6 max-w-2xl text-[19px] leading-[1.45] text-mute md:text-[24px] md:leading-[1.35]"
            >
              {intro}
            </p>
          )}
        </div>
      </section>

      <section className="bg-cloud py-14 md:py-20">
        <div className="mx-auto w-full max-w-page px-5">{children}</div>
      </section>
    </div>
  );
}
