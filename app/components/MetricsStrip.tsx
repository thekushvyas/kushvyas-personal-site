"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const METRICS = [
  { value: 7000, prefix: "", suffix: "+", label: "leads / week automated", tag: "OUTREACH_PIPELINE" },
  { value: 90, prefix: "$", suffix: "K", label: "revenue protected via churn model", tag: "CHURN_MODEL" },
  { value: 200, prefix: "", suffix: "+", label: "students mentored", tag: "DATA_DECODERS" },
  { value: 3, prefix: "", suffix: "", label: "published research papers", tag: "PUBLICATIONS" },
];

// A rising line the chart "draws" as you scroll.
const PATH =
  "M0,92 C60,88 90,70 140,74 C190,78 210,52 260,50 C310,48 330,60 380,44 C430,28 460,34 510,22 C560,10 600,16 640,6";

export default function MetricsStrip() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const areaRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // count-up numbers
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count);
        if (reduce) {
          el.textContent = target.toLocaleString();
          return;
        }
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            el.textContent = Math.round(obj.v).toLocaleString();
          },
        });
      });

      // cards rise in with a stagger
      gsap.from("[data-metric]", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: wrapRef.current, start: "top 80%" },
      });

      // chart line draws in sync with scroll
      const path = pathRef.current;
      if (path) {
        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: reduce ? 0 : len });
        if (!reduce) {
          gsap.to(path, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: wrapRef.current,
              start: "top 85%",
              end: "center 50%",
              scrub: 0.6,
            },
          });
          gsap.from(areaRef.current, {
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: wrapRef.current,
              start: "top 70%",
              end: "center 50%",
              scrub: 0.6,
            },
          });
        }
      }
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrapRef} className="relative mt-16 md:mt-24">
      <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-blue-700">
        <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600" />
        impact.log
        <span className="h-px flex-1 bg-gradient-to-r from-blue-200 to-transparent" />
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white/60 p-6 backdrop-blur md:p-8">
        {/* faint grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* chart */}
        <svg
          aria-hidden
          viewBox="0 0 640 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full"
        >
          <defs>
            <linearGradient id="mArea" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path ref={areaRef} d={`${PATH} L640,100 L0,100 Z`} fill="url(#mArea)" />
          <path
            ref={pathRef}
            d={PATH}
            fill="none"
            stroke="#2563eb"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
          />
        </svg>

        <div className="relative grid grid-cols-2 gap-6 md:grid-cols-4">
          {METRICS.map((m) => (
            <div key={m.tag} data-metric>
              <div className="font-mono text-[10px] tracking-[0.18em] text-blue-500/80">
                {m.tag}
              </div>
              <div className="mt-2 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                {m.prefix}
                <span data-count={m.value}>0</span>
                <span className="text-blue-600">{m.suffix}</span>
              </div>
              <div className="mt-1 text-sm text-slate-600">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
