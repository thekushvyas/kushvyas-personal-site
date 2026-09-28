"use client";

import { useEffect, useRef } from "react";

// Thin progress bar pinned under the nav + a small monospace readout.
export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
      if (pctRef.current)
        pctRef.current.textContent = String(Math.round(p * 100)).padStart(3, "0");
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] bg-blue-100/60">
        <div
          ref={barRef}
          className="h-full origin-left bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-600"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
      <div className="pointer-events-none fixed bottom-5 right-5 z-[60] hidden rounded-full border border-blue-200 bg-white/70 px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-blue-700 backdrop-blur md:block">
        SCROLL <span ref={pctRef}>000</span>%
      </div>
    </>
  );
}
