# Solobooks OS

A blank starter template for a personal "operating system" dashboard — one
app that centralizes your projects, goals, finances, and content instead of
juggling five separate tools.

This is a **template**, not a hosted product. Everything ships empty. There
is no demo account, no sample business data, and no tracking. You clone it,
plug in your own optional backend, and it's yours.

## What this is

- A Next.js 14 (App Router) + TypeScript + Tailwind CSS application shell.
- A left-nav layout with six starter modules: **Dashboard, Projects, Goals,
  Finances, Content, Profile** — each rendering a clean empty state until you
  add data.
- A small reusable UI kit (`Button`, `Card`, `EmptyState`) to build new
  modules on top of.
- Optional integration points for Supabase (data + auth) and an AI provider
  of your choice — both are stubbed out and clearly marked "not connected"
  until you configure them. Nothing fakes a live connection.

## What this is not

- Not a hosted SaaS — you run and deploy your own copy.
- Not pre-loaded with anyone's real data, account, or API keys.
- Not tied to any specific backend — Supabase is one option, not a
  requirement; the app runs fine on the built-in empty seed data with zero
  configuration.

## Feature list

- App Router layout with a persistent sidebar + topbar shell
- Six starter pages, each with a typed empty state and a "what to do next" hint
- Central data model in `lib/data.ts` (swap the empty arrays for a real
  fetch whenever you're ready)
- Optional Supabase client wrapper (`lib/supabase/client.ts`) that returns
  `null` until you provide credentials, instead of throwing
- Optional AI hook (`lib/ai.ts`) that reports "not connected" until you wire
  up a provider — no fake responses
- Dark UI theme via CSS custom properties, easy to reskin

## Architecture overview

```
app/
  layout.tsx              root HTML shell
  page.tsx                redirects to /dashboard
  (app)/
    layout.tsx             sidebar + main content shell
    dashboard/page.tsx
    projects/page.tsx
    goals/page.tsx
    finances/page.tsx
    content/page.tsx
    profile/page.tsx
components/
  layout/Sidebar.tsx, Topbar.tsx
  ui/Button.tsx, Card.tsx, EmptyState.tsx
lib/
  data.ts                 types + empty seed data (your data model lives here)
  ai.ts                   placeholder AI integration point
  supabase/client.ts      placeholder Supabase integration point
```

Each page reads from `lib/data.ts`. To go from "empty template" to "your
real dashboard," you have two options:

1. **Keep it simple** — populate the arrays in `lib/data.ts` directly (fine
   for a single-user, file-backed setup).
2. **Add a backend** — create your own Supabase project, add its URL/key to
   `.env.local`, and replace the static arrays with calls to
   `lib/supabase/client.ts`.

## Install steps

```bash
npm install
cp .env.example .env.local   # optional — see below
npm run dev
```

The app runs at `http://localhost:3000` with no environment variables set
at all — every module just shows its empty state.

## Environment variables

All of these are **optional**. Copy `.env.example` to `.env.local` and fill
in only the ones you want:

| Variable | Required for | Where to get it |
|---|---|---|
| `SUPABASE_URL` | Real data persistence + auth | Your own project at supabase.com → Project Settings → API |
| `SUPABASE_ANON_KEY` | Real data persistence + auth | Same as above |
| `AI_PROVIDER` | Enabling `lib/ai.ts` | Your choice of provider name |
| `AI_API_KEY` | Enabling `lib/ai.ts` | Your chosen provider's dashboard |

`.env.local` is gitignored — never commit real values. `.env.example`
contains placeholder names only.

## Security & privacy

- No real credentials, tokens, or personal data ship in this repository.
- `.env.local` (and any other local env file) is excluded via `.gitignore`.
- The optional Supabase client only activates when you supply your own
  project's URL/key — it never talks to any pre-existing project.
- The optional AI hook never calls out to any provider until you configure
  one yourself.
- If you fork this template and add real data, keep it in `.env.local` or
  your own database — never commit it back into a public fork.

## Troubleshooting

- **Blank/empty pages after `npm run dev`** — this is expected. Every
  module starts empty; add data to `lib/data.ts` or connect Supabase.
- **TypeScript path errors (`@/...`)** — make sure you're running commands
  from the project root; the `@/*` alias is defined in `tsconfig.json`.
- **Supabase calls silently return `null`** — `getSupabaseClient()` returns
  `null` on purpose when `SUPABASE_URL`/`SUPABASE_ANON_KEY` aren't set;
  that's the "not configured yet" signal, not a bug.
- **Styles look unstyled** — run `npm install` again; Tailwind's build step
  needs its dev dependencies installed.

## AI Agent Setup Instructions

If you're an AI coding agent installing this template for a user, follow
this exactly:

**What this app does:** renders a personal dashboard shell with six empty
modules. It has no backend requirement — it runs immediately after
`npm install && npm run dev`.

**What you (the agent) may configure automatically:**
- Run `npm install`.
- Copy `.env.example` to `.env.local`.
- Start the dev server and verify the app loads at `localhost:3000`.
- Edit template code (pages, components, `lib/data.ts`) at the user's
  direction.

**What you must ask the USER to provide, and where:**
- A Supabase project URL + anon key, if they want real persistence —
  they create this themselves at supabase.com (an agent should never
  create third-party accounts on a user's behalf). They add it to their own
  local `.env.local`, never to a file you commit.
- An AI provider API key, if they want `lib/ai.ts` enabled — same rule:
  their own account, their own local `.env.local`.

**What you (the agent) can NOT access:**
- You cannot see or infer the user's Supabase project, database contents,
  or API keys — none exist in this template, and none should ever be
  committed to it.
- You have no access to any account on the user's behalf. Every
  integration in this template is opt-in and configured locally by the
  user.

**How to verify the install worked:**
1. `npm run dev` starts without errors.
2. `http://localhost:3000` redirects to `/dashboard` and shows the empty
   dashboard state.
3. Each of the six nav items (Projects, Goals, Finances, Content, Profile)
   loads its own empty state without errors.
4. If the user provided Supabase credentials, confirm
   `getSupabaseClient()` returns a non-null client rather than assuming
   it works.

## You Must Do Manually

This template deliberately cannot do these for you — they require your own
accounts and credentials:

- [ ] Create your own Supabase project (if you want real data persistence)
- [ ] Copy your Supabase project's URL and anon key into your local
      `.env.local`
- [ ] Choose an AI provider and get your own API key, if you want the AI
      hooks enabled
- [ ] Add your AI provider's key to your local `.env.local`
- [ ] Replace the placeholder profile (`lib/data.ts`) with your own name/email/bio
- [ ] Deploy to your own hosting (Vercel, or any Node-compatible host) under
      your own account

## License

MIT — see [LICENSE](./LICENSE).
