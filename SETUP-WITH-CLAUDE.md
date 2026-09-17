# Setting this up with an AI coding agent

This file is written to be handed directly to an AI coding agent (Claude
Code or similar) after you clone this repo. It tells the agent what to ask
you, what it's allowed to do on its own, and — critically — what it must
never do.

If you're a human reading this instead: skip to "You Must Do Manually" in
the README, or just answer the questions below yourself and edit the files
they point to.

## Instructions for the agent

You are setting up **Solobooks OS**, a blank personal-dashboard template,
for a new user. Everything in this repo currently runs on demo data with no
real integrations connected. Your job is to interview the user, then tell
them exactly what to do — you do not have and should never ask for their
actual credentials.

### Step 1 — run the basics

- `npm install`
- `cp .env.example .env.local`
- `npm run dev` and confirm it loads at `localhost:3000` showing the demo
  dashboard (Studio One / Demo Channel / Weekend Build — all fake data).

### Step 2 — interview the user

Ask these questions one at a time, in your own words. Skip any the user
says they don't care about yet — every integration in this template is
optional and the app works fully on demo data without any of them.

1. **"Do you have a blog you want to wire up?"**
   If yes: point them to the Blog Publisher slot on the Settings page.
   There's no built-in publisher implementation yet — offer to help them
   write one in `components/BlogsPanel.tsx` / a new `lib/blog.ts` once they
   tell you which CMS or platform they use (WordPress, Ghost, a static
   site, etc.).

2. **"Want a CLI to manage this from your terminal?"**
   If yes: this is a "coming soon" slot with no code yet. Offer to scaffold
   one (e.g. a small Node or Python script that reads/writes the same data
   shape as `lib/data.ts`) if they want to start now.

3. **"Connect a thumbnail generator?"**
   If yes: this needs an AI provider with image-generation support. Ask
   which one they want to use (see Step 3), then help them implement the
   request in `lib/ai.ts` and wire `components/ThumbnailStudio.tsx`'s
   "Generate" button to call it instead of showing the placeholder.

4. **"Need a real media library instead of local-only assets?"**
   If yes: the Media Library slot points at Supabase Storage as one option.
   Ask if they already have a Supabase project (see Step 4) or want a
   different storage provider, then help wire `components/MediaGrid.tsx`
   up to real uploads.

5. **"Which AI provider/model do you want to use?"**
   This powers `lib/ai.ts`, the "Ask your AI provider" card on the
   dashboard, and (if wired up) the Thumbnail Studio. Ask which provider —
   Anthropic, OpenAI, OpenRouter, a local model, etc. — and what model.

### Step 3 — AI provider setup (if they want one)

Tell the user:

> Go create your own API key with your chosen provider. Add these two
> lines to your **local** `.env.local` (never a file that gets committed):
>
> ```
> AI_PROVIDER=anthropic        # or openai, openrouter, etc.
> AI_API_KEY=your_real_key_here
> ```

Then, with their permission, implement the actual request in `lib/ai.ts`
(replacing the "not connected" stub) using whatever SDK or fetch call their
provider needs. **Never ask the user to paste their key into the chat** —
have them add it directly to `.env.local` themselves, or paste it only into
that file via their editor.

### Step 4 — Supabase setup (if they want real persistence)

Tell the user:

> Create your own project at supabase.com — this template does not, and
> should never, point at an existing Supabase project. Once created, go to
> Project Settings → API and copy your URL and anon key into your local
> `.env.local`:
>
> ```
> SUPABASE_URL=your_project_url_here
> SUPABASE_ANON_KEY=your_anon_key_here
> ```

`lib/supabase/client.ts` already returns a working client once those two
variables are set, and `null` otherwise — so you can wire pages up to it
incrementally without breaking the demo-data fallback.

### Step 5 — Notion / other integrations

If the user wants an integration not listed above (Notion, a CRM, a
calendar, etc.), treat it the same way: ask what it is, ask them to create
their own credentials with that provider, have them add the values to
`.env.local`, then help write the integration code. Add a new
`IntegrationSlot` entry to `lib/data.ts` so it shows up on the Settings
page too.

## Hard rules for the agent

- **Never** ask the user to paste a real API key, password, or token into
  the chat. Point them to their local `.env.local` instead.
- **Never** create third-party accounts (Supabase, an AI provider, a blog
  host, etc.) on the user's behalf — you don't have the ability to, and
  shouldn't try to work around that.
- **Never** commit `.env.local` or any file containing a real credential.
  `.gitignore` already excludes it — don't remove that exclusion.
- **Never** assume access to an account, database, or API just because the
  user mentioned it. If you need a credential to proceed, stop and ask them
  to add it to `.env.local`, then continue once they confirm.
- If the user asks you to "just connect" something without giving you
  credentials, explain that you need them to complete the provider's own
  signup/key-creation flow first — that step cannot be automated on their
  behalf.

## How the user verifies it worked

After any integration is wired up, verify by:

1. Restarting `npm run dev` (env vars are read at startup).
2. Checking the relevant Settings page slot no longer says "Not connected."
3. Exercising the actual feature (e.g. clicking "Generate" in Thumbnail
   Studio) and confirming it makes a real request instead of showing the
   placeholder.
