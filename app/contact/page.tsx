import Section from "../components/Section";
import Hud from "../components/Hud";
import { PROFILE } from "../data";

export const metadata = { title: "Contact — Kush Vyas" };

export default function ContactPage() {
  const items = [
    { label: "Email", cmd: "mail", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { label: "GitHub", cmd: "git", value: "github.com/kushvyas-111", href: PROFILE.github },
    {
      label: "LinkedIn",
      cmd: "connect",
      value: "linkedin.com/in/kush-vyas-090396279",
      href: PROFILE.linkedin,
    },
  ];

  return (
    <Section label="Contact" title="Let's talk" meta="status: open to work">
      <p data-item className="max-w-2xl text-xl leading-9 text-slate-800 md:text-2xl md:leading-[1.6]">
        I’m open to internships, research, and collaborations. The fastest way to
        reach me is email — or connect on any of these:
      </p>

      {/* terminal-style card */}
      <div
        data-item
        className="mt-10 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl shadow-blue-900/20"
      >
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-[11px] tracking-wider text-white/40">
            kush@boston: ~/contact
          </span>
        </div>
        <ul className="flex flex-col p-2 font-mono text-sm">
          {items.map((i) => (
            <li key={i.label}>
              <a
                href={i.href}
                target={i.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                data-spot
                className="group flex flex-col gap-1 rounded-xl px-4 py-4 transition-colors hover:bg-white/5 md:flex-row md:items-center md:justify-between"
              >
                <Hud />
                <span className="text-white/50">
                  <span className="text-emerald-400">$</span> {i.cmd}{" "}
                  <span className="text-blue-300">--{i.label.toLowerCase()}</span>
                </span>
                <span className="text-white transition-colors group-hover:text-blue-300">
                  {i.value} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </span>
              </a>
            </li>
          ))}
          <li className="px-4 pb-3 pt-1 text-white/40">
            <span className="text-emerald-400">$</span>{" "}
            <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-white/70" />
          </li>
        </ul>
      </div>
    </Section>
  );
}
