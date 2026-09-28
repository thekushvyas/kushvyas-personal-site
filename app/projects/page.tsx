import Section from "../components/Section";
import { PROJECTS } from "../data";

export const metadata = { title: "Projects — Kush Vyas" };

export default function ProjectsPage() {
  return (
    <Section
      label="Projects"
      title="Built to answer real questions"
      intro="Supply chains, sports, valuation and cities — explored with Python, data, and a lot of curiosity."
    >
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        {PROJECTS.map((p, i) => {
          const featured = i === 0;
          const Tag = p.href ? "a" : "div";
          return (
            <li key={p.title} data-item className={featured ? "md:col-span-2" : ""}>
              <Tag
                {...(p.href ? { href: p.href, target: "_blank", rel: "noreferrer" } : {})}
                className="group flex h-full flex-col rounded-[28px] bg-white p-8 transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] md:p-10"
              >
                <p className="text-[14px] font-semibold text-mute">{p.tags.join(" · ")}</p>
                <h2
                  className={[
                    "mt-3 font-semibold leading-[1.1] tracking-[-0.025em] text-ink",
                    featured ? "text-[32px] md:text-[48px]" : "text-[26px] md:text-[32px]",
                  ].join(" ")}
                >
                  {p.title}
                </h2>
                <p
                  className={[
                    "mt-4 flex-1 leading-[1.5] text-mute",
                    featured ? "max-w-3xl text-[19px] md:text-[21px]" : "text-[17px]",
                  ].join(" ")}
                >
                  {p.blurb}
                </p>
                {p.href && (
                  <span className="mt-6 text-[17px] text-apple group-hover:underline">
                    View on GitHub ›
                  </span>
                )}
              </Tag>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
