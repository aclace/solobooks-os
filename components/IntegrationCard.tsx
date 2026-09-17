import type { IntegrationSlot } from "@/lib/types";
import { IconAI, IconPlug } from "@/components/icons";

export function IntegrationCard({ slot }: { slot: IntegrationSlot }) {
  return (
    <div className="card grain relative overflow-hidden p-5">
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-neon-violet/20 blur-2xl" />
      <div className="relative flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-violet to-coral text-white">
          <IconPlug width={18} height={18} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-base font-semibold text-ink">{slot.name}</h3>
            <span className="chip bg-white/[0.06] text-[10px] text-ink-faint">{slot.category}</span>
          </div>
          <p className="mt-1 text-xs text-ink-muted">{slot.description}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span
              className={`chip text-[10px] ${
                slot.status === "coming_soon" ? "bg-white/[0.06] text-ink-faint" : "bg-coral/15 text-coral-400"
              }`}
            >
              {slot.status === "coming_soon" ? "Coming soon" : "Not connected — add your key"}
            </span>
            {slot.envVarHint && (
              <code className="rounded-md bg-black/30 px-2 py-0.5 text-[10px] text-ink-faint">{slot.envVarHint}</code>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AskAiCard() {
  return (
    <section className="card grain relative overflow-hidden p-4">
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-neon-violet/25 blur-2xl" />
      <div className="relative flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-neon-violet to-coral text-white">
          <IconAI width={16} height={16} />
        </span>
        <h3 className="font-display text-base font-semibold text-ink">Ask your AI provider</h3>
        <span className="chip ml-auto bg-white/[0.06] text-[10px] text-ink-faint">Not connected</span>
      </div>
      <div className="relative mt-3 flex items-center gap-2 rounded-2xl border border-white/[0.07] bg-black/25 px-3.5 py-2.5">
        <input
          disabled
          placeholder="What should I work on today?"
          className="w-full cursor-not-allowed bg-transparent text-sm text-ink placeholder:text-ink-faint focus:outline-none"
        />
      </div>
      <p className="relative mt-2 text-[11px] leading-relaxed text-ink-faint">
        No AI provider is connected yet. Set AI_PROVIDER and AI_API_KEY in your local .env.local
        to enable this — see the Settings page and SETUP-WITH-CLAUDE.md.
      </p>
    </section>
  );
}
