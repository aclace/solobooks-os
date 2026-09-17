import { Topbar } from "@/components/layout/Topbar";
import { EmptyState } from "@/components/ui/EmptyState";
import { Card } from "@/components/ui/Card";
import { financeSnapshots } from "@/lib/data";

export default function FinancesPage() {
  return (
    <>
      <Topbar title="Finances" />
      <div className="p-8">
        {financeSnapshots.length === 0 ? (
          <EmptyState
            title="No financial data yet"
            description="Connect your own accounting source and populate lib/data.ts, or wire this page up to your database."
          />
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {financeSnapshots.map((f) => (
              <Card key={f.month}>
                <p className="font-medium text-foreground">{f.month}</p>
                <p className="text-sm text-muted">
                  Income {f.income} / Expenses {f.expenses}
                </p>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
