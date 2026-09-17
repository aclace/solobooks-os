"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { IconCheck, IconClose } from "@/components/icons";

const STORAGE_KEY = "solobooks-os:first-run-dismissed";

const QUESTIONS = [
  "Do you have a blog you want to wire up? → Blog Publisher slot in Settings",
  "Want a CLI to manage this from your terminal? → CLI slot in Settings",
  "Connect a thumbnail generator? → Creator Studio → Thumbnail Studio",
  "Need a real media library instead of local-only assets? → Media Library slot",
  "Which AI provider/model do you want to use? → AI Provider slot",
];

export function FirstRunChecklist() {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    try {
      setDismissed(localStorage.getItem(STORAGE_KEY) === "1");
    } catch {
      setDismissed(false);
    }
  }, []);

  const dismiss = () => {
    setDismissed(true);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // localStorage unavailable — dismissal just won't persist across reloads
    }
  };

  if (dismissed) return null;

  return (
    <section className="card grain relative mb-6 overflow-hidden p-5 animate-fade-up">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-coral/20 blur-3xl" />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-ink-faint">First run</p>
          <h3 className="mt-1 font-display text-lg font-semibold text-ink">
            Set this up with your AI coding agent
          </h3>
          <p className="mt-1.5 max-w-2xl text-sm text-ink-muted">
            Open <code className="rounded bg-black/30 px-1.5 py-0.5">SETUP-WITH-CLAUDE.md</code> and
            have your agent walk through it with you. It will ask questions like these — and only
            ever tell you what to add to your own local <code className="rounded bg-black/30 px-1.5 py-0.5">.env.local</code>,
            never touch your accounts directly:
          </p>
          <ul className="mt-3 flex flex-col gap-1.5">
            {QUESTIONS.map((q) => (
              <li key={q} className="flex items-start gap-2 text-xs text-ink-soft">
                <IconCheck width={13} height={13} className="mt-0.5 shrink-0 text-neon-teal" />
                {q}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <Link
              href="/settings"
              className="inline-flex items-center gap-1.5 rounded-xl bg-coral px-3.5 py-2 text-xs font-semibold text-white hover:bg-coral-600"
            >
              View integration slots
            </Link>
            <span className="text-xs text-ink-faint">or open SETUP-WITH-CLAUDE.md in your editor</span>
          </div>
        </div>
        <button onClick={dismiss} className="shrink-0 rounded-lg p-1.5 text-ink-muted hover:bg-white/[0.08] hover:text-ink">
          <IconClose width={16} height={16} />
        </button>
      </div>
    </section>
  );
}
