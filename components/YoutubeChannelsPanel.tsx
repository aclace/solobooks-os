"use client";

import { useState } from "react";
import type { Venture, YoutubeChannel } from "@/lib/types";
import { compact } from "@/lib/format";
import { EntityModal, type FieldConfig } from "@/components/ui/EntityModal";
import { IconPlus, IconStudio } from "@/components/icons";

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-display text-lg font-bold text-ink">{value}</p>
      <p className="text-[10px] uppercase tracking-wide text-ink-faint">{label}</p>
    </div>
  );
}

export function YoutubeChannelsPanel({
  initialChannels,
  ventures,
}: {
  initialChannels: YoutubeChannel[];
  ventures: Venture[];
}) {
  const [items, setItems] = useState(initialChannels);
  const [showAdd, setShowAdd] = useState(false);

  const FIELDS: FieldConfig[] = [
    { key: "name", label: "Channel name", type: "text", required: true },
    { key: "handle", label: "Handle", type: "text", placeholder: "@yourhandle" },
    { key: "description", label: "Description", type: "textarea" },
    { key: "subscribers", label: "Subscribers", type: "number" },
    { key: "videos", label: "Videos", type: "number" },
    { key: "ventureId", label: "Venture (optional)", type: "select", options: ventures.map((v) => ({ value: v.id, label: v.name })) },
    { key: "accent", label: "Accent color", type: "color" },
  ];

  return (
    <>
      <div className="mb-3 flex items-center justify-between animate-fade-up">
        <div className="flex items-center gap-2">
          <IconStudio width={18} height={18} />
          <h2 className="font-display text-lg font-semibold text-ink">YouTube channels</h2>
        </div>
        <button
          onClick={() => setShowAdd(true)}
          className="inline-flex items-center gap-1.5 rounded-xl bg-coral px-3 py-1.5 text-xs font-semibold text-white hover:bg-coral-600"
        >
          <IconPlus width={14} height={14} /> Add channel
        </button>
      </div>
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 animate-fade-up">
        {items.map((c) => (
          <div key={c.id} className="card grain relative overflow-hidden p-5">
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-40 blur-2xl" style={{ background: c.accent }} />
            <div className="relative flex items-start gap-4">
              <span
                className="flex h-14 w-14 items-center justify-center rounded-2xl font-display text-lg font-bold text-white"
                style={{ background: `linear-gradient(135deg, ${c.accent}, rgba(0,0,0,0.4))` }}
              >
                {c.name.charAt(0)}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-base font-semibold text-ink">{c.name}</h3>
                  <span className="text-xs text-ink-faint">{c.handle}</span>
                </div>
                <p className="mt-0.5 line-clamp-1 text-xs text-ink-muted">{c.description}</p>
                <div className="mt-3 flex gap-5">
                  <Metric label="Subscribers" value={compact(c.subscribers)} />
                  <Metric label="Videos" value={String(c.videos)} />
                </div>
              </div>
            </div>
          </div>
        ))}
        {items.length === 0 && (
          <div className="card grain relative col-span-full flex min-h-[20vh] flex-col items-center justify-center p-8 text-center">
            <p className="text-sm text-ink-muted">No channels yet. Add your first one above.</p>
          </div>
        )}
      </div>

      {showAdd && (
        <EntityModal
          title="New channel"
          fields={FIELDS}
          onClose={() => setShowAdd(false)}
          onSubmit={(values) => {
            setItems((cur) => [
              ...cur,
              {
                id: `y${Date.now()}`,
                name: String(values.name ?? "New channel"),
                handle: String(values.handle ?? ""),
                accent: String(values.accent ?? "#4fd6c0"),
                subscribers: Number(values.subscribers ?? 0),
                videos: Number(values.videos ?? 0),
                description: String(values.description ?? ""),
                ventureId: values.ventureId ? String(values.ventureId) : undefined,
              },
            ]);
            setShowAdd(false);
          }}
        />
      )}
    </>
  );
}
