import { Card } from "./Card";

export function EmptyState({
  title,
  description,
  actionLabel,
}: {
  title: string;
  description: string;
  actionLabel?: string;
}) {
  return (
    <Card className="flex flex-col items-center justify-center gap-2 py-16 text-center">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="max-w-sm text-sm text-muted">{description}</p>
      {actionLabel && (
        <button className="mt-4 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:opacity-90">
          {actionLabel}
        </button>
      )}
    </Card>
  );
}
