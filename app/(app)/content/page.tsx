import { Topbar } from "@/components/layout/Topbar";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContentBoard, PipelineStrip } from "@/components/ContentBoard";
import { contentItems, ventures } from "@/lib/data";

export default function ContentPage() {
  return (
    <div>
      <Topbar title="Content Hub — demo data" />
      <PageHeader
        eyebrow="Everything you're making"
        title="Content Hub"
        subtitle="Videos, shorts, blog posts, and ideas — tracked through Idea → Research → Script → Production → Editing → Thumbnail → Ready → Published."
      />
      <div className="mb-5 animate-fade-up">
        <PipelineStrip content={contentItems} />
      </div>
      <ContentBoard initialContent={contentItems} ventures={ventures} />
    </div>
  );
}
