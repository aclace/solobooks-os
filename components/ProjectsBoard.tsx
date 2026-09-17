"use client";

import { useMemo, useState } from "react";
import type { Priority, Project, ProjectStatus, Venture } from "@/lib/types";
import { projectStatusMeta, priorityColor } from "@/lib/format";
import { EntityModal, type FieldConfig } from "@/components/ui/EntityModal";
import { IconPlus, IconProjects } from "@/components/icons";

export function ProjectsBoard({
  initialProjects,
  ventures,
}: {
  initialProjects: Project[];
  ventures: Venture[];
}) {
  const [items, setItems] = useState(initialProjects);
  const [showAdd, setShowAdd] = useState(false);
  const vmap = useMemo(() => new Map(ventures.map((v) => [v.id, v] as const)), [ventures]);

  const FIELDS: FieldConfig[] = [
    { key: "name", label: "Name", type: "text", required: true },
    { key: "ventureId", label: "Venture", type: "select", options: ventures.map((v) => ({ value: v.id, label: v.name })) },
    { key: "description", label: "Description", type: "textarea" },
    { key: "status", label: "Status", type: "select", options: Object.entries(projectStatusMeta).map(([v, m]) => ({ value: v, label: m.label })) },
    { key: "priority", label: "Priority", type: "select", options: ["critical", "high", "medium", "low"].map((v) => ({ value: v, label: v })) },
    { key: "progress", label: "Progress (%)", type: "number", placeholder: "0-100" },
    { key: "deadline", label: "Deadline", type: "date" },
  ];

  return (
    <div>
      <div className="mb-4 flex animate-fade-up justify-end">
        <button
          onClick={() => setShowAdd(true)}
          className="inline-flex items-center gap-2 rounded-xl bg-coral px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
        >
          <IconPlus width={16} height={16} /> New project
        </button>
      </div>

      {items.length === 0 ? (
        <div className="card grain relative flex min-h-[46vh] flex-col items-center justify-center overflow-hidden p-10 text-center animate-fade-up">
          <span className="relative flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-coral to-coral-600 text-white shadow-glow">
            <IconProjects width={28} height={28} />
          </span>
          <h2 className="relative mt-5 font-display text-xl font-bold text-ink">No projects yet</h2>
          <p className="relative mt-2 max-w-md text-sm text-ink-muted">
            Projects are things you build — a product, a client engagement, or something to ship. Add your first one to get started.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 animate-fade-up">
          {items.map((p) => {
            const meta = projectStatusMeta[p.status];
            const v = vmap.get(p.ventureId);
            return (
              <div key={p.id} className="card p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-base font-semibold text-ink">{p.name}</h3>
                  <span className="chip shrink-0" style={{ background: `${meta.color}22`, color: meta.color }}>
                    {meta.label}
                  </span>
                </div>
                <p className="mt-1.5 line-clamp-2 text-xs text-ink-muted">{p.description}</p>
                <div className="mt-3 flex items-center gap-2 text-[11px] text-ink-faint">
                  <span className="inline-flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: priorityColor[p.priority as Priority] }} />
                    {p.priority}
                  </span>
                  <span>·</span>
                  <span>{v?.name ?? "—"}</span>
                  <span>·</span>
                  <span>{p.missions} missions</span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                  <div className="h-full rounded-full bg-coral" style={{ width: `${p.progress}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {showAdd && (
        <EntityModal
          title="New project"
          fields={FIELDS}
          onClose={() => setShowAdd(false)}
          onSubmit={(values) => {
            setItems((cur) => [
              ...cur,
              {
                id: `p${Date.now()}`,
                name: String(values.name ?? "Untitled project"),
                ventureId: String(values.ventureId ?? ventures[0]?.id ?? ""),
                description: String(values.description ?? ""),
                status: (values.status as ProjectStatus) ?? "planning",
                priority: (values.priority as Priority) ?? "medium",
                progress: Number(values.progress ?? 0),
                deadline: String(values.deadline ?? new Date().toISOString().slice(0, 10)),
                missions: 0,
              },
            ]);
            setShowAdd(false);
          }}
        />
      )}
    </div>
  );
}
