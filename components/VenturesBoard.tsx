"use client";

import { useState } from "react";
import type { Venture, VentureStatus } from "@/lib/types";
import { money } from "@/lib/format";
import { EntityModal, type FieldConfig } from "@/components/ui/EntityModal";
import { IconPlus, IconVentures } from "@/components/icons";

const statusDot: Record<VentureStatus, string> = {
  active: "#4fd6c0",
  building: "#f2c879",
  paused: "#8a5f6c",
  planning: "#5aa9ff",
};

const FIELDS: FieldConfig[] = [
  { key: "name", label: "Name", type: "text", required: true },
  { key: "tagline", label: "Tagline", type: "text" },
  { key: "status", label: "Status", type: "select", options: ["active", "building", "planning", "paused"].map((v) => ({ value: v, label: v })) },
  { key: "accent", label: "Accent color", type: "color" },
  { key: "monogram", label: "Monogram (1-2 letters)", type: "text" },
];

export function VenturesBoard({ initialVentures }: { initialVentures: Venture[] }) {
  const [items, setItems] = useState(initialVentures);
  const [showAdd, setShowAdd] = useState(false);

  return (
    <div>
      <div className="mb-5 flex animate-fade-up justify-end">
        <button
          onClick={() => setShowAdd(true)}
          className="inline-flex items-center gap-2 rounded-xl bg-coral px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
        >
          <IconPlus width={16} height={16} /> New venture
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 animate-fade-up">
        {items.map((v) => (
          <div key={v.id} className="card grain relative overflow-hidden p-5">
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-40 blur-2xl" style={{ background: v.accent }} />
            <div className="relative flex items-start justify-between">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-2xl font-display text-lg font-bold text-white"
                style={{ background: `linear-gradient(135deg, ${v.accent}, rgba(0,0,0,0.4))` }}
              >
                {v.monogram}
              </span>
              <span className="chip" style={{ background: `${statusDot[v.status]}22`, color: statusDot[v.status] }}>
                {v.status}
              </span>
            </div>
            <h3 className="relative mt-3 font-display text-base font-semibold text-ink">{v.name}</h3>
            <p className="relative mt-0.5 text-xs text-ink-muted">{v.tagline}</p>
            <div className="relative mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3 text-sm">
              <div>
                <p className="font-display text-base font-bold text-ink">{money(v.revenueMonth)}</p>
                <p className="text-[10px] uppercase tracking-wide text-ink-faint">This month</p>
              </div>
              <div className="text-right">
                <p className="font-display text-base font-bold text-ink">{v.openMissions}</p>
                <p className="text-[10px] uppercase tracking-wide text-ink-faint">Open missions</p>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={() => setShowAdd(true)}
          className="flex min-h-[190px] flex-col items-center justify-center gap-2 rounded-4xl border border-dashed border-white/15 text-ink-muted transition-colors hover:border-coral hover:text-coral"
        >
          <IconVentures width={22} height={22} />
          <span className="text-sm font-medium">Add venture</span>
        </button>
      </div>

      {showAdd && (
        <EntityModal
          title="New venture"
          fields={FIELDS}
          onClose={() => setShowAdd(false)}
          onSubmit={(values) => {
            setItems((cur) => [
              ...cur,
              {
                id: `v${Date.now()}`,
                name: String(values.name ?? "New venture"),
                tagline: String(values.tagline ?? ""),
                status: (values.status as VentureStatus) ?? "planning",
                accent: String(values.accent ?? "#ff5a4d"),
                monogram: String(values.monogram ?? "N").slice(0, 2).toUpperCase(),
                revenueMonth: 0,
                openMissions: 0,
                modules: [],
              },
            ]);
            setShowAdd(false);
          }}
        />
      )}
    </div>
  );
}
