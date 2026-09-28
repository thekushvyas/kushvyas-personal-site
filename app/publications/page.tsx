import Section from "../components/Section";
import { PUBLICATIONS } from "../data";

export const metadata = { title: "Publications — Kush Vyas" };

export default function PublicationsPage() {
  return (
    <Section
      label="Publications"
      title="Research, published"
      intro="Peer-reviewed work on business analytics, consumer behaviour and the future of data management."
    >
      <ol className="flex flex-col gap-4 md:gap-5">
        {PUBLICATIONS.map((pub) => (
          <li
            key={pub.title}
            data-item
            className="grid grid-cols-1 gap-4 card p-8 md:grid-cols-[160px_1fr] md:gap-10 md:p-10"
          >
            {pub.year && (
              <p className="text-[40px] font-light leading-none tracking-[-0.03em] md:text-[48px]">
                <span className="text-gradient">{pub.year}</span>
              </p>
            )}
            <div>
              <h2 className="text-[24px] font-medium leading-[1.2] tracking-[-0.02em] text-ink md:text-[28px]">
                {pub.title}
              </h2>
              {pub.venue && <p className="mt-2 text-[17px] text-mute">{pub.venue}</p>}
              {pub.href && (
                <a
                  href={pub.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-block text-[17px] text-apple hover:underline"
                >
                  Read the paper ›
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
