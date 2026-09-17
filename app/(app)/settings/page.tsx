import { Topbar } from "@/components/layout/Topbar";
import { PageHeader } from "@/components/layout/PageHeader";
import { IntegrationCard } from "@/components/IntegrationCard";
import { IconPlus } from "@/components/icons";
import { integrations, profile } from "@/lib/data";

export default function SettingsPage() {
  return (
    <div>
      <Topbar title="Settings & integrations" />
      <PageHeader
        eyebrow="Configuration"
        title="Settings & Integrations"
        subtitle="Every integration below is opt-in and disabled by default. Add your own credentials to .env.local to turn one on — this app never asks for or stores them anywhere else."
      />

      <section className="card mb-8 p-5 animate-fade-up">
        <h3 className="mb-3 font-display text-base font-semibold text-ink">Profile</h3>
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 shrink-0 rounded-2xl bg-white/[0.08]" aria-label="Avatar placeholder" />
          <div>
            <p className="font-display text-base font-semibold text-ink">{profile.name}</p>
            <p className="text-sm text-ink-muted">{profile.email}</p>
            <p className="mt-1 text-xs text-ink-faint">Edit this in lib/data.ts, or wire the profile page up to your own auth/database.</p>
          </div>
        </div>
      </section>

      <div className="mb-3 flex items-center justify-between animate-fade-up">
        <h3 className="font-display text-lg font-semibold text-ink">AI & integration slots</h3>
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 animate-fade-up">
        {integrations.map((slot) => (
          <IntegrationCard key={slot.id} slot={slot} />
        ))}
        <div className="flex min-h-[150px] flex-col items-center justify-center gap-2 rounded-4xl border border-dashed border-white/15 p-5 text-center text-ink-muted">
          <IconPlus width={20} height={20} />
          <p className="text-sm font-medium">Add integration</p>
          <p className="text-xs text-ink-faint">Request or build your own — see SETUP-WITH-CLAUDE.md</p>
        </div>
      </div>

      <section className="card p-5 animate-fade-up">
        <h3 className="font-display text-base font-semibold text-ink">Set this up with your AI coding agent</h3>
        <p className="mt-1.5 max-w-2xl text-sm text-ink-muted">
          Open <code className="rounded bg-black/30 px-1.5 py-0.5">SETUP-WITH-CLAUDE.md</code> in this repo and hand it to
          your AI coding agent (Claude Code or similar). It will interview you about which integrations you want, then tell
          you exactly which environment variables to add to your own local <code className="rounded bg-black/30 px-1.5 py-0.5">.env.local</code> —
          it never asks for or receives your actual credentials.
        </p>
      </section>
    </div>
  );
}
