import Section from "../components/Section";
import Hud from "../components/Hud";
import { EXPERIENCE } from "../data";

export const metadata = { title: "Experience — Kush Vyas" };

export default function ExperiencePage() {
  return (
    <Section label="Experience" meta={`${EXPERIENCE.length} records`}>
      <ol className="relative flex flex-col gap-6 pl-8 md:pl-0">
        {/* timeline rail — draws as you scroll */}
        <span
          aria-hidden
          className="absolute bottom-0 left-[7px] top-2 w-px bg-blue-100 md:left-[199px]"
        />
        <span
          data-draw
          aria-hidden
          className="absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-blue-600 via-blue-500 to-indigo-500 md:left-[199px]"
        />

        {EXPERIENCE.map((e, i) => (
          <li
            key={e.role + e.org + e.period}
            data-item
            className="relative grid grid-cols-1 gap-2 md:grid-cols-[176px_1fr] md:gap-12"
          >
            {/* node */}
            <span
              aria-hidden
              className="absolute -left-8 top-2 grid h-[15px] w-[15px] place-items-center rounded-full border-2 border-blue-600 bg-white md:left-[192px]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            </span>

            <div className="pt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-blue-700 md:text-right">
              <div className="text-blue-400">#{String(EXPERIENCE.length - i).padStart(2, "0")}</div>
              <div className="mt-1">{e.period}</div>
            </div>

            <div
              data-spot
              className="group rounded-2xl border border-blue-100 bg-white/60 p-5 backdrop-blur transition-colors hover:border-blue-300 md:p-6"
            >
              <Hud />
              <div className="text-lg font-semibold tracking-tight text-slate-900">{e.role}</div>
              <div className="mt-0.5 font-mono text-xs tracking-wide text-slate-500">{e.org}</div>
              {e.bullets.length > 0 && (
                <ul className="mt-3 flex flex-col gap-2 text-[15px] leading-7 text-slate-700">
                  {e.bullets.map((b) => (
                    <li key={b} className="grid grid-cols-[18px_1fr]">
                      <span className="font-mono text-blue-500">›</span>
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
