import { Sidebar } from "@/components/layout/Sidebar";
import { HubRail } from "@/components/layout/HubRail";
import { ventures } from "@/lib/data";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1600px] gap-2 px-3 md:gap-4 md:px-5">
      <Sidebar />
      <main className="min-w-0 flex-1 py-6 pb-16">{children}</main>
      <HubRail ventures={ventures} />
    </div>
  );
}
