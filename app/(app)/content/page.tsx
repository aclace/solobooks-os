import { Topbar } from "@/components/layout/Topbar";
import { EmptyState } from "@/components/ui/EmptyState";
import { Card } from "@/components/ui/Card";
import { contentItems } from "@/lib/data";

export default function ContentPage() {
  return (
    <>
      <Topbar title="Content" />
      <div className="p-8">
        {contentItems.length === 0 ? (
          <EmptyState
            title="No content yet"
            description="Track drafts and publishing status across your channels. Add a row to lib/data.ts or connect your own database."
            actionLabel="New content item"
          />
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {contentItems.map((c) => (
              <Card key={c.id}>
                <p className="font-medium text-foreground">{c.title}</p>
                <p className="text-sm text-muted">
                  {c.channel} — {c.status}
                </p>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
