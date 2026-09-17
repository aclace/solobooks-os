"use client";

import Link from "next/link";
import type { Venture } from "@/lib/types";
import { IconPlug, IconPlus } from "@/components/icons";

const statusRing: Record<string, string> = {
  active: "#4fd6c0",
  building: "#f2c879",
  paused: "#8a5f6c",
  planning: "#5aa9ff",
};

export function HubRail({ ventures }: { ventures: Venture[] }) {
  return (
    <aside className="sticky top-0 hidden h-screen w-[68px] flex-col items-center gap-3 py-5 xl:flex">
      <p className="text-[10px] font-medium uppercase tracking-widest text-ink-faint">Hubs</p>
      <div className="flex flex-1 flex-col items-center gap-3 overflow-y-auto no-scrollbar pt-1">
        {ventures.map((v) => (
          <Link key={v.id} href="/ventures" title={v.name} className="group relative">
            <span
              className="flex h-11 w-11 items-center justify-center rounded-2xl font-display text-sm font-bold text-white transition-transform group-hover:scale-105"
              style={{ background: `linear-gradient(135deg, ${v.accent}, rgba(0,0,0,0.4))` }}
            >
              {v.monogram}
            </span>
            <span
              className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full ring-2 ring-base-900"
              style={{ background: statusRing[v.status] }}
            />
          </Link>
        ))}
        <Link
          href="/ventures"
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-dashed border-white/15 text-ink-muted transition-colors hover:border-coral hover:text-coral"
        >
          <IconPlus width={18} height={18} />
        </Link>
      </div>
      <Link
        href="/settings"
        title="Integrations"
        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-violet via-coral to-gold text-white shadow-glow animate-pulse-soft"
      >
        <IconPlug />
      </Link>
    </aside>
  );
}
