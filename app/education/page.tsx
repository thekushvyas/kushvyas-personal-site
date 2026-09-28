import Section from "../components/Section";
import { EDUCATION } from "../data";

export const metadata = { title: "Education — Kush Vyas" };

export default function EducationPage() {
  return (
    <Section
      label="Education"
      title="Always learning"
      intro="From commerce and science in Ahmedabad to business analytics in Pune and Boston."
    >
      <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        {EDUCATION.map((ed, i) => (
          <li
            key={ed.degree}
            data-item
            className={[
              "flex flex-col rounded-[28px] bg-white p-8 md:p-10",
              i === 0 ? "md:col-span-2" : "",
            ].join(" ")}
          >
            <p className="text-[14px] font-semibold text-mute">{ed.period}</p>
            <h2
              className={[
                "mt-3 font-semibold leading-[1.1] tracking-[-0.025em] text-ink",
                i === 0 ? "text-[32px] md:text-[48px]" : "text-[24px] md:text-[28px]",
              ].join(" ")}
            >
              {ed.degree}
            </h2>
            <p className="mt-2 text-[17px] text-ink/80 md:text-[19px]">{ed.school}</p>
            <p className="mt-1 text-[17px] text-mute">{ed.detail}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
