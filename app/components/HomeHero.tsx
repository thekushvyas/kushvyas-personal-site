"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROFILE } from "../data";
import { useReveal } from "./useReveal";

const STATS = [
  { label: "Outreach pipeline", value: 7000, suffix: "+", text: "leads a week, from a tool I built at Octos — 80% less manual work.", accent: true },
  { label: "Churn model", prefix: "$", value: 90, suffix: "K", text: "revenue protected by flagging at-risk accounts (75% accuracy)." },
  { label: "Data Decoders", value: 200, suffix: "+", text: "students mentored in the analytics community I founded." },
  { label: "Research", value: 3, suffix: "", text: "published papers on consumer analytics and data." },
];

export default function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const photoWrapRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  useReveal(sectionRef);

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
        { scale: 0.94 },
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
              </div>

      <div ref={textRef} className="mx-auto w-full max-w-page px-5 pt-20 text-center md:pt-28">
        <p
          data-hero
          className="flex items-center justify-center gap-3 text-[12px] font-medium uppercase tracking-[0.22em] text-mute"
        >
          <span className="h-px w-8 bg-ink/30" />
          {PROFILE.headline}
          <span className="h-px w-8 bg-ink/30" />
        </p>
        <h1
          data-hero
          className="mt-6 font-medium leading-[1.02] tracking-[-0.04em] text-ink"
          style={{ fontSize: "clamp(56px, 10vw, 116px)" }}
        >
          Kush Vyas.
        </h1>
        <p
          data-hero
          className="mt-3 font-light italic leading-[1.1] tracking-[-0.02em]"
          style={{ fontSize: "clamp(24px, 3.4vw, 40px)" }}
        >
          <span className="text-gradient">Data, translated into decisions.</span>
        </p>
        <p
          data-hero
          className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.6] text-mute md:text-[19px]"
        >
          {PROFILE.subhead}
        </p>
        <div data-hero className="mt-8 flex items-center justify-center gap-6">
          <Link
            href="/experience"
            className="rounded-full bg-ink px-6 py-3 text-[15px] text-white transition-colors hover:bg-black"
          >
            See my work
          </Link>
          <Link href="/contact" className="text-[15px] text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink">
            Get in touch ›
          </Link>
        </div>
      </div>

      {/* photo + stat stack side by side */}
      <div
        ref={photoWrapRef}
        className="mx-auto mt-16 grid w-full max-w-page grid-cols-1 gap-5 px-5 pb-8 md:mt-20 md:grid-cols-[minmax(0,400px)_1fr] md:items-stretch"
      >
        {/* left column: photo + LEGO companion */}
        <div className="mx-auto flex w-full max-w-[400px] flex-col gap-4">
          <div
            ref={photoRef}
            className="overflow-hidden rounded-[20px] border border-black/[0.08] bg-white p-2 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)]"
          >
            <img
              src={PROFILE.photo}
              alt="Kush Vyas"
              className="block aspect-[4/5] h-auto w-full rounded-[14px] object-cover object-top"
            />
          </div>
          <div data-item className="card flex items-center gap-5 px-6 py-4">
            <img src="/lego.png" alt="Kush as a LEGO minifigure" className="h-20 w-auto" />
            <p className="text-[18px] font-medium leading-[1.25] tracking-tight text-ink">
              Also available in <span className="text-gradient">LEGO.</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-left">
          {STATS.map((st) => (
            <div
              key={st.label}
              data-item
              className="card flex flex-1 items-center gap-6 px-7 py-6 md:px-8"
            >
              <p
                className={[
                  "w-[42%] shrink-0 font-light leading-none tracking-[-0.04em]",
                  st.accent ? "text-apple" : "text-ink",
                ].join(" ")}
                style={{ fontSize: "clamp(40px, 5vw, 60px)" }}
              >
                {st.prefix}
                <span data-count={st.value}>{st.value.toLocaleString()}</span>
                {st.suffix}
              </p>
              <div className="min-w-0">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-mute">
                  {st.label}
                </p>
                <p className="mt-1.5 text-[15px] leading-[1.45] text-ink/80">{st.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
