import type { Mission, Venture } from "@/lib/types";
import { priorityColor } from "@/lib/format";
import { IconPlay, IconClock } from "@/components/icons";

const statusLabel: Record<Mission["status"], string> = {
  backlog: "Backlog",
  next: "Next",
  in_progress: "In progress",
  blocked: "Blocked",
  complete: "Complete",
};

function dueLabel(due: string) {
  const d = new Date(due + "T00:00:00");
  const today = new Date();
  const diff = Math.round((d.getTime() - today.getTime()) / 86400000);
  if (diff < 0) return { text: `${Math.abs(diff)}d overdue`, danger: true };
  if (diff === 0) return { text: "Due today", danger: true };
  if (diff === 1) return { text: "Tomorrow", danger: false };
  return { text: `In ${diff}d`, danger: false };
}

export function MissionRow({ mission, venture }: { mission: Mission; venture?: Venture }) {
  const due = dueLabel(mission.due);
  const done = mission.status === "complete";

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/[0.05] bg-black/15 px-3.5 py-3 transition-colors hover:border-white/12">
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white"
        style={{ background: `linear-gradient(135deg, ${venture?.accent ?? "#ff5a4d"}, rgba(0,0,0,0.4))` }}
      >
        <IconPlay width={13} height={13} />
      </span>

      <div className="min-w-0 flex-1">
        <p className={`truncate text-sm font-medium ${done ? "text-ink-faint line-through" : "text-ink"}`}>
          {mission.title}
        </p>
        <div className="mt-1 flex items-center gap-2 text-[11px] text-ink-muted">
          <span className="inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: priorityColor[mission.priority] }} />
            {mission.priority}
          </span>
          <span className="text-ink-faint">·</span>
          <span>{venture?.name ?? "—"}</span>
          <span className="text-ink-faint">·</span>
          <span>{statusLabel[mission.status]}</span>
        </div>
      </div>

      {typeof mission.progress === "number" && !done && (
        <div className="hidden w-20 sm:block">
          <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
            <div className="h-full rounded-full bg-coral" style={{ width: `${mission.progress}%` }} />
          </div>
        </div>
      )}

      <span
        className={`chip shrink-0 ${
          done ? "bg-neon-teal/15 text-neon-teal" : due.danger ? "bg-coral/15 text-coral-400" : "bg-white/[0.05] text-ink-muted"
        }`}
      >
        <IconClock width={12} height={12} /> {done ? "Done" : due.text}
      </span>
    </div>
  );
}
