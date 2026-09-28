"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROFILE } from "../data";

export default function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const photoWrapRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // entrance — calm, staggered fade-up
      gsap.from("[data-hero]", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.12,
      });
      gsap.from(photoRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        delay: 0.45,
      });

      // headline gently recedes as you scroll
      gsap.to(textRef.current, {
        yPercent: -12,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "center top",
          scrub: true,
        },
      });

      // product-style reveal: photo grows into place
      gsap.fromTo(
        photoRef.current,
        { scale: 0.86 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: photoWrapRef.current,
            start: "top 95%",
            end: "top 20%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative isolate overflow-hidden">
      {/* soft colour field */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="glow glow-blue left-[calc(50%-450px)] top-[-12%] h-[620px] w-[900px]" />
        <div className="glow glow-violet left-[8%] top-[18%] h-[420px] w-[520px]" />
        <div className="glow glow-pink right-[4%] top-[8%] h-[420px] w-[520px]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-white" />
      </div>

      <div ref={textRef} className="mx-auto w-full max-w-page px-5 pt-20 text-center md:pt-28">
        <p data-hero className="text-[17px] font-semibold text-mute md:text-[21px]">
          {PROFILE.headline}
        </p>
        <h1
          data-hero
          className="mt-3 font-semibold leading-[1.02] tracking-[-0.045em] text-ink"
          style={{ fontSize: "clamp(60px, 11vw, 128px)" }}
        >
          Kush Vyas.
        </h1>
        <p
          data-hero
          className="mt-2 font-semibold leading-[1.08] tracking-[-0.03em]"
          style={{ fontSize: "clamp(30px, 4.6vw, 56px)" }}
        >
          <span className="text-gradient">Data, translated into decisions.</span>
        </p>
        <p
          data-hero
          className="mx-auto mt-6 max-w-2xl text-[19px] leading-[1.45] text-mute md:text-[21px]"
        >
          {PROFILE.subhead}
        </p>
        <div data-hero className="mt-8 flex items-center justify-center gap-6">
          <Link
            href="/experience"
            className="rounded-full bg-apple px-6 py-3 text-[17px] text-white transition-colors hover:bg-[#0077ed]"
          >
            See my work
          </Link>
          <Link href="/contact" className="text-[17px] text-apple hover:underline">
            Get in touch ›
          </Link>
        </div>
      </div>

      <div ref={photoWrapRef} className="mx-auto mt-16 w-full max-w-[440px] px-5 pb-8 md:mt-20">
        <div
          ref={photoRef}
          className="overflow-hidden rounded-[40px] bg-cloud shadow-[0_40px_100px_-30px_rgba(0,0,0,0.35)]"
        >
          <img src={PROFILE.photo} alt="Kush Vyas" className="block h-auto w-full" />
        </div>
      </div>
    </section>
  );
}
