"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROFILE } from "../data";

export default function HomeHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
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
        .from(nameRef.current, { y: 60, opacity: 0, duration: 1.1 }, "-=0.7")
        .from(photoRef.current, { x: 40, opacity: 0, duration: 1.0 }, "-=0.8")
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

      <div className="relative flex w-full flex-col-reverse items-start gap-10 px-1 pb-10 pt-28 md:flex-row md:items-end md:justify-between md:pb-14">
        <div className="min-w-0">
          <h1
            ref={nameRef}
            className="font-semibold leading-[0.86] tracking-tight text-slate-900"
            style={{
              fontSize: "clamp(56px, 11vw, 160px)",
              letterSpacing: "-0.03em",
            }}
          >
            Kush
            <br />
            Vyas<span className="text-blue-600">.</span>
          </h1>

          <div ref={subRef} className="mt-7 max-w-md">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-600">
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
            <span className="mb-1 text-xs italic text-slate-500">
              also available in lego
            </span>
          </div>
        </div>

        {/* headshot */}
        <div ref={photoRef} className="shrink-0 self-center md:self-end">
          <img
            src={PROFILE.photo}
            alt="Kush Vyas headshot"
            className="h-64 w-48 rounded-[2rem] border-4 border-white object-cover shadow-2xl shadow-blue-900/20 md:h-[26rem] md:w-72"
          />
        </div>
      </div>

      <div
        ref={cueRef}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-slate-500"
      >
        scroll ↓
      </div>
    </section>
  );
}
