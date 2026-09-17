import Link from "next/link";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/projects", label: "Projects" },
  { href: "/goals", label: "Goals" },
  { href: "/finances", label: "Finances" },
  { href: "/content", label: "Content" },
  { href: "/profile", label: "Profile" },
];

export function Sidebar() {
  return (
    <nav className="flex w-56 shrink-0 flex-col gap-1 border-r border-border bg-surface p-4">
      <div className="mb-6 px-2 text-lg font-semibold text-foreground">
        Solobooks OS
      </div>
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="rounded-lg px-3 py-2 text-sm text-muted hover:bg-background hover:text-foreground"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
