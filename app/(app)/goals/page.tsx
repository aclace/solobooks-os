import { Topbar } from "@/components/layout/Topbar";
import { PageHeader } from "@/components/layout/PageHeader";
import { GoalsBoard } from "@/components/GoalsBoard";
import { goals } from "@/lib/data";

export default function GoalsPage() {
  return (
    <div>
      <Topbar title="Goals — demo data" />
      <PageHeader eyebrow="Targets" title="Goals" subtitle="Revenue, content, learning, and business targets in one list." />
      <GoalsBoard initialGoals={goals} />
    </div>
  );
}
