import Section from "../components/Section";
import Hud from "../components/Hud";
import { PUBLICATIONS } from "../data";

export const metadata = { title: "Publications — Kush Vyas" };

export default function PublicationsPage() {
  return (
    <Section label="Publications" meta={`${PUBLICATIONS.length} papers`}>
      <ol className="flex flex-col gap-5">
        {PUBLICATIONS.map((pub, i) => (
          <li key={pub.title} data-item>
            <div
              data-spot
              className="group grid grid-cols-1 gap-4 rounded-2xl border border-blue-100 bg-white/60 p-6 backdrop-blur transition-colors hover:border-blue-300 md:grid-cols-[120px_1fr] md:gap-8"
            >
              <Hud />
              <div className="font-mono">
                <div className="text-[11px] tracking-[0.18em] text-blue-400">
                  PUB_{String(i + 1).padStart(2, "0")}
                </div>
                {pub.year && (
                  <div className="mt-1 text-4xl font-semibold tracking-tight text-slate-900">
                    {pub.year}
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold leading-snug tracking-tight text-slate-900">
                  {pub.title}
                </h3>
                {pub.venue && (
                  <div className="mt-2 font-mono text-xs tracking-wide text-slate-500">
                    {pub.venue}
                  </div>
                )}
                {pub.href && (
                  <a
                    href={pub.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-blue-200 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-blue-700 transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                  >
                    Read on ResearchGate <span aria-hidden>↗</span>
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
