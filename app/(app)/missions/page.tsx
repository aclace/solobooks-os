import { Topbar } from "@/components/layout/Topbar";
import { PageHeader } from "@/components/layout/PageHeader";
import { MissionsBoard } from "@/components/MissionsBoard";
import { missions, ventures } from "@/lib/data";

export default function MissionsPage() {
  return (
    <div>
      <Topbar title="Missions — demo data" />
      <PageHeader
        eyebrow="Day to day"
        title="Missions"
        subtitle="The tasks that move each venture forward, grouped by status."
      />
      <MissionsBoard initialMissions={missions} ventures={ventures} />
    </div>
  );
}
