import type { Goal } from "@/lib/types";
import { goalCategoryColor } from "@/lib/format";

function fmt(n: number, unit: string) {
  const v = n >= 1000 ? `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k` : `${n}`;
  return unit === "$" ? `$${v}` : `${v}${unit}`;
}

export function GoalBar({ goal }: { goal: Goal }) {
  const pct = Math.min(100, Math.round((goal.current / goal.target) * 100));
  const color = goalCategoryColor[goal.category];
  return (
    <div className="rounded-2xl border border-white/[0.05] bg-black/15 px-4 py-3">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full" style={{ background: color }} />
          <p className="text-sm font-medium text-ink">{goal.label}</p>
        </div>
        <p className="text-xs font-semibold text-ink-soft">
          {fmt(goal.current, goal.unit)} <span className="text-ink-faint">/ {fmt(goal.target, goal.unit)}</span>
        </p>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${color}, ${color}aa)` }} />
      </div>
    </div>
  );
}
