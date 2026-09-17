import type { Venture, VentureStatus } from "@/lib/types";
import { money } from "@/lib/format";
import { IconArrow, IconBolt } from "@/components/icons";

const statusChip: Record<VentureStatus, { label: string; cls: string }> = {
  active: { label: "Active venture", cls: "bg-gold/90 text-base-900" },
  building: { label: "Building", cls: "bg-neon-teal/90 text-base-900" },
  planning: { label: "Planning", cls: "bg-neon-blue/90 text-base-900" },
  paused: { label: "Paused", cls: "bg-white/20 text-white" },
};

const statusStat: Record<VentureStatus, string> = {
  active: "On track",
  building: "In build",
  planning: "Planning",
  paused: "Paused",
};

export function HeroVenture({ venture }: { venture: Venture }) {
  const chip = statusChip[venture.status];
  return (
    <section className="grain relative h-full overflow-hidden rounded-4xl border border-white/[0.07] shadow-card">
      <div className="hero-mesh absolute inset-0" />
      <div
        className="absolute -right-10 -top-16 h-64 w-64 rounded-full opacity-50 blur-3xl"
        style={{ background: venture.accent }}
      />
      <div className="absolute -bottom-24 right-24 h-56 w-56 rounded-full bg-neon-violet/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-4 bottom-2 select-none font-display text-[10rem] font-extrabold leading-none text-white/[0.06] md:text-[13rem]">
        {venture.monogram}
      </div>

      <div className="relative z-10 flex h-full flex-col gap-6 p-7 md:p-9">
        <div className="flex items-center gap-2">
          <span className={`chip ${chip.cls}`}>
            <IconBolt width={13} height={13} /> {chip.label}
          </span>
          <span className="chip border border-white/15 bg-white/[0.06] text-ink-soft">
            {venture.modules.length} modules
          </span>
          <span className="chip border border-dashed border-white/20 bg-transparent text-ink-faint">Demo</span>
        </div>

        <div className="max-w-lg">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            {venture.name}
          </h2>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70">{venture.tagline}.</p>
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-6">
          <Stat label="This month" value={money(venture.revenueMonth)} />
          <Divider />
          <Stat label="Open missions" value={String(venture.openMissions)} />
          <Divider />
          <Stat label="Status" value={statusStat[venture.status]} accent />
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-base-900 transition-transform hover:scale-[1.02] active:scale-95">
            Open venture <IconArrow width={17} height={17} />
          </button>
          <button className="rounded-2xl border border-white/20 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/[0.12]">
            Quick add mission
          </button>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-wider text-white/50">{label}</p>
      <p className={`font-display text-xl font-bold ${accent ? "text-gold-soft" : "text-white"}`}>{value}</p>
    </div>
  );
}
const Divider = () => <span className="h-8 w-px bg-white/15" />;
