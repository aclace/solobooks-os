// ─────────────────────────────────────────────────────────────────────────
// DEMO DATA — everything below is fake, generic sample content so the UI
// has something to show out of the box. None of it is real. Replace these
// arrays with your own data, or wire this file up to your own database
// (see lib/supabase/client.ts for an optional starting point).
// ─────────────────────────────────────────────────────────────────────────

import type {
  AttentionItem,
  Blog,
  ContentItem,
  Goal,
  IntegrationSlot,
  MediaAsset,
  Mission,
  MoneySummary,
  Profile,
  Project,
  Transaction,
  Venture,
  YoutubeChannel,
} from "./types";

export const profile: Profile = {
  name: "Your Name",
  email: "you@example.com",
  avatarUrl: null,
  bio: "",
};

export const ventures: Venture[] = [
  {
    id: "studio-one",
    name: "Studio One",
    tagline: "Demo services venture",
    status: "active",
    accent: "#ff5a4d",
    monogram: "S",
    revenueMonth: 8200,
    openMissions: 4,
    modules: ["Projects", "Content", "Finances"],
  },
  {
    id: "demo-channel",
    name: "Demo Channel",
    tagline: "Demo media/content venture",
    status: "building",
    accent: "#4fd6c0",
    monogram: "D",
    revenueMonth: 1400,
    openMissions: 2,
    modules: ["Content", "YouTube", "Blog"],
  },
  {
    id: "weekend-build",
    name: "Weekend Build",
    tagline: "Early-stage demo venture",
    status: "planning",
    accent: "#a78bfa",
    monogram: "W",
    revenueMonth: 0,
    openMissions: 1,
    modules: ["Goals"],
  },
];

export const missions: Mission[] = [
  { id: "m1", title: "Draft Q1 proposal (demo)", ventureId: "studio-one", priority: "high", status: "in_progress", due: "2026-09-22", progress: 60 },
  { id: "m2", title: "Publish channel intro video (demo)", ventureId: "demo-channel", priority: "medium", status: "next", due: "2026-09-25" },
  { id: "m3", title: "Review sample client contract (demo)", ventureId: "studio-one", priority: "critical", status: "blocked", due: "2026-09-15" },
  { id: "m4", title: "Sketch Weekend Build concept (demo)", ventureId: "weekend-build", priority: "low", status: "backlog", due: "2026-10-05" },
  { id: "m5", title: "Edit thumbnail for latest upload (demo)", ventureId: "demo-channel", priority: "medium", status: "in_progress", due: "2026-09-20", progress: 30 },
  { id: "m6", title: "Send monthly demo invoice", ventureId: "studio-one", priority: "high", status: "complete", due: "2026-09-10" },
];

export const contentItems: ContentItem[] = [
  { id: "c1", title: "New series concept (demo)", channel: "Demo Channel", type: "video", stage: "idea", ventureId: "demo-channel" },
  { id: "c2", title: "Competitor research notes (demo)", channel: "Demo Channel", type: "blog", stage: "research", ventureId: "demo-channel" },
  { id: "c3", title: "Episode 2 script draft (demo)", channel: "Demo Channel", type: "video", stage: "script", ventureId: "demo-channel" },
  { id: "c4", title: "Filming day 1 (demo)", channel: "Demo Channel", type: "video", stage: "production", ventureId: "demo-channel" },
  { id: "c5", title: "Rough cut edit (demo)", channel: "Demo Channel", type: "video", stage: "editing", ventureId: "demo-channel" },
  { id: "c6", title: "Thumbnail concepts (demo)", channel: "Demo Channel", type: "video", stage: "thumbnail", ventureId: "demo-channel" },
  { id: "c7", title: "Scheduled social post (demo)", channel: "Studio One", type: "social", stage: "ready", ventureId: "studio-one" },
  { id: "c8", title: "Intro blog post (demo)", channel: "Sample Blog", type: "blog", stage: "published", ventureId: "studio-one" },
];

export const goals: Goal[] = [
  { id: "g1", label: "Hit demo revenue target", category: "Revenue", current: 8200, target: 15000, unit: "$", ventureId: "studio-one", status: "active" },
  { id: "g2", label: "Publish 10 pieces of content", category: "Content", current: 4, target: 10, unit: "", status: "active" },
  { id: "g3", label: "Learn a new skill", category: "Learning", current: 2, target: 5, unit: "", status: "active" },
  { id: "g4", label: "Launch Weekend Build", category: "Business", current: 20, target: 100, unit: "%", ventureId: "weekend-build", status: "active" },
];

export const moneySummary: MoneySummary = {
  revenueMonth: 9600,
  expensesMonth: 2100,
  revenueGoal: 20000,
};

