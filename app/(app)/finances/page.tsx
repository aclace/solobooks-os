import { Topbar } from "@/components/layout/Topbar";
import { PageHeader } from "@/components/layout/PageHeader";
import { FinancesPanel } from "@/components/FinancesPanel";
import { moneySummary, transactions } from "@/lib/data";

export default function FinancesPage() {
  return (
    <div>
      <Topbar title="Finances — demo data" />
      <PageHeader eyebrow="Money" title="Finances" subtitle="Revenue, expenses, and the goal ring — across every venture." />
      <FinancesPanel summary={moneySummary} transactions={transactions} />
    </div>
  );
}
