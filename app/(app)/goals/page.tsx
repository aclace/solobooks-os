import { Topbar } from "@/components/layout/Topbar";
import { EmptyState } from "@/components/ui/EmptyState";
import { Card } from "@/components/ui/Card";
import { goals } from "@/lib/data";

export default function GoalsPage() {
  return (
    <>
      <Topbar title="Goals" />
      <div className="p-8">
        {goals.length === 0 ? (
          <EmptyState
            title="No goals yet"
            description="Set targets and track progress toward them. Add a row to lib/data.ts or connect your own database."
            actionLabel="New goal"
          />
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {goals.map((g) => (
              <Card key={g.id}>
                <p className="font-medium text-foreground">{g.title}</p>
                <p className="text-sm text-muted">{g.progress}% complete</p>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
