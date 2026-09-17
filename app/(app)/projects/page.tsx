import { Topbar } from "@/components/layout/Topbar";
import { EmptyState } from "@/components/ui/EmptyState";
import { Card } from "@/components/ui/Card";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <>
      <Topbar title="Projects" />
      <div className="p-8">
        {projects.length === 0 ? (
          <EmptyState
            title="No projects yet"
            description="Track things you're building, selling, or shipping. Add a row to lib/data.ts or connect your own database."
            actionLabel="New project"
          />
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {projects.map((p) => (
              <Card key={p.id}>
                <p className="font-medium text-foreground">{p.name}</p>
                <p className="text-sm text-muted">{p.status}</p>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
