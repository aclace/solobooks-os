"use client";

import { useState } from "react";
import type { Blog, Venture } from "@/lib/types";
import { EntityModal, type FieldConfig } from "@/components/ui/EntityModal";
import { IconContent, IconExternal, IconPlus } from "@/components/icons";

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-display text-lg font-bold text-ink">{value}</p>
      <p className="text-[10px] uppercase tracking-wide text-ink-faint">{label}</p>
    </div>
  );
}

export function BlogsPanel({ initialBlogs, ventures }: { initialBlogs: Blog[]; ventures: Venture[] }) {
  const [items, setItems] = useState(initialBlogs);
  const [showAdd, setShowAdd] = useState(false);

  const FIELDS: FieldConfig[] = [
    { key: "name", label: "Blog name", type: "text", required: true },
    { key: "url", label: "URL", type: "text", placeholder: "https://..." },
    { key: "description", label: "Description", type: "textarea" },
    { key: "posts", label: "Published posts", type: "number" },
    { key: "drafts", label: "Drafts", type: "number" },
    { key: "ventureId", label: "Venture (optional)", type: "select", options: ventures.map((v) => ({ value: v.id, label: v.name })) },
    { key: "accent", label: "Accent color", type: "color" },
  ];

  return (
    <>
      <div className="mb-3 flex items-center justify-between animate-fade-up">
        <div className="flex items-center gap-2">
          <IconContent width={18} height={18} />
          <h2 className="font-display text-lg font-semibold text-ink">Blogs</h2>
        </div>
        <button
          onClick={() => setShowAdd(true)}
          className="inline-flex items-center gap-1.5 rounded-xl bg-coral px-3 py-1.5 text-xs font-semibold text-white hover:bg-coral-600"
        >
          <IconPlus width={14} height={14} /> Add blog
        </button>
      </div>
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 animate-fade-up">
        {items.map((b) => (
          <div key={b.id} className="card p-5">
            <div className="flex items-start justify-between">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-2xl font-display font-bold text-white"
                style={{ background: `linear-gradient(135deg, ${b.accent}, rgba(0,0,0,0.4))` }}
              >
                {b.name.charAt(0)}
              </span>
              {b.url && (
                <span className="flex items-center gap-1 text-xs text-ink-muted">
                  {b.url.replace("https://", "")} <IconExternal width={13} height={13} />
                </span>
              )}
            </div>
            <h3 className="mt-3 font-display text-base font-semibold text-ink">{b.name}</h3>
            <p className="mt-0.5 line-clamp-1 text-xs text-ink-muted">{b.description}</p>
            <div className="mt-3 flex gap-5 border-t border-white/[0.06] pt-3">
              <Metric label="Published" value={String(b.posts)} />
              <Metric label="Drafts" value={String(b.drafts)} />
            </div>
          </div>
        ))}
        {items.length === 0 && (
          <div className="card grain relative col-span-full flex min-h-[20vh] flex-col items-center justify-center p-8 text-center">
            <p className="text-sm text-ink-muted">No blogs yet. Add your first one above.</p>
          </div>
        )}
      </div>

      {showAdd && (
        <EntityModal
          title="New blog"
          fields={FIELDS}
          onClose={() => setShowAdd(false)}
          onSubmit={(values) => {
            setItems((cur) => [
              ...cur,
              {
                id: `b${Date.now()}`,
                name: String(values.name ?? "New blog"),
                url: String(values.url ?? ""),
                accent: String(values.accent ?? "#f2c879"),
                description: String(values.description ?? ""),
                posts: Number(values.posts ?? 0),
                drafts: Number(values.drafts ?? 0),
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
