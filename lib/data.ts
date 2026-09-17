// Central data model + seed data for Solobooks OS.
//
// Everything below starts EMPTY. This is a blank template — plug in your own
// data source (Supabase, a local database, a file, whatever you prefer) by
// replacing these arrays with real fetches. Nothing here is demo/fake data
// dressed up as real content.

export type Project = {
  id: string;
  name: string;
  status: "idea" | "active" | "paused" | "done";
  updatedAt: string;
};

export type Goal = {
  id: string;
  title: string;
  targetDate: string;
  progress: number; // 0-100
};

export type ContentItem = {
  id: string;
  title: string;
  channel: string;
  status: "draft" | "scheduled" | "published";
};

export type FinanceSnapshot = {
  month: string;
  income: number;
  expenses: number;
};

export type Profile = {
  name: string;
  email: string;
  avatarUrl: string | null;
  bio: string;
};

export const profile: Profile = {
  name: "Your Name",
  email: "you@example.com",
  avatarUrl: null,
  bio: "",
};

export const projects: Project[] = [];
export const goals: Goal[] = [];
export const contentItems: ContentItem[] = [];
export const financeSnapshots: FinanceSnapshot[] = [];
