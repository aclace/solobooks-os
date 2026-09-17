export const money = (n: number) =>
  n === 0 ? "$0" : n >= 1000 ? `$${(n / 1000).toFixed(1)}k` : `$${n}`;

export const compact = (n: number) =>
  n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k` : `${n}`;

export const stageColor: Record<string, string> = {
  idea: "#5aa9ff",
  research: "#5aa9ff",
  script: "#a78bfa",
  production: "#f2c879",
  editing: "#f2c879",
  thumbnail: "#f2c879",
  ready: "#4fd6c0",
  published: "#8a5f6c",
};

export const priorityColor: Record<string, string> = {
  critical: "#ff5a4d",
  high: "#f2c879",
  medium: "#5aa9ff",
  low: "#8a5f6c",
};

export const goalCategoryColor: Record<string, string> = {
  Revenue: "#ff5a4d",
  Business: "#f2c879",
  Content: "#4fd6c0",
  Personal: "#a78bfa",
  Learning: "#5aa9ff",
};

export const projectStatusMeta: Record<string, { label: string; color: string }> = {
  planning: { label: "Planning", color: "#5aa9ff" },
  active: { label: "Active", color: "#4fd6c0" },
  blocked: { label: "Blocked", color: "#ff5a4d" },
  done: { label: "Done", color: "#8a5f6c" },
};
