import Section from "../components/Section";
import { EXPERIENCE } from "../data";

export const metadata = { title: "Experience — Kush Vyas" };

export default function ExperiencePage() {
  return (
    <Section
      label="Experience"
      title="Where I’ve made an impact"
      intro="Analytics, marketing and community building — from automating outreach pipelines to founding a 200-student data community."
    >
      <ol className="flex flex-col gap-4 md:gap-5">
        {EXPERIENCE.map((e) => (
          <li
            key={e.role + e.org + e.period}
            data-item
            className="grid grid-cols-1 gap-3 card p-8 md:grid-cols-[200px_1fr] md:gap-10 md:p-10"
          >
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-mute md:pt-1.5">{e.period}</p>
            <div>
              <h2 className="text-[24px] font-medium leading-tight tracking-[-0.02em] text-ink md:text-[28px]">
                {e.role}
              </h2>
              <p className="mt-1 text-[17px] text-mute">{e.org}</p>
              {e.bullets.length > 0 && (
                <ul className="mt-5 flex flex-col gap-3 text-[17px] leading-[1.5] text-ink/80">
                  {e.bullets.map((b) => (
                    <li key={b} className="grid grid-cols-[16px_1fr] gap-2">
                      <span aria-hidden className="mt-[11px] h-1.5 w-1.5 rounded-full bg-hairline" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
