import Section from "../components/Section";
import { PROFILE } from "../data";

export const metadata = { title: "Contact — Kush Vyas" };

export default function ContactPage() {
  return (
    <Section
      label="Contact"
      title="Let’s talk"
      intro="I’m open to internships, research and collaborations. The fastest way to reach me is email."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        <div
          data-item
          className="relative overflow-hidden rounded-[20px] bg-ink p-10 text-center text-white md:col-span-2 md:p-16"
        >
          <div aria-hidden className="glow glow-blue left-[calc(50%-320px)] top-[-40%] h-[380px] w-[640px] opacity-80" />
          <div className="relative">
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-white/50">Email</p>
            <p
              className="mt-4 break-all font-light tracking-[-0.03em]"
              style={{ fontSize: "clamp(28px, 5vw, 56px)" }}
            >
              {PROFILE.email}
            </p>
            <a
              href={`mailto:${PROFILE.email}`}
              className="mt-8 inline-block rounded-full bg-white px-7 py-3 text-[15px] text-ink transition-colors hover:bg-white/90"
            >
              Send a message
            </a>
          </div>
        </div>

        <a
          data-item
          href={PROFILE.linkedin}
          target="_blank"
          rel="noreferrer"
          className="group card p-8 transition-all duration-500 hover:-translate-y-0.5 hover:border-black/20 md:p-10"
        >
          <p className="text-[14px] font-semibold text-mute">LinkedIn</p>
          <p className="mt-3 text-[26px] font-medium tracking-[-0.02em] text-ink">
            Connect professionally.
          </p>
          <p className="mt-4 text-[17px] text-apple group-hover:underline">View profile ›</p>
        </a>

        <a
          data-item
          href={PROFILE.github}
          target="_blank"
          rel="noreferrer"
          className="group card p-8 transition-all duration-500 hover:-translate-y-0.5 hover:border-black/20 md:p-10"
        >
          <p className="text-[14px] font-semibold text-mute">GitHub</p>
          <p className="mt-3 text-[26px] font-medium tracking-[-0.02em] text-ink">
            Browse the code.
          </p>
          <p className="mt-4 text-[17px] text-apple group-hover:underline">View repositories ›</p>
        </a>
      </div>
    </Section>
  );
}
