"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROFILE } from "../data";

const GLYPHS = "01<>/[]{}#$%&*+=?ABCDEFXYZ";

// Resolves text from random glyphs, left to right, like a decoder locking on.
function scramble(el: HTMLElement, finalText: string, duration = 1100, delay = 0) {
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

export default function HomeHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLParagraphElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const scanRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);
  const legoRef = useRef<HTMLDivElement>(null);
  const legoImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: (() => void)[] = [];

    // decoding name + headline
    if (!reduce) {
      if (line1Ref.current) cleanups.push(scramble(line1Ref.current, "Kush", 900, 350));
      if (line2Ref.current) cleanups.push(scramble(line2Ref.current, "Vyas", 1000, 550));
      if (headlineRef.current)
        cleanups.push(scramble(headlineRef.current, PROFILE.headline, 1300, 900));
    }

    const ctx = gsap.context(() => {
      // entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(videoWrapRef.current, { scale: 1.08, opacity: 0, duration: 1.3, ease: "power2.out" })
        .from(nameRef.current, { y: 60, opacity: 0, duration: 1.1 }, "-=0.9")
        .from(
          photoRef.current,
          { clipPath: "inset(100% 0% 0% 0% round 2rem)", duration: 1.3, ease: "expo.out" },
          "-=0.9"
        )
        .from("[data-hud]", { opacity: 0, scale: 0.6, duration: 0.5, stagger: 0.06 }, "-=0.6")
        .from(subRef.current, { y: 24, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(
          legoRef.current,
          { y: 20, opacity: 0, duration: 0.8, ease: "back.out(1.6)" },
          "-=0.4"
        )
        .from(cueRef.current, { opacity: 0, duration: 0.8 }, "-=0.4");

      // scanner line sweeping over the headshot
      if (scanRef.current && !reduce) {
        gsap.fromTo(
          scanRef.current,
          { top: "-10%" },
          { top: "105%", duration: 2.8, ease: "sine.inOut", repeat: -1, repeatDelay: 1.2, delay: 1.6 }
        );
      }

      // continuous floating bob on the Lego mini
      if (legoImgRef.current && !reduce) {
        gsap.to(legoImgRef.current, { y: -8, duration: 1.9, ease: "sine.inOut", repeat: -1, yoyo: true });
        gsap.to(legoImgRef.current, { rotate: 2, duration: 3.4, ease: "sine.inOut", repeat: -1, yoyo: true });
      }

      // scroll-driven: name drifts & spreads, photo lifts and tilts back
      const st = {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      };
      gsap.to(videoWrapRef.current, { yPercent: -8, scale: 1.04, ease: "none", scrollTrigger: st });
      gsap.to(nameRef.current, { yPercent: -25, letterSpacing: "0.02em", opacity: 0.35, ease: "none", scrollTrigger: st });
      gsap.to(photoRef.current, { yPercent: -18, rotateX: 12, scale: 0.92, ease: "none", scrollTrigger: st });
      gsap.to(legoRef.current, { yPercent: -10, ease: "none", scrollTrigger: st });
      gsap.to(cueRef.current, {
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "+=120", scrub: true },
      });
    }, sectionRef);

    // mouse-reactive 3D tilt on the photo
    const tiltEl = tiltRef.current;
    if (tiltEl && !reduce) {
      const rx = gsap.quickTo(tiltEl, "rotateX", { duration: 0.6, ease: "power3.out" });
      const ry = gsap.quickTo(tiltEl, "rotateY", { duration: 0.6, ease: "power3.out" });
      const onMove = (e: PointerEvent) => {
        const r = tiltEl.getBoundingClientRect();
        const x = (e.clientX - (r.left + r.width / 2)) / window.innerWidth;
        const y = (e.clientY - (r.top + r.height / 2)) / window.innerHeight;
        ry(x * 14);
        rx(-y * 10);
      };
      window.addEventListener("pointermove", onMove);
      cleanups.push(() => window.removeEventListener("pointermove", onMove));
    }

    return () => {
      cleanups.forEach((c) => c());
      ctx.revert();
    };
  }, []);

  const corner = "absolute h-6 w-6 border-blue-500";

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[92svh] items-end overflow-hidden rounded-b-[2.5rem]"
    >
      {/* full-bleed video */}
      <div ref={videoWrapRef} className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-poster.jpg"
        >
          <source src="/hero.webm" type="video/webm" />
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      <div className="relative flex w-full flex-col-reverse items-start gap-10 px-1 pb-10 pt-28 md:flex-row md:items-end md:justify-between md:pb-14">
        <div className="min-w-0">
          <h1
            ref={nameRef}
            aria-label="Kush Vyas"
            className="font-semibold leading-[0.86] tracking-tight text-slate-900"
            style={{ fontSize: "clamp(56px, 11vw, 160px)", letterSpacing: "-0.03em" }}
          >
            <span ref={line1Ref} aria-hidden>Kush</span>
            <br />
            <span ref={line2Ref} aria-hidden>Vyas</span>
            <span className="text-blue-600">.</span>
          </h1>

          <div ref={subRef} className="mt-7 max-w-md">
            <p
              ref={headlineRef}
              className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-blue-600"
            >
              {PROFILE.headline}
            </p>
            <p className="mt-2 text-base text-slate-700">{PROFILE.subhead}</p>
            <p className="mt-1 text-sm text-slate-500">{PROFILE.location}</p>
          </div>

          {/* Lego mini — playful companion */}
          <div ref={legoRef} className="mt-6 flex items-end gap-3">
            <img
              ref={legoImgRef}
              src="/lego.png"
              alt="Kush as a Lego minifigure"
              className="h-20 w-auto drop-shadow-md md:h-24"
            />
            <span className="mb-1 text-xs italic text-slate-500">also available in lego</span>
          </div>
        </div>

        {/* headshot with HUD scanner */}
        <div
          ref={photoRef}
          className="shrink-0 self-center p-3 md:self-end"
          style={{ perspective: "1000px" }}
        >
          <div ref={tiltRef} className="relative" style={{ transformStyle: "preserve-3d" }}>
            <div className="relative overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl shadow-blue-900/20">
              <img
                src={PROFILE.photo}
                alt="Kush Vyas headshot"
                className="block h-auto w-60 md:w-80 lg:w-[24rem]"
              />
              {/* scan line */}
              <div
                ref={scanRef}
                aria-hidden
                className="pointer-events-none absolute inset-x-0 h-24 -translate-y-1/2"
                style={{
                  top: "-10%",
                  background:
                    "linear-gradient(180deg, transparent, rgba(59,130,246,0.18) 45%, rgba(147,197,253,0.9) 50%, rgba(59,130,246,0.18) 55%, transparent)",
                  mixBlendMode: "screen",
                }}
              />
              {/* subtle pixel grid */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              {/* readouts */}
              <div
                data-hud
                className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-slate-900/55 px-2.5 py-1 font-mono text-[10px] tracking-[0.15em] text-white backdrop-blur"
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                ID · KV-MSBA27
              </div>
              <div
                data-hud
                className="absolute bottom-3 right-3 rounded-full bg-slate-900/55 px-2.5 py-1 font-mono text-[10px] tracking-[0.15em] text-white backdrop-blur"
              >
                42.36°N 71.06°W
              </div>
            </div>

            {/* HUD corner brackets */}
            <span data-hud aria-hidden className={`${corner} -left-3 -top-3 rounded-tl-lg border-l-2 border-t-2`} />
            <span data-hud aria-hidden className={`${corner} -right-3 -top-3 rounded-tr-lg border-r-2 border-t-2`} />
            <span data-hud aria-hidden className={`${corner} -bottom-3 -left-3 rounded-bl-lg border-b-2 border-l-2`} />
            <span data-hud aria-hidden className={`${corner} -bottom-3 -right-3 rounded-br-lg border-b-2 border-r-2`} />
          </div>
        </div>
      </div>

      <div
        ref={cueRef}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500"
      >
        scroll ↓
      </div>
    </section>
  );
}
