"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "../data";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="no-scrollbar -mr-2 flex min-w-0 items-center gap-1 overflow-x-auto md:gap-3">
      {NAV.map((item) => {
        const active =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={[
              "whitespace-nowrap px-2 py-1 text-[12px] transition-colors",
              active ? "text-ink" : "text-ink/60 hover:text-ink",
            ].join(" ")}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
