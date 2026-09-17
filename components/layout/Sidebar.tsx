"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconHome, IconVentures, IconStudio, IconContent, IconMedia, IconMissions,
  IconProjects, IconGoals, IconMoney, IconSettings,
} from "@/components/icons";

const nav = [
  { href: "/", label: "Command Center", Icon: IconHome },
  { href: "/ventures", label: "Ventures", Icon: IconVentures },
  { href: "/studio", label: "Creator Studio", Icon: IconStudio },
  { href: "/content", label: "Content Hub", Icon: IconContent },
  { href: "/media", label: "Media Library", Icon: IconMedia },
  { href: "/missions", label: "Missions", Icon: IconMissions },
  { href: "/projects", label: "Projects", Icon: IconProjects },
  { href: "/goals", label: "Goals", Icon: IconGoals },
  { href: "/finances", label: "Finances", Icon: IconMoney },
];

export function Sidebar() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <aside className="sticky top-0 z-30 flex h-screen w-[76px] flex-col items-center gap-2 py-5">
      <Link
        href="/"
        className="mb-2 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-coral to-coral-600 text-lg font-extrabold text-white shadow-glow"
      >
        S
      </Link>

      <nav className="flex flex-1 flex-col items-center gap-1 overflow-y-auto no-scrollbar">
        {nav.map(({ href, label, Icon }) => {
          const active = isActive(href);
          return (
            <Link
              key={href}
              href={href}
              title={label}
              aria-label={label}
              className={`rail-item group ${active ? "rail-item-active" : ""}`}
            >
              {active && <span className="absolute -left-[14px] h-6 w-1 rounded-full bg-coral" />}
              <Icon />
              <span className="pointer-events-none absolute left-[54px] z-40 whitespace-nowrap rounded-lg border border-white/10 bg-base-900/95 px-2.5 py-1 text-xs font-medium text-ink opacity-0 shadow-card transition-opacity duration-150 group-hover:opacity-100">
                {label}
              </span>
            </Link>
          );
        })}
      </nav>

      <Link href="/settings" title="Settings & integrations" aria-label="Settings & integrations" className="rail-item">
        <IconSettings />
      </Link>
    </aside>
  );
}
