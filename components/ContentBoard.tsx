"use client";

import { useMemo, useState } from "react";
import type { ContentItem, ContentStage, ContentType, Venture } from "@/lib/types";
import { CONTENT_STAGES } from "@/lib/types";
import { stageColor } from "@/lib/format";
import { EntityModal, type FieldConfig } from "@/components/ui/EntityModal";
import { IconPlus } from "@/components/icons";

const typeIcon: Record<ContentType, string> = { video: "▶", short: "S", blog: "B", social: "@" };
const types: (ContentType | "all")[] = ["all", "video", "short", "blog", "social"];

export function PipelineStrip({ content }: { content: ContentItem[] }) {
  const counts = CONTENT_STAGES.map((s) => ({ stage: s, count: content.filter((c) => c.stage === s).length }));
  return (
    <div className="card p-5 animate-fade-up">
      <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
        {counts.map(({ stage, count }) => (
          <div key={stage} className="text-center">
            <div
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl font-display text-lg font-bold"
              style={{ background: `${stageColor[stage]}22`, color: stageColor[stage] }}
            >
              {count}
            </div>
            <p className="mt-1.5 text-[10px] capitalize text-ink-muted">{stage}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContentBoard({
  initialContent,
  ventures,
}: {
  initialContent: ContentItem[];
  ventures: Venture[];
}) {
  const [items, setItems] = useState(initialContent);
  const [type, setType] = useState<ContentType | "all">("all");
  const [showAdd, setShowAdd] = useState(false);
  const channels = useMemo(
    () => ["all", ...Array.from(new Set(items.map((c) => c.channel).filter(Boolean)))],
    [items]
  );
  const [channel, setChannel] = useState<string>("all");

  const filtered = items.filter(
    (c) => (type === "all" || c.type === type) && (channel === "all" || c.channel === channel)
  );

  const FIELDS: FieldConfig[] = [
    { key: "title", label: "Title", type: "text", required: true },
    { key: "channel", label: "Channel", type: "text", placeholder: "e.g. Demo Channel" },
    { key: "type", label: "Type", type: "select", options: ["video", "short", "blog", "social"].map((v) => ({ value: v, label: v })) },
    { key: "stage", label: "Stage", type: "select", options: CONTENT_STAGES.map((s) => ({ value: s, label: s })) },
    { key: "ventureId", label: "Venture (optional)", type: "select", options: ventures.map((v) => ({ value: v.id, label: v.name })) },
  ];

  return (
    <>
      <div className="mb-5 flex flex-wrap items-center gap-2 animate-fade-up">
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            className={`chip capitalize ${type === t ? "bg-coral text-white" : "bg-white/[0.05] text-ink-muted hover:text-ink"}`}
          >
            {t}
          </button>
        ))}
        <span className="mx-1 h-4 w-px bg-white/10" />
        {channels.map((ch) => (
          <button
            key={ch}
            onClick={() => setChannel(ch)}
            className={`chip ${channel === ch ? "bg-white/15 text-ink" : "bg-white/[0.04] text-ink-faint hover:text-ink"}`}
          >
            {ch}
          </button>
        ))}
        <button
          onClick={() => setShowAdd(true)}
          className="ml-auto inline-flex items-center gap-1.5 rounded-xl bg-coral px-3.5 py-2 text-xs font-semibold text-white hover:bg-coral-600"
        >
          <IconPlus width={14} height={14} /> New content
        </button>
      </div>

      <div className="card overflow-hidden animate-fade-up">
        {filtered.map((c, i) => (
          <div
            key={c.id}
            className={`flex w-full items-center gap-3 px-4 py-3.5 ${i !== filtered.length - 1 ? "border-b border-white/[0.05]" : ""}`}
          >
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold"
              style={{ background: `${stageColor[c.stage]}22`, color: stageColor[c.stage] }}
            >
              {typeIcon[c.type]}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink">{c.title}</p>
              <p className="text-[11px] text-ink-muted">
                {c.channel} · <span className="capitalize">{c.type}</span>
              </p>
            </div>
            <span className="chip shrink-0 capitalize" style={{ background: `${stageColor[c.stage]}22`, color: stageColor[c.stage] }}>
              {c.stage}
            </span>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="px-4 py-10 text-center text-sm text-ink-muted">No content matches these filters.</p>
        )}
      </div>

      {showAdd && (
        <EntityModal
          title="New content"
          fields={FIELDS}
          onClose={() => setShowAdd(false)}
          onSubmit={(values) => {
            setItems((cur) => [
              ...cur,
              {
                id: `c${Date.now()}`,
                title: String(values.title ?? "Untitled"),
                channel: String(values.channel ?? "Unassigned"),
                type: (values.type as ContentType) ?? "video",
                stage: (values.stage as ContentStage) ?? "idea",
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
