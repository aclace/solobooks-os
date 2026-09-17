"use client";

import { useRef, useState } from "react";
import { IconAI, IconClose, IconMedia, IconUpload } from "@/components/icons";

type RefImage = { id: string; url: string };

export function ThumbnailStudio() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [refLibrary, setRefLibrary] = useState<RefImage[]>([]);
  const [title, setTitle] = useState("");
  const [attempted, setAttempted] = useState(false);

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    e.target.value = "";
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setRefLibrary((cur) => [...cur, { id: `r${Date.now()}-${Math.random()}`, url: reader.result as string }]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeRef = (id: string) => setRefLibrary((cur) => cur.filter((r) => r.id !== id));

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
      <div className="flex flex-col gap-5 xl:col-span-7">
        <div className="card p-5">
          <h3 className="font-display text-base font-semibold text-ink">Title</h3>
          <p className="mb-3 text-xs text-ink-muted">The hook your generated thumbnail concepts will be based on.</p>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. I tried this for 30 days…"
            className="w-full rounded-xl border border-white/10 bg-black/25 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-coral focus:outline-none"
          />
        </div>

        <div className="card p-5">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <h3 className="font-display text-base font-semibold text-ink">Reference library</h3>
              <p className="text-xs text-ink-muted">Upload examples of thumbnails you like — attached to every generation.</p>
            </div>
            <button
              onClick={() => fileRef.current?.click()}
              className="inline-flex items-center gap-1.5 rounded-xl bg-white/[0.06] px-3 py-2 text-xs font-semibold text-ink hover:bg-white/[0.12]"
            >
              <IconUpload width={14} height={14} /> Upload
            </button>
            <input ref={fileRef} type="file" accept="image/*" multiple className="hidden" onChange={onUpload} />
          </div>
          {refLibrary.length === 0 ? (
            <div className="flex min-h-[120px] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-white/15 text-ink-faint">
              <IconMedia width={22} height={22} />
              <p className="text-xs">No references uploaded yet — stored locally in this session only.</p>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
              {refLibrary.map((r) => (
                <div key={r.id} className="group relative aspect-video overflow-hidden rounded-xl border border-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.url} alt="Reference" className="h-full w-full object-cover" />
                  <button
                    onClick={() => removeRef(r.id)}
                    className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-lg bg-black/60 text-white opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <IconClose width={12} height={12} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={() => setAttempted(true)}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-coral px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.01]"
        >
          <IconAI width={16} height={16} /> Generate thumbnail concepts
        </button>
      </div>

      <div className="xl:col-span-5">
        <div className="card grain relative overflow-hidden p-5">
          <h3 className="mb-3 font-display text-base font-semibold text-ink">Results</h3>
          {!attempted ? (
            <p className="text-sm text-ink-muted">Generated concepts will appear here.</p>
          ) : (
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-white/15 p-6 text-center">
              <span className="chip bg-coral/15 text-coral-400">Not connected</span>
              <p className="text-sm text-ink-soft">
                Connect your AI key in .env to enable generation.
              </p>
              <p className="text-xs text-ink-faint">
                Set <code className="rounded bg-black/30 px-1.5 py-0.5">AI_PROVIDER</code> and{" "}
                <code className="rounded bg-black/30 px-1.5 py-0.5">AI_API_KEY</code> in your local
                .env.local, then implement the request in lib/ai.ts. See the Settings page for the
                full integration list.
              </p>
              <div className="mt-2 grid w-full grid-cols-2 gap-2">
                {[0, 1].map((i) => (
                  <div key={i} className="flex aspect-video items-center justify-center rounded-xl bg-white/[0.04] text-ink-faint">
                    <IconMedia width={20} height={20} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
