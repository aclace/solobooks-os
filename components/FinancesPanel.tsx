import type { MoneySummary, Transaction } from "@/lib/types";
import { MoneyRing } from "@/components/MoneyRing";
import { money } from "@/lib/format";

export function FinancesPanel({
  summary,
  transactions,
}: {
  summary: MoneySummary;
  transactions: Transaction[];
}) {
  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
      <div className="xl:col-span-4">
        <MoneyRing summary={summary} />
      </div>
      <div className="xl:col-span-8">
        <div className="card overflow-hidden">
          <div className="border-b border-white/[0.06] px-5 py-4">
            <h3 className="font-display text-base font-semibold text-ink">Transactions</h3>
            <p className="text-xs text-ink-muted">Demo data — connect your own source in lib/data.ts.</p>
          </div>
          {transactions.map((t, i) => (
            <div
              key={t.id}
              className={`flex items-center gap-3 px-5 py-3.5 ${i !== transactions.length - 1 ? "border-b border-white/[0.05]" : ""}`}
            >
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">{t.label}</p>
                <p className="text-[11px] text-ink-muted">{t.category} · {t.date}</p>
              </div>
              <span className={`font-display text-sm font-bold ${t.type === "revenue" ? "text-neon-teal" : "text-coral-400"}`}>
                {t.type === "revenue" ? "+" : "-"}{money(t.amount)}
              </span>
            </div>
          ))}
          {transactions.length === 0 && (
            <p className="px-5 py-10 text-center text-sm text-ink-muted">No transactions yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
