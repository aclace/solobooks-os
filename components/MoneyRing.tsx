import type { MoneySummary } from "@/lib/types";
import { money } from "@/lib/format";

export function MoneyRing({ summary }: { summary: MoneySummary }) {
  const profit = summary.revenueMonth - summary.expensesMonth;
  const pct = Math.min(100, Math.round((summary.revenueMonth / summary.revenueGoal) * 100));
  const R = 78;
  const C = 2 * Math.PI * R;
  const dash = (pct / 100) * C;

  return (
    <div className="card grain relative overflow-hidden p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="font-display text-base font-semibold text-ink">Money</h3>
          <p className="text-xs text-ink-muted">This month · demo data</p>
        </div>
      </div>

      <div className="relative mx-auto grid place-items-center py-2">
        <svg width="196" height="196" viewBox="0 0 196 196" className="-rotate-90">
          <defs>
            <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ff7367" />
              <stop offset="55%" stopColor="#f2c879" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
          <circle cx="98" cy="98" r={R} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="14" />
          <circle
            cx="98" cy="98" r={R} fill="none" stroke="url(#ring)" strokeWidth="14"
            strokeLinecap="round" strokeDasharray={`${dash} ${C}`}
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <p className="text-[11px] uppercase tracking-wider text-ink-faint">Revenue</p>
          <p className="font-display text-3xl font-extrabold text-ink">{money(summary.revenueMonth)}</p>
          <p className="mt-0.5 text-xs text-ink-muted">{pct}% of {money(summary.revenueGoal)} goal</p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2.5">
        <Pill label="Profit" value={money(profit)} accent="#4fd6c0" />
        <Pill label="Expenses" value={money(summary.expensesMonth)} accent="#ff5a4d" />
        <Pill label="Goal" value={`${pct}%`} accent="#a78bfa" />
      </div>
    </div>
  );
}

function Pill({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-black/20 px-3 py-2.5 text-center">
      <p className="font-display text-base font-bold" style={{ color: accent }}>{value}</p>
      <p className="mt-0.5 text-[11px] text-ink-muted">{label}</p>
    </div>
  );
}
