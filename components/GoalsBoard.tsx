"use client";

import { useState } from "react";
import type { Goal } from "@/lib/types";
import { GoalBar } from "@/components/GoalBar";
import { EntityModal, type FieldConfig } from "@/components/ui/EntityModal";
import { IconPlus } from "@/components/icons";

const CATEGORIES = ["Revenue", "Business", "Content", "Personal", "Learning"];

const FIELDS: FieldConfig[] = [
  { key: "label", label: "Goal", type: "text", required: true },
  { key: "category", label: "Category", type: "select", options: CATEGORIES.map((c) => ({ value: c, label: c })) },
  { key: "current", label: "Current value", type: "number" },
  { key: "target", label: "Target value", type: "number", required: true },
  { key: "unit", label: "Unit (e.g. $, %, or blank)", type: "text" },
];

export function GoalsBoard({ initialGoals }: { initialGoals: Goal[] }) {
  const [items, setItems] = useState(initialGoals);
  const [showAdd, setShowAdd] = useState(false);

  return (
    <div>
      <div className="mb-4 flex animate-fade-up justify-end">
        <button
          onClick={() => setShowAdd(true)}
          className="inline-flex items-center gap-2 rounded-xl bg-coral px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
        >
          <IconPlus width={16} height={16} /> New goal
        </button>
      </div>

      <div className="flex flex-col gap-3 animate-fade-up">
        {items.map((g) => (
          <GoalBar key={g.id} goal={g} />
        ))}
        {items.length === 0 && (
          <div className="card grain relative flex min-h-[30vh] flex-col items-center justify-center p-8 text-center">
            <p className="text-sm text-ink-muted">No goals yet. Add your first one above.</p>
          </div>
        )}
      </div>

      {showAdd && (
        <EntityModal
          title="New goal"
          fields={FIELDS}
          onClose={() => setShowAdd(false)}
          onSubmit={(values) => {
            setItems((cur) => [
              ...cur,
              {
                id: `g${Date.now()}`,
                label: String(values.label ?? "New goal"),
                category: (values.category as Goal["category"]) ?? "Personal",
                current: Number(values.current ?? 0),
                target: Number(values.target ?? 100),
                unit: String(values.unit ?? ""),
                status: "active",
              },
            ]);
            setShowAdd(false);
          }}
        />
      )}
    </div>
  );
}
