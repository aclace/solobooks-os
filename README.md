# Solobooks OS

A starter template for a personal "operating system" dashboard — one app
that centralizes your ventures, projects, goals, finances, and content
instead of juggling five separate tools.

This is a **template**, not a hosted product. Every section below ships
with clearly-labeled **demo data** so you can see the whole thing working —
there is no real account, no real business data, and no live API
connections baked in. You clone it, plug in your own optional backend and
AI provider, and replace the demo data with your own.

## What this is

A Next.js 14 (App Router) + TypeScript + Tailwind CSS app with a dark,
cinematic UI (deep maroon ground, coral accent, glassy cards — swap the
palette in `tailwind.config.ts` for your own brand). It includes:

- **Command Center** — a dashboard with a hero venture card, today's
  missions, a content-pipeline preview, a revenue ring, active goals, and a
  "needs attention" panel.
- **Ventures** — the hubs everything else belongs to (a business, a
  channel, a side project).
- **Creator Studio** — YouTube channels, blogs, and a **Thumbnail Studio**
  (reference-image upload + a results panel that clearly shows "connect
  your AI key to enable generation" instead of faking a response).
- **Content Hub** — every video/short/blog/social post tracked through an
  8-stage pipeline: Idea → Research → Script → Production → Editing →
  Thumbnail → Ready → Published.
- **Media Library**, **Missions**, **Projects**, **Goals**, **Finances**
  (revenue/expense ring + transactions).
- **Settings & Integrations** — a first-class "AI plug-in slot" pattern:
  every optional integration (AI provider, thumbnail generator, blog
  publisher, CLI, media storage) is a card that plainly says "Not connected
  — add your key" until you configure it yourself.
- A **first-run checklist** on the dashboard and a **SETUP-WITH-CLAUDE.md**
  guide that an AI coding agent can use to interview you about which
  integrations you want and tell you exactly what to add to your own
  `.env.local` — it never touches your accounts directly.

## What this is not

- Not a hosted SaaS — you run and deploy your own copy.
- Not pre-loaded with anyone's real data, account, or API keys. Every name,
  venture, and metric you see (Studio One, Demo Channel, Weekend Build,
  etc.) is fake sample content, clearly labeled "(demo)" throughout.
- Not tied to any specific backend or AI provider — Supabase and an AI
  provider are both optional; the app runs fully on demo data with zero
  configuration.

## Architecture overview

```
app/(app)/
  layout.tsx             icon rail + hub rail shell
  page.tsx                Command Center
  ventures/               Ventures
  studio/                 Creator Studio (channels, blogs, pipeline)
  studio/thumbnails/      Thumbnail Studio
  content/                Content Hub
  media/                  Media Library
  missions/               Missions
  projects/               Projects
  goals/                  Goals
  finances/               Finances
  settings/               Settings & integration slots
components/
  layout/                 Sidebar (icon rail), HubRail, Topbar, PageHeader
  ui/EntityModal.tsx      shared "add new X" modal + form fields
  *Board.tsx / *Panel.tsx  one component per module, each owns its own
                           local state (no backend required)
  IntegrationCard.tsx      the AI plug-in slot pattern
  FirstRunChecklist.tsx    dismissible onboarding banner (localStorage)
lib/
  types.ts                 the full data model
  data.ts                  DEMO DATA — replace with your own
  format.ts                shared color/formatting helpers
  ai.ts                    placeholder AI integration point
  supabase/client.ts       optional Supabase integration point
```

Every module manages its own list in local React state, seeded from
`lib/data.ts`. "Add" buttons work immediately (no backend needed) but
nothing persists across a reload until you wire a page up to your own
database — `lib/supabase/client.ts` is one starting point.

## Install steps

```bash
npm install
cp .env.example .env.local   # optional — see below
npm run dev
```

The app runs at `http://localhost:3000` with no environment variables set
at all, showing the full demo dashboard.

## Environment variables

All of these are **optional**. Copy `.env.example` to `.env.local` and fill
in only the ones you want — see **SETUP-WITH-CLAUDE.md** for a guided,
question-by-question walkthrough.

| Variable | Enables | Where to get it |
|---|---|---|
| `SUPABASE_URL` / `SUPABASE_ANON_KEY` | Real data persistence + the Media Library storage slot | Your own project at supabase.com → Project Settings → API |
| `AI_PROVIDER` / `AI_API_KEY` | `lib/ai.ts`, the dashboard's "Ask your AI provider" card, and Thumbnail Studio generation | Your chosen provider's dashboard |

`.env.local` is gitignored — never commit real values. `.env.example`
contains placeholder names only.

## Security & privacy

- No real credentials, tokens, or personal data ship in this repository.
- `.env.local` (and any other local env file) is excluded via `.gitignore`.
- Every integration slot on the Settings page is disabled by default and
  only activates once you supply your own credentials in `.env.local`.
- The optional Supabase client only activates when you supply your own
  project's URL/key — it never talks to any pre-existing project.
- The optional AI hook never calls out to any provider until you configure
  one yourself.
- If you fork this template and add real data, keep it in `.env.local` or
  your own database — never commit it back into a public fork.

## Troubleshooting

- **Everything shows fake "(demo)" data** — expected. Replace the arrays in
  `lib/data.ts` with your own, or wire pages up to Supabase.
- **TypeScript path errors (`@/...`)** — run commands from the project
  root; the `@/*` alias is defined in `tsconfig.json`.
- **Supabase calls silently return `null`** — `getSupabaseClient()` returns
  `null` on purpose when `SUPABASE_URL`/`SUPABASE_ANON_KEY` aren't set;
  that's the "not configured yet" signal, not a bug.
- **Thumbnail Studio always says "Connect your AI key"** — expected until
  you set `AI_PROVIDER`/`AI_API_KEY` and implement the real request in
  `lib/ai.ts`.
- **Added items disappear on refresh** — local component state isn't
  persisted; that's by design until you connect a real database.

## AI Agent Setup Instructions

See **[SETUP-WITH-CLAUDE.md](./SETUP-WITH-CLAUDE.md)** for the full,
question-by-question script. Summary:

**What this app does:** a personal dashboard with a full demo-data feature
set (ventures, content, projects, goals, finances) and a first-class
"integration slot" pattern for optionally connecting an AI provider,
Supabase, a blog, or a CLI.

**What you (the agent) may configure automatically:**
- Run `npm install`, copy `.env.example` to `.env.local`, start the dev
  server, and verify it loads.
- Edit template code at the user's direction, including implementing a
  real integration once the user has added their own credentials.

**What you must ask the USER to provide, and where:**
- A Supabase project URL + anon key, if they want real persistence — their
  own account, added to their own local `.env.local`.
- An AI provider API key, if they want the AI hooks enabled — same rule.
- Any other integration's credentials (Notion, a blog CMS, etc.) — always
  the user's own account, always their own local `.env.local`.

**What you (the agent) can NOT access:**
- No real Supabase project, database, or API key exists in this template.
- You have no access to any account on the user's behalf — every
  integration is opt-in and configured locally by the user.

**How to verify the install worked:**
1. `npm run dev` starts without errors and shows the demo dashboard.
2. Every nav item (Ventures, Creator Studio, Content Hub, Media Library,
   Missions, Projects, Goals, Finances, Settings) loads its demo content.
3. If the user connected an integration, confirm its Settings-page slot no
   longer says "Not connected" and the feature actually works end to end.

## You Must Do Manually

This template deliberately cannot do these for you — they require your own
accounts and credentials:

- [ ] Create your own Supabase project (if you want real data persistence)
- [ ] Copy your Supabase project's URL and anon key into your local
      `.env.local`
- [ ] Choose an AI provider and get your own API key, if you want the AI
      hooks or Thumbnail Studio generation enabled
- [ ] Add your AI provider's key to your local `.env.local`
- [ ] Replace the demo data in `lib/data.ts` with your own ventures,
      projects, goals, and content
- [ ] Replace the placeholder profile (`lib/data.ts`) with your own
      name/email/bio
- [ ] Deploy to your own hosting (Vercel, or any Node-compatible host) under
      your own account

## License

MIT — see [LICENSE](./LICENSE).
