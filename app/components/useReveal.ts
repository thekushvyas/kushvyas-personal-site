"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Apple-style scroll reveals inside `scope`:
 *   data-item   → soft fade-up as it enters the viewport
 *   data-count  → number eases up from 0 when visible (optional data-prefix / data-suffix live in markup)
 */
export function useReveal(scope: RefObject<HTMLElement>) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.set("[data-item]", { opacity: 0, y: 40 });
      ScrollTrigger.batch("[data-item]", {
        start: "top 90%",
        once: true,
        onEnter: (els) =>
          gsap.to(els, {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            stagger: 0.08,
          }),
      });

      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count);
        const obj = { v: 0 };
        el.textContent = "0";
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
          onUpdate: () => {
            el.textContent = Math.round(obj.v).toLocaleString();
          },
        });
      });
    }, scope);

    return () => ctx.revert();
  }, [scope]);
}
