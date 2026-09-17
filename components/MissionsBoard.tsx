"use client";

import { useMemo, useState } from "react";
import type { Mission, MissionStatus, Venture } from "@/lib/types";
import { MissionRow } from "@/components/MissionRow";
import { EntityModal, type FieldConfig } from "@/components/ui/EntityModal";
import { IconPlus, IconMissions } from "@/components/icons";

const columns: { status: MissionStatus; label: string }[] = [
  { status: "backlog", label: "Backlog" },
  { status: "next", label: "Next" },
  { status: "in_progress", label: "In progress" },
  { status: "blocked", label: "Blocked" },
  { status: "complete", label: "Complete" },
];

export function MissionsBoard({
  initialMissions,
  ventures,
}: {
  initialMissions: Mission[];
  ventures: Venture[];
}) {
  const [items, setItems] = useState(initialMissions);
  const [showAdd, setShowAdd] = useState(false);
  const vmap = useMemo(() => new Map(ventures.map((v) => [v.id, v] as const)), [ventures]);

  const FIELDS: FieldConfig[] = [
    { key: "title", label: "Title", type: "text", required: true },
    { key: "ventureId", label: "Venture", type: "select", options: ventures.map((v) => ({ value: v.id, label: v.name })) },
    { key: "priority", label: "Priority", type: "select", options: ["critical", "high", "medium", "low"].map((v) => ({ value: v, label: v })) },
    { key: "status", label: "Status", type: "select", options: columns.map((c) => ({ value: c.status, label: c.label })) },
    { key: "due", label: "Due date", type: "date" },
  ];

  return (
    <div>
      <div className="mb-4 flex animate-fade-up justify-end">
        <button
          onClick={() => setShowAdd(true)}
          className="inline-flex items-center gap-2 rounded-xl bg-coral px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
        >
          <IconPlus width={16} height={16} /> New mission
        </button>
      </div>

      {items.length === 0 ? (
        <EmptyBoard onAdd={() => setShowAdd(true)} />
      ) : (
        <div className="flex flex-col gap-6 animate-fade-up">
          {columns.map((col) => {
            const rows = items.filter((m) => m.status === col.status);
            if (rows.length === 0) return null;
            return (
              <section key={col.status}>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-faint">
                  {col.label} · {rows.length}
                </h3>
                <div className="flex flex-col gap-2">
                  {rows.map((m) => (
                    <MissionRow key={m.id} mission={m} venture={vmap.get(m.ventureId)} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}

      {showAdd && (
        <EntityModal
          title="New mission"
          fields={FIELDS}
          onClose={() => setShowAdd(false)}
          onSubmit={(values) => {
            setItems((cur) => [
              ...cur,
              {
                id: `m${Date.now()}`,
                title: String(values.title ?? "Untitled mission"),
                ventureId: String(values.ventureId ?? ventures[0]?.id ?? ""),
                priority: (values.priority as Mission["priority"]) ?? "medium",
                status: (values.status as MissionStatus) ?? "backlog",
                due: String(values.due ?? new Date().toISOString().slice(0, 10)),
              },
            ]);
            setShowAdd(false);
          }}
        />
      )}
    </div>
  );
}

function EmptyBoard({ onAdd }: { onAdd: () => void }) {
  return (
    <div className="card grain relative flex min-h-[40vh] flex-col items-center justify-center overflow-hidden p-10 text-center animate-fade-up">
      <div className="absolute -top-10 h-40 w-40 rounded-full bg-coral/20 blur-3xl" />
      <span className="relative flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-coral to-coral-600 text-white shadow-glow">
        <IconMissions width={28} height={28} />
      </span>
      <h2 className="relative mt-5 font-display text-xl font-bold text-ink">No missions yet</h2>
      <p className="relative mt-2 max-w-md text-sm text-ink-muted">
        Missions are the day-to-day tasks that move a venture forward. Add your first one to get started.
      </p>
      <button
        onClick={onAdd}
        className="relative mt-5 inline-flex items-center gap-2 rounded-xl bg-coral px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
      >
        <IconPlus width={16} height={16} /> New mission
      </button>
    </div>
  );
}