export const transactions: Transaction[] = [
  { id: "t1", label: "Demo client payment", ventureId: "studio-one", type: "revenue", amount: 4200, date: "2026-09-03", category: "Services" },
  { id: "t2", label: "Sample ad revenue", ventureId: "demo-channel", type: "revenue", amount: 1400, date: "2026-09-05", category: "Content" },
  { id: "t3", label: "Software subscriptions (demo)", type: "expense", amount: 180, date: "2026-09-01", category: "Tools" },
  { id: "t4", label: "Contractor payment (demo)", ventureId: "studio-one", type: "expense", amount: 900, date: "2026-09-08", category: "Services" },
  { id: "t5", label: "Second demo client payment", ventureId: "studio-one", type: "revenue", amount: 4000, date: "2026-09-14", category: "Services" },
];

export const projects: Project[] = [
  { id: "p1", name: "Client Website Refresh (demo)", ventureId: "studio-one", description: "Sample project — redesign a demo client's marketing site.", status: "active", priority: "high", progress: 45, deadline: "2026-10-01", missions: 3 },
  { id: "p2", name: "Demo Merch Drop", ventureId: "weekend-build", description: "Sample project — a small product drop to test the concept.", status: "planning", priority: "medium", progress: 10, deadline: "2026-11-15", missions: 1 },
  { id: "p3", name: "Channel Rebrand (demo)", ventureId: "demo-channel", description: "Sample project — new channel art, intro, and thumbnail style.", status: "blocked", priority: "critical", progress: 20, deadline: "2026-09-30", missions: 2 },
];

export const blogs: Blog[] = [
  { id: "b1", name: "Sample Blog", url: "https://example.com/blog", accent: "#f2c879", description: "Demo blog for Studio One updates.", posts: 12, drafts: 3, ventureId: "studio-one" },
  { id: "b2", name: "Channel Notes", url: "https://example.com/notes", accent: "#4fd6c0", description: "Demo behind-the-scenes notes for Demo Channel.", posts: 4, drafts: 1, ventureId: "demo-channel" },
];

export const youtubeChannels: YoutubeChannel[] = [
  { id: "y1", name: "Demo Channel", handle: "@demochannel", accent: "#4fd6c0", subscribers: 1200, videos: 18, description: "Main demo content channel.", ventureId: "demo-channel" },
  { id: "y2", name: "Studio One Clips", handle: "@studiooneclips", accent: "#ff5a4d", subscribers: 340, videos: 6, description: "Sample short-form clips channel.", ventureId: "studio-one" },
];

export const mediaAssets: MediaAsset[] = [
  { id: "a1", name: "Demo thumbnail v1", type: "thumbnail", accent: "#ff5a4d", tag: "thumbnail draft", ventureId: "demo-channel" },
  { id: "a2", name: "Sample product photo", type: "image", accent: "#f2c879", tag: "product shot", ventureId: "weekend-build" },
  { id: "a3", name: "Demo intro clip", type: "video", accent: "#5aa9ff", tag: "intro", ventureId: "demo-channel" },
  { id: "a4", name: "Sample voiceover", type: "audio", accent: "#a78bfa", tag: "narration" },
  { id: "a5", name: "Placeholder logo", type: "logo", accent: "#4fd6c0", tag: "brand", ventureId: "studio-one" },
  { id: "a6", name: "Sample brief.pdf", type: "doc", accent: "#8a5f6c", tag: "brief", ventureId: "studio-one" },
];

export const attentionItems: AttentionItem[] = [
  { id: "at1", kind: "overdue", title: "Review sample client contract", meta: "3d overdue", ventureId: "studio-one" },
  { id: "at2", kind: "deadline", title: "Channel Rebrand deadline", meta: "Due Sep 30", ventureId: "demo-channel" },
  { id: "at3", kind: "content", title: "3 pieces sitting in editing", meta: "Content Hub", ventureId: "demo-channel" },
  { id: "at4", kind: "goal", title: "Revenue goal at 55%", meta: "Goals", ventureId: "studio-one" },
];

export const integrations: IntegrationSlot[] = [
  { id: "i1", name: "AI provider", category: "AI Provider", description: "Powers the AI hooks across the app — thumbnail concepts, the assistant box, and any future AI feature.", status: "not_connected", envVarHint: "AI_PROVIDER / AI_API_KEY" },
  { id: "i2", name: "Thumbnail generator", category: "Thumbnail Generator", description: "Generates thumbnail concepts from a title and your reference image library.", status: "not_connected", envVarHint: "AI_API_KEY" },
  { id: "i3", name: "Blog publisher", category: "Blog Publisher", description: "Pushes drafts from Content Hub straight to your blog's CMS.", status: "coming_soon" },
  { id: "i4", name: "Command-line tool", category: "CLI", description: "Manage this OS from your terminal — list missions, add content, check goals.", status: "coming_soon" },
  { id: "i5", name: "Media storage sync", category: "Media Library", description: "Syncs uploaded assets with a storage bucket instead of local-only state.", status: "not_connected", envVarHint: "SUPABASE_URL / SUPABASE_ANON_KEY" },
];
