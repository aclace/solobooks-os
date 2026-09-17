import * as React from "react";

type P = React.SVGProps<SVGSVGElement>;
const base = (p: P) => ({
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...p,
});

export const IconHome = (p: P) => (
  <svg {...base(p)}><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /><path d="M9.5 21v-6h5v6" /></svg>
);
export const IconVentures = (p: P) => (
  <svg {...base(p)}><rect x="3" y="3" width="7" height="7" rx="1.6" /><rect x="14" y="3" width="7" height="7" rx="1.6" /><rect x="3" y="14" width="7" height="7" rx="1.6" /><rect x="14" y="14" width="7" height="7" rx="1.6" /></svg>
);
export const IconStudio = (p: P) => (
  <svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M3 9h18M8 5v4M16 5v4M8 19v-4M16 19v-4" /></svg>
);
export const IconContent = (p: P) => (
  <svg {...base(p)}><rect x="4" y="3" width="16" height="18" rx="2.2" /><path d="M8 8h8M8 12h8M8 16h5" /></svg>
);
export const IconMissions = (p: P) => (
  <svg {...base(p)}><path d="M4 6.5 6 8.5 9.5 5" /><path d="M4 12.5 6 14.5 9.5 11" /><path d="M4 18.5 6 20.5 9.5 17" /><path d="M13 6h7M13 13h7M13 19h7" /></svg>
);
export const IconProjects = (p: P) => (
  <svg {...base(p)}><path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17Z" /></svg>
);
export const IconGoals = (p: P) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" /></svg>
);
export const IconMoney = (p: P) => (
  <svg {...base(p)}><rect x="3" y="6" width="18" height="12" rx="2.4" /><circle cx="12" cy="12" r="2.6" /><path d="M6.5 9v0M17.5 15v0" /></svg>
);
export const IconAI = (p: P) => (
  <svg {...base(p)}><path d="M12 3v4M12 17v4M3 12h4M17 12h4" /><path d="M12 8.5 13.4 11 16 12l-2.6 1L12 15.5 10.6 13 8 12l2.6-1Z" /></svg>
);
export const IconSearch = (p: P) => (
  <svg {...base(p)}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.2-3.2" /></svg>
);
export const IconBell = (p: P) => (
  <svg {...base(p)}><path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" /><path d="M10 20a2 2 0 0 0 4 0" /></svg>
);
export const IconPlus = (p: P) => (
  <svg {...base(p)}><path d="M12 5v14M5 12h14" /></svg>
);
export const IconArrow = (p: P) => (
  <svg {...base(p)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const IconChevron = (p: P) => (
  <svg {...base(p)}><path d="m9 6 6 6-6 6" /></svg>
);
export const IconPlay = (p: P) => (
  <svg {...base({ fill: "currentColor", stroke: "none", ...p })}><path d="M8 5v14l11-7z" /></svg>
);
export const IconBolt = (p: P) => (
  <svg {...base(p)}><path d="M13 3 4 14h6l-1 7 9-11h-6z" /></svg>
);
export const IconClock = (p: P) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></svg>
);
export const IconFlag = (p: P) => (
  <svg {...base(p)}><path d="M6 21V4M6 4h11l-2 3.5L17 11H6" /></svg>
);
export const IconMedia = (p: P) => (
  <svg {...base(p)}><rect x="3" y="4" width="18" height="16" rx="2.4" /><circle cx="9" cy="10" r="1.6" /><path d="m4 17 4.5-4.5 3.5 3.5 3-3L20 16.5" /></svg>
);
export const IconClose = (p: P) => (
  <svg {...base(p)}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const IconExternal = (p: P) => (
  <svg {...base(p)}><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" /></svg>
);
export const IconSettings = (p: P) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-2.7-1.1l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 4.6 15H4.5a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 6 8.3l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 11 4.6V4.5a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8v.1a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z" /></svg>
);
export const IconUpload = (p: P) => (
  <svg {...base(p)}><path d="M12 16V4M7 9l5-5 5 5" /><path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" /></svg>
);
export const IconCheck = (p: P) => (
  <svg {...base(p)}><path d="M5 12.5 10 17 19 7" /></svg>
);
export const IconPlug = (p: P) => (
  <svg {...base(p)}><path d="M9 3v5M15 3v5M7 8h10l-1.5 6.5a4 4 0 0 1-3.9 3.1h-1.2a4 4 0 0 1-3.9-3.1L7 8Z" /><path d="M12 17.5V21" /></svg>
);
