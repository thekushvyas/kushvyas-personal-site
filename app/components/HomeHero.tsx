"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROFILE } from "../data";

export default function HomeHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);
  const legoRef = useRef<HTMLDivElement>(null);
  const legoImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(videoWrapRef.current, { scale: 1.08, opacity: 0, duration: 1.3, ease: "power2.out" })
        .from(subRef.current, { y: 24, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(
          legoRef.current,
          { y: 20, opacity: 0, duration: 0.8, ease: "back.out(1.6)" },
          "-=0.4"
        )
        .from(cueRef.current, { opacity: 0, duration: 0.8 }, "-=0.4");

      // continuous floating bob on the Lego mini
      if (legoImgRef.current) {
        gsap.to(legoImgRef.current, {
          y: -8,
          duration: 1.9,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
        gsap.to(legoImgRef.current, {
          rotate: 2,
          duration: 3.4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      // scroll-driven
      gsap.to(videoWrapRef.current, {
        yPercent: -8,
        scale: 1.04,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(legoRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(cueRef.current, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=120",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[92svh] items-end overflow-hidden rounded-b-[2.5rem]"
    >
      {/* full-bleed video — the video itself carries the name treatment, so no text is overlaid on top of it */}
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
        {/* light gradient at the very bottom only, just enough to seat the info row */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      <div className="relative w-full px-1 pb-10 md:pb-14">
        <div ref={subRef} className="max-w-md">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-300">
            {PROFILE.headline}
          </p>
          <p className="mt-2 text-base text-white/85">{PROFILE.subhead}</p>
          <p className="mt-1 text-sm text-white/55">{PROFILE.location}</p>
        </div>

        {/* Lego mini — playful companion */}
        <div ref={legoRef} className="mt-6 flex items-end gap-3">
          <img
            ref={legoImgRef}
            src="/lego.png"
            alt="Kush as a Lego minifigure"
            className="h-20 w-auto drop-shadow-md md:h-24"
          />
          <span className="mb-1 text-xs italic text-white/65">
            also available in lego
          </span>
        </div>
      </div>

      <div
        ref={cueRef}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-white/60"
      >
        scroll ↓
      </div>
    </section>
  );
}
