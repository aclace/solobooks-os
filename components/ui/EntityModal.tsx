"use client";

import { useState } from "react";
import { IconClose } from "@/components/icons";

export type FieldConfig = {
  key: string;
  label: string;
  type: "text" | "textarea" | "number" | "select" | "color" | "date";
  options?: { value: string; label: string }[];
  placeholder?: string;
  required?: boolean;
};

export function EntityModal({
  title,
  fields,
  initialValues,
  onClose,
  onSubmit,
}: {
  title: string;
  fields: FieldConfig[];
  initialValues?: Record<string, string | number>;
  onClose: () => void;
  onSubmit: (values: Record<string, string | number>) => void;
}) {
  const [values, setValues] = useState<Record<string, string | number>>(initialValues ?? {});

  const set = (key: string, v: string | number) => setValues((cur) => ({ ...cur, [key]: v }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
      <div
        className="glass max-h-[85vh] w-full max-w-md overflow-y-auto rounded-3xl p-6 shadow-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
          <button onClick={onClose} className="rounded-lg p-1.5 text-ink-muted hover:bg-white/[0.08] hover:text-ink">
            <IconClose width={16} height={16} />
          </button>
        </div>

        <form
          className="flex flex-col gap-3.5"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(values);
          }}
        >
          {fields.map((f) => (
            <label key={f.key} className="flex flex-col gap-1.5 text-sm">
              <span className="text-xs font-medium uppercase tracking-wide text-ink-faint">{f.label}</span>
              {f.type === "textarea" ? (
                <textarea
                  className="rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-ink placeholder:text-ink-faint focus:border-coral focus:outline-none"
                  rows={3}
                  placeholder={f.placeholder}
                  value={(values[f.key] as string) ?? ""}
                  onChange={(e) => set(f.key, e.target.value)}
                  required={f.required}
                />
              ) : f.type === "select" ? (
                <select
                  className="rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-ink focus:border-coral focus:outline-none"
                  value={(values[f.key] as string) ?? ""}
                  onChange={(e) => set(f.key, e.target.value)}
                  required={f.required}
                >
                  <option value="" disabled>Select…</option>
                  {f.options?.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={f.type === "number" ? "number" : f.type === "color" ? "color" : f.type === "date" ? "date" : "text"}
                  className="rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-ink placeholder:text-ink-faint focus:border-coral focus:outline-none"
                  placeholder={f.placeholder}
                  value={(values[f.key] as string | number) ?? ""}
                  onChange={(e) => set(f.key, f.type === "number" ? Number(e.target.value) : e.target.value)}
                  required={f.required}
                />
              )}
            </label>
          ))}

          <div className="mt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-white/10 px-4 py-2 text-sm text-ink-muted hover:text-ink"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-xl bg-coral px-4 py-2 text-sm font-semibold text-white hover:bg-coral-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
