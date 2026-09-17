import { profile } from "@/lib/data";

export function Topbar({ title }: { title: string }) {
  return (
    <header className="flex items-center justify-between border-b border-border px-8 py-4">
      <h1 className="text-xl font-semibold text-foreground">{title}</h1>
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-border" aria-label="Avatar placeholder" />
        <span className="text-sm text-muted">{profile.name}</span>
      </div>
    </header>
  );
}
