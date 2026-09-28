import Section from "../components/Section";
import Hud from "../components/Hud";
import { PROJECTS } from "../data";

export const metadata = { title: "Projects — Kush Vyas" };

export default function ProjectsPage() {
  return (
    <Section label="Projects" meta={`${PROJECTS.length} repos`}>
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {PROJECTS.map((p, i) => {
          const Tag = p.href ? "a" : "div";
          return (
            <li key={p.title} data-item>
              <Tag
                {...(p.href ? { href: p.href, target: "_blank", rel: "noreferrer" } : {})}
                data-spot
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/10"
              >
                <Hud />
                <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.18em] text-blue-500">
                  <span>PRJ_{String(i + 1).padStart(2, "0")}</span>
                  {p.href && (
                    <span className="text-base text-blue-600 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-slate-900 group-hover:text-blue-700">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-[15px] leading-7 text-slate-600">{p.blurb}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-blue-200 bg-blue-50/60 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-blue-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Tag>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
