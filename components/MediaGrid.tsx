"use client";

import { useState } from "react";
import { IconMedia, IconPlus } from "@/components/icons";
import type { AssetType, MediaAsset, Venture } from "@/lib/types";
import { EntityModal, type FieldConfig } from "@/components/ui/EntityModal";

const typeLabel: Record<AssetType, string> = {
  thumbnail: "Thumbnails", image: "Images", video: "Video", audio: "Audio", logo: "Brand", doc: "Docs",
};
const filters: (AssetType | "all")[] = ["all", "thumbnail", "image", "video", "audio", "logo", "doc"];

export function MediaGrid({ assets, ventures }: { assets: MediaAsset[]; ventures: Venture[] }) {
  const [items, setItems] = useState(assets);
  const [type, setType] = useState<AssetType | "all">("all");
  const [showAdd, setShowAdd] = useState(false);
  const filtered = items.filter((a) => type === "all" || a.type === type);

  const FIELDS: FieldConfig[] = [
    { key: "name", label: "Name", type: "text", required: true },
    { key: "type", label: "Type", type: "select", options: Object.entries(typeLabel).map(([v, label]) => ({ value: v, label })) },
    { key: "tag", label: "Tag", type: "text", placeholder: "e.g. thumbnail v3" },
    { key: "ventureId", label: "Venture (optional)", type: "select", options: ventures.map((v) => ({ value: v.id, label: v.name })) },
    { key: "accent", label: "Accent color", type: "color" },
  ];

  return (
    <>
      <div className="mb-5 flex flex-wrap items-center gap-2 animate-fade-up">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setType(f)}
            className={`chip capitalize ${type === f ? "bg-coral text-white" : "bg-white/[0.05] text-ink-muted hover:text-ink"}`}
          >
            {f === "all" ? "All" : typeLabel[f]}
          </button>
        ))}
        <button
          onClick={() => setShowAdd(true)}
          className="ml-auto inline-flex items-center gap-1.5 rounded-xl bg-coral px-3.5 py-2 text-xs font-semibold text-white hover:bg-coral-600"
        >
          <IconPlus width={14} height={14} /> Add asset
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4 animate-fade-up">
        {filtered.map((a) => (
          <div key={a.id} className="card overflow-hidden">
            <div
              className="relative flex aspect-video items-center justify-center overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${a.accent}44, rgba(0,0,0,0.5))` }}
            >
              <IconMedia width={26} height={26} />
              <span className="absolute left-2 top-2 chip bg-black/40 text-[10px] capitalize text-ink-soft">{a.type}</span>
            </div>
            <div className="p-3">
              <p className="truncate text-sm font-medium text-ink">{a.name}</p>
              <p className="mt-0.5 text-[11px] text-ink-faint">{a.tag}</p>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="card grain relative col-span-full flex min-h-[20vh] flex-col items-center justify-center p-8 text-center">
            <p className="text-sm text-ink-muted">No assets yet. Add your first one above.</p>
          </div>
        )}
      </div>

      {showAdd && (
        <EntityModal
          title="New asset"
          fields={FIELDS}
          onClose={() => setShowAdd(false)}
          onSubmit={(values) => {
            setItems((cur) => [
              ...cur,
              {
                id: `a${Date.now()}`,
                name: String(values.name ?? "New asset"),
                type: (values.type as AssetType) ?? "image",
                accent: String(values.accent ?? "#5aa9ff"),
                tag: String(values.tag ?? ""),
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
