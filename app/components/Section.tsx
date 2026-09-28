"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GLYPHS = "01<>/[]{}#$%&*+=?ABCDEFXYZ";

function scramble(el: HTMLElement, finalText: string, duration = 900, delay = 0) {
  let frame = 0;
  const start = performance.now() + delay;
  const tick = (now: number) => {
    const t = Math.max(0, (now - start) / duration);
    const locked = Math.floor(t * finalText.length);
    let out = "";
    for (let i = 0; i < finalText.length; i++) {
      out +=
        i < locked || finalText[i] === " "
          ? finalText[i]
          : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    }
    el.textContent = out;
    if (t < 1) frame = requestAnimationFrame(tick);
    else el.textContent = finalText;
  };
  frame = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(frame);
}

/**
 * Shared page shell: animated header + scroll reveal engine.
 * Children can opt in with data attributes:
 *   data-item   → rises/fades in as it enters the viewport
 *   data-draw   → vertical line that draws with scroll (scaleY)
 *   data-spot   → cursor-following spotlight on hover
 *   data-count  → number counts up when visible
 */
export default function Section({
  label,
  title,
  meta,
  children,
}: {
  label: string;
  title?: string;
  meta?: string;
  children: React.ReactNode;
}) {
  const wrapRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const headingText = title ?? label;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: (() => void)[] = [];

    if (!reduce && titleRef.current) {
      cleanups.push(scramble(titleRef.current, headingText, 900, 150));
    }

    const ctx = gsap.context(() => {
      if (reduce) return;

      gsap.from("[data-head]", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
      });
      gsap.from("[data-rule]", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.2,
        ease: "expo.out",
        delay: 0.2,
      });

      gsap.set("[data-item]", { opacity: 0 });
      ScrollTrigger.batch("[data-item]", {
        start: "top 88%",
        once: true,
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { y: 40, opacity: 0, clipPath: "inset(0% 0% 100% 0%)" },
            {
              y: 0,
              opacity: 1,
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.1,
              clearProps: "clipPath",
            }
          ),
      });

      gsap.utils.toArray<HTMLElement>("[data-draw]").forEach((el) => {
        gsap.fromTo(
          el,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top center",
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement ?? el,
              start: "top 80%",
              end: "bottom 95%",
              scrub: 0.5,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
          onUpdate: () => {
            el.textContent = String(Math.round(obj.v)).padStart(el.dataset.pad ? Number(el.dataset.pad) : 1, "0");
          },
        });
      });
    }, wrapRef);

    // cursor spotlight
    const spots = wrapRef.current?.querySelectorAll<HTMLElement>("[data-spot]") ?? [];
    spots.forEach((el) => {
      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      };
      el.addEventListener("pointermove", onMove);
      cleanups.push(() => el.removeEventListener("pointermove", onMove));
    });

    return () => {
      cleanups.forEach((c) => c());
      ctx.revert();
    };
  }, [headingText]);

  return (
    <section ref={wrapRef} className="pb-8 pt-10 md:pt-16">
      <header className="mb-12 md:mb-16">
        <div
          data-head
          className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-blue-700"
        >
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600" />
          ~/kush/{label.toLowerCase()}
          {meta && <span className="text-blue-400">· {meta}</span>}
        </div>
        <h1
          data-head
          aria-label={headingText}
          className="mt-4 font-semibold leading-[0.9] tracking-tight text-slate-900"
          style={{ fontSize: "clamp(44px, 8vw, 104px)", letterSpacing: "-0.03em" }}
        >
          <span ref={titleRef} aria-hidden>
            {headingText}
          </span>
          <span className="text-blue-600">.</span>
        </h1>
        <div
          data-rule
          className="mt-8 h-px w-full bg-gradient-to-r from-blue-500 via-blue-200 to-transparent"
        />
      </header>
      {children}
    </section>
  );
}
