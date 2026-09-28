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
          className="relative overflow-hidden rounded-[28px] bg-black p-10 text-center text-white md:col-span-2 md:p-16"
        >
          <div aria-hidden className="glow glow-blue left-[calc(50%-320px)] top-[-40%] h-[380px] w-[640px] opacity-80" />
          <div className="relative">
            <p className="text-[17px] font-semibold text-white/60">Email</p>
            <p
              className="mt-3 break-all font-semibold tracking-[-0.03em]"
              style={{ fontSize: "clamp(28px, 5vw, 56px)" }}
            >
              {PROFILE.email}
            </p>
            <a
              href={`mailto:${PROFILE.email}`}
              className="mt-8 inline-block rounded-full bg-apple px-7 py-3 text-[17px] text-white transition-colors hover:bg-[#0077ed]"
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
          className="group rounded-[28px] bg-white p-8 transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] md:p-10"
        >
          <p className="text-[14px] font-semibold text-mute">LinkedIn</p>
          <p className="mt-3 text-[28px] font-semibold tracking-[-0.02em] text-ink">
            Connect professionally.
          </p>
          <p className="mt-4 text-[17px] text-apple group-hover:underline">View profile ›</p>
        </a>

        <a
          data-item
          href={PROFILE.github}
          target="_blank"
          rel="noreferrer"
          className="group rounded-[28px] bg-white p-8 transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] md:p-10"
        >
          <p className="text-[14px] font-semibold text-mute">GitHub</p>
          <p className="mt-3 text-[28px] font-semibold tracking-[-0.02em] text-ink">
            Browse the code.
          </p>
          <p className="mt-4 text-[17px] text-apple group-hover:underline">View repositories ›</p>
        </a>
      </div>
    </Section>
  );
}
