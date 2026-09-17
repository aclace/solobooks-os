import { Topbar } from "@/components/layout/Topbar";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { projects, goals, contentItems } from "@/lib/data";

export default function DashboardPage() {
  const hasAnyData = projects.length || goals.length || contentItems.length;

  return (
    <>
      <Topbar title="Dashboard" />
      <div className="p-8">
        {!hasAnyData ? (
          <EmptyState
            title="Your dashboard is empty"
            description="This is a blank starting point. Add projects, goals, and content to see them summarized here."
          />
        ) : (
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <p className="text-sm text-muted">Projects</p>
              <p className="text-2xl font-semibold">{projects.length}</p>
            </Card>
            <Card>
              <p className="text-sm text-muted">Goals</p>
              <p className="text-2xl font-semibold">{goals.length}</p>
            </Card>
            <Card>
              <p className="text-sm text-muted">Content items</p>
              <p className="text-2xl font-semibold">{contentItems.length}</p>
            </Card>
          </div>
        )}
      </div>
    </>
  );
}
