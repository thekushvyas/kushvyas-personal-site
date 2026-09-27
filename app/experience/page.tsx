import Section from "../components/Section";
import { EXPERIENCE } from "../data";

export const metadata = { title: "Experience — Kush Vyas" };

export default function ExperiencePage() {
  return (
    <Section label="Experience">
      <ol className="flex flex-col gap-8">
        {EXPERIENCE.map((e) => (
          <li
            key={e.role + e.org}
            className="grid grid-cols-1 gap-1 md:grid-cols-[150px_1fr] md:gap-6"
          >
            <div className="text-xs text-blue-700">{e.period}</div>
            <div>
              <div className="text-base font-medium text-black">{e.role}</div>
              <div className="text-sm text-black/60">{e.org}</div>
              {e.bullets.length > 0 && (
              <ul className="mt-2 list-disc pl-5 text-[15px] leading-7 text-black/80 marker:text-blue-400">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
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
