export type VentureStatus = "active" | "building" | "paused" | "planning";

export interface Venture {
  id: string;
  name: string;
  tagline: string;
  status: VentureStatus;
  accent: string; // hex used for glows / gradients
  monogram: string;
  revenueMonth: number;
  openMissions: number;
  modules: string[];
}

export type Priority = "critical" | "high" | "medium" | "low";
export type MissionStatus = "backlog" | "next" | "in_progress" | "blocked" | "complete";

export interface Mission {
  id: string;
  title: string;
  ventureId: string;
  priority: Priority;
  status: MissionStatus;
  due: string; // ISO date
  progress?: number; // 0-100
}

export type AttentionKind = "overdue" | "deadline" | "content" | "goal";

export interface AttentionItem {
  id: string;
  kind: AttentionKind;
  title: string;
  meta: string;
  ventureId?: string;
}

export type ContentStage =
  | "idea"
  | "research"
  | "script"
  | "production"
  | "editing"
  | "thumbnail"
  | "ready"
  | "published";

export const CONTENT_STAGES: ContentStage[] = [
  "idea", "research", "script", "production", "editing", "thumbnail", "ready", "published",
];

export type ContentType = "video" | "short" | "blog" | "social";

export interface ContentItem {
  id: string;
  title: string;
  channel: string;
  type: ContentType;
  stage: ContentStage;
  ventureId?: string;
}

export type GoalStatus = "active" | "achieved" | "paused" | "dropped";

export interface Goal {
  id: string;
  label: string;
  category: "Revenue" | "Business" | "Content" | "Personal" | "Learning";
  current: number;
  target: number;
  unit: string;
  ventureId?: string;
  status: GoalStatus;
}

export interface MoneySummary {
  revenueMonth: number;
  expensesMonth: number;
  revenueGoal: number;
}

export interface Transaction {
  id: string;
  label: string;
  ventureId?: string;
  type: "revenue" | "expense";
  amount: number;
  date: string; // ISO
  category: string;
}

export type ProjectStatus = "planning" | "active" | "blocked" | "done";

export interface Project {
  id: string;
  name: string;
  ventureId: string;
  description: string;
  status: ProjectStatus;
  priority: Priority;
  progress: number; // 0-100
  deadline: string; // ISO
  missions: number;
}

export interface YoutubeChannel {
  id: string;
  name: string;
  handle: string;
  accent: string;
  subscribers: number;
  videos: number;
  description: string;
  ventureId?: string;
}

export interface Blog {
  id: string;
  name: string;
  url: string;
  accent: string;
  description: string;
  posts: number;
  drafts: number;
  ventureId?: string;
}

export type AssetType = "thumbnail" | "image" | "video" | "audio" | "logo" | "doc";

export interface MediaAsset {
  id: string;
  name: string;
  type: AssetType;
  accent: string;
  tag: string;
  ventureId?: string;
}

export type IntegrationCategory =
  | "AI Provider"
  | "Thumbnail Generator"
  | "Blog Publisher"
  | "CLI"
  | "Media Library"
  | "Automation";

export type IntegrationStatus = "not_connected" | "coming_soon";

export interface IntegrationSlot {
  id: string;
  name: string;
  category: IntegrationCategory;
  description: string;
  status: IntegrationStatus;
  envVarHint?: string;
}

export interface Profile {
  name: string;
  email: string;
  avatarUrl: string | null;
  bio: string;
}
