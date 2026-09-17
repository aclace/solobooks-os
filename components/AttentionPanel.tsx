import type { AttentionItem } from "@/lib/types";
import { IconChevron } from "@/components/icons";

const kindMeta: Record<AttentionItem["kind"], { dot: string; tag: string }> = {
  overdue: { dot: "#ff5a4d", tag: "Overdue" },
  deadline: { dot: "#a78bfa", tag: "Deadline" },
  content: { dot: "#4fd6c0", tag: "Content" },
  goal: { dot: "#5aa9ff", tag: "Goal" },
};

export function AttentionPanel({ items }: { items: AttentionItem[] }) {
  return (
    <section className="card animate-fade-up p-4" style={{ animationDelay: "140ms" }}>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-display text-base font-semibold text-ink">Needs attention</h3>
        <span className="chip bg-coral/15 text-coral-400">{items.length}</span>
      </div>
      <div className="flex flex-col gap-2">
        {items.map((item) => {
          const meta = kindMeta[item.kind];
          return (
            <div
              key={item.id}
              className="flex items-center gap-3 rounded-2xl border border-white/[0.05] bg-black/15 px-3.5 py-3"
            >
              <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: meta.dot }} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">{item.title}</p>
                <p className="text-[11px] text-ink-muted">{meta.tag} · {item.meta}</p>
              </div>
              <IconChevron width={14} height={14} className="text-ink-faint" />
            </div>
          );
        })}
        {items.length === 0 && (
          <p className="py-6 text-center text-sm text-ink-muted">Nothing needs attention right now.</p>
        )}
      </div>
    </section>
  );
}
