import { Topbar } from "@/components/layout/Topbar";
import { HeroVenture } from "@/components/HeroVenture";
import { MissionRow } from "@/components/MissionRow";
import { AttentionPanel } from "@/components/AttentionPanel";
import { MoneyRing } from "@/components/MoneyRing";
import { GoalBar } from "@/components/GoalBar";
import { AskAiCard } from "@/components/IntegrationCard";
import { FirstRunChecklist } from "@/components/FirstRunChecklist";
import { IconArrow } from "@/components/icons";
import { stageColor } from "@/lib/format";
import {
  ventures, missions, attentionItems, goals, contentItems, moneySummary,
} from "@/lib/data";

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
      <span className="inline-flex items-center gap-1 text-xs font-medium text-ink-faint">
        Demo data <IconArrow width={13} height={13} />
      </span>
    </div>
  );
}

export default function CommandCenter() {
  const vmap = new Map(ventures.map((v) => [v.id, v] as const));
  const openMissions = missions
    .filter((m) => m.status !== "complete")
    .sort((a, b) => a.due.localeCompare(b.due))
    .slice(0, 5);

  return (
    <div>
      <Topbar title="Command Center — demo data" />
      <FirstRunChecklist />
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
        <div className="flex flex-col gap-6 xl:col-span-8">
          <div className="h-[280px] animate-fade-up">
            <HeroVenture venture={ventures[0]} />
          </div>

          <section className="animate-fade-up">
            <SectionHeader title="Today's missions" />
            <div className="card p-3.5">
              <div className="flex flex-col gap-2">
                {openMissions.map((m) => (
                  <MissionRow key={m.id} mission={m} venture={vmap.get(m.ventureId)} />
                ))}
              </div>
            </div>
          </section>

          <section className="animate-fade-up">
            <SectionHeader title="Content pipeline" />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {contentItems.slice(0, 4).map((c) => (
                <div key={c.id} className="flex items-center gap-3 rounded-2xl border border-white/[0.05] bg-black/15 px-3.5 py-3">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-bold uppercase text-white"
                    style={{ background: `${stageColor[c.stage]}33`, color: stageColor[c.stage] }}
                  >
                    {c.type === "short" ? "S" : c.type === "blog" ? "B" : c.type === "social" ? "@" : "▶"}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-ink">{c.title}</p>
                    <p className="text-[11px] text-ink-muted">{c.channel}</p>
                  </div>
                  <span className="chip capitalize" style={{ background: `${stageColor[c.stage]}22`, color: stageColor[c.stage] }}>
                    {c.stage}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-6 xl:col-span-4">
          <div className="animate-fade-up">
            <MoneyRing summary={moneySummary} />
          </div>

          <AttentionPanel items={attentionItems} />

          <section className="card animate-fade-up p-4">
            <h3 className="mb-3 font-display text-base font-semibold text-ink">Active goals</h3>
            <div className="flex flex-col gap-2.5">
              {goals.slice(0, 4).map((g) => (
                <GoalBar key={g.id} goal={g} />
              ))}
            </div>
          </section>

          <AskAiCard />
        </div>
      </div>
    </div>
  );
}
