"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { profile } from "@/lib/data";
import { IconBell, IconSearch } from "@/components/icons";

function greeting(h: number) {
  if (h < 5) return "Still up";
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  if (h < 22) return "Good evening";
  return "Late night";
}

export function Topbar({ title }: { title: string }) {
  const [hi, setHi] = useState("Good evening");
  useEffect(() => setHi(greeting(new Date().getHours())), []);

  return (
    <header className="flex items-center gap-4 pb-6">
      <div className="min-w-0">
        <h1 className="truncate font-display text-2xl font-semibold text-ink">
          {hi}, <span className="text-coral">{profile.name}</span>
        </h1>
        <p className="text-xs text-ink-faint">{title}</p>
      </div>

      <div className="mx-auto hidden w-full max-w-md items-center gap-2 rounded-2xl border border-white/[0.07] bg-black/20 px-4 py-2.5 text-left text-ink-muted md:flex">
        <IconSearch width={18} height={18} />
        <span className="flex-1 text-sm text-ink-faint">Search ventures, missions, content…</span>
        <kbd className="rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[10px] font-medium text-ink-faint">⌘K</kbd>
      </div>

      <div className="ml-auto flex items-center gap-2.5">
        <button
          className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-black/20 text-ink-muted transition-colors hover:text-ink"
          title="Notifications (demo — not wired up)"
        >
          <IconBell width={19} height={19} />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-coral ring-2 ring-base-900" />
        </button>

        <Link
          href="/settings"
          className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-black/20 py-1.5 pl-1.5 pr-3 text-sm text-ink transition-colors hover:border-white/20"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-neon-violet to-coral text-xs font-bold uppercase text-white">
            {profile.name.charAt(0)}
          </span>
          <span className="hidden font-medium sm:inline">{profile.name}</span>
        </Link>
      </div>
    </header>
  );
}
