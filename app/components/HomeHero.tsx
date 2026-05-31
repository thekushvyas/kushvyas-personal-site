"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROFILE } from "../data";

export default function HomeHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
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
      tl.from(nameRef.current, { y: 80, opacity: 0, duration: 1.15 })
        .from(subRef.current, { y: 24, opacity: 0, duration: 0.8 }, "-=0.7")
        .from(
          photoRef.current,
          { scale: 1.08, opacity: 0, duration: 1.2, ease: "power2.out" },
          "-=1.0"
        )
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
      gsap.to(nameRef.current, {
        yPercent: -28,
        scale: 0.86,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(photoRef.current, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(legoRef.current, {
        yPercent: -18,
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
      className="relative flex min-h-[88svh] items-center"
    >
      <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto]">
        <div className="order-2 md:order-1">
          <h1
            ref={nameRef}
            className="font-semibold leading-[0.86] tracking-tight text-black"
            style={{
              fontSize: "clamp(56px, 12vw, 168px)",
              letterSpacing: "-0.03em",
            }}
          >
            Kush
            <br />
            Vyas<span className="text-blue-600">.</span>
          </h1>
          <div ref={subRef} className="mt-7 max-w-md">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-700">
              {PROFILE.headline}
            </p>
            <p className="mt-2 text-base text-black/70">{PROFILE.subhead}</p>
            <p className="mt-1 text-sm text-black/45">{PROFILE.location}</p>
          </div>

          {/* Lego mini — playful companion */}
          <div ref={legoRef} className="mt-8 flex items-end gap-3">
            <img
              ref={legoImgRef}
              src="/lego.png"
              alt="Kush as a Lego minifigure"
              className="h-24 w-auto drop-shadow-md md:h-28"
            />
            <span className="mb-1 text-xs italic text-black/45">
              also available in lego
            </span>
          </div>
        </div>

        <div
          ref={photoRef}
          className="order-1 justify-self-center md:order-2 md:justify-self-end"
        >
          <div className="relative">
            {/* subtle glow behind the photo */}
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-3xl bg-blue-200/40 blur-2xl"
            />
            <img
              src={PROFILE.photo}
              alt={PROFILE.name}
              className="w-52 rounded-2xl border border-blue-100 shadow-xl ring-1 ring-blue-100 md:w-64 lg:w-72"
            />
          </div>
        </div>
      </div>

      <div
        ref={cueRef}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-black/40"
      >
        scroll ↓
      </div>
    </section>
  );
}
