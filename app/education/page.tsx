import Section from "../components/Section";
import Hud from "../components/Hud";
import { EDUCATION } from "../data";

export const metadata = { title: "Education — Kush Vyas" };

export default function EducationPage() {
  return (
    <Section label="Education" meta={`${EDUCATION.length} entries`}>
      <ol className="relative flex flex-col gap-6 pl-8 md:pl-0">
        <span
          aria-hidden
          className="absolute bottom-0 left-[7px] top-2 w-px bg-blue-100 md:left-[199px]"
        />
        <span
          data-draw
          aria-hidden
          className="absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-blue-600 to-indigo-500 md:left-[199px]"
        />
        {EDUCATION.map((ed, i) => (
          <li
            key={ed.degree}
            data-item
            className="relative grid grid-cols-1 gap-2 md:grid-cols-[176px_1fr] md:gap-12"
          >
            <span
              aria-hidden
              className="absolute -left-8 top-2 grid h-[15px] w-[15px] place-items-center rounded-full border-2 border-blue-600 bg-white md:left-[192px]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            </span>
            <div className="pt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-blue-700 md:text-right">
              <div className="text-blue-400">EDU_{String(i + 1).padStart(2, "0")}</div>
              <div className="mt-1">{ed.period}</div>
            </div>
            <div
              data-spot
              className="group rounded-2xl border border-blue-100 bg-white/60 p-6 backdrop-blur transition-colors hover:border-blue-300"
            >
              <Hud />
              <div className="text-xl font-semibold tracking-tight text-slate-900">{ed.degree}</div>
              <div className="mt-1 text-[15px] text-slate-700">{ed.school}</div>
              <div className="mt-3 inline-block rounded-full border border-blue-200 bg-blue-50/60 px-2.5 py-0.5 font-mono text-[11px] tracking-wide text-blue-700">
                {ed.detail}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
