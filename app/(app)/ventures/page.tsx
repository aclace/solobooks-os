import { Topbar } from "@/components/layout/Topbar";
import { PageHeader } from "@/components/layout/PageHeader";
import { VenturesBoard } from "@/components/VenturesBoard";
import { ventures } from "@/lib/data";

export default function VenturesPage() {
  return (
    <div>
      <Topbar title="Ventures — demo data" />
      <PageHeader
        eyebrow="Everything you run"
        title="Ventures"
        subtitle="Each venture is a hub — its own missions, content, and finances. Demo data below; replace it with your own in lib/data.ts."
      />
      <VenturesBoard initialVentures={ventures} />
    </div>
  );
}
