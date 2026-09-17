import Link from "next/link";
import { Topbar } from "@/components/layout/Topbar";
import { PageHeader } from "@/components/layout/PageHeader";
import { YoutubeChannelsPanel } from "@/components/YoutubeChannelsPanel";
import { BlogsPanel } from "@/components/BlogsPanel";
import { PipelineStrip } from "@/components/ContentBoard";
import { IntegrationCard } from "@/components/IntegrationCard";
import { IconStudio, IconArrow } from "@/components/icons";
import { youtubeChannels, blogs, contentItems, ventures, integrations } from "@/lib/data";

export default function StudioPage() {
  const thumbnailSlot = integrations.find((i) => i.category === "Thumbnail Generator")!;

  return (
    <div>
      <Topbar title="Creator Studio — demo data" />
      <PageHeader
        eyebrow="Creation"
        title="Creator Studio"
        subtitle="Your production hub — YouTube channels, blogs, thumbnails, and the pipeline that feeds them."
      />

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 animate-fade-up">
        <Link
          href="/studio/thumbnails"
          className="card grain group relative overflow-hidden p-5 transition-all hover:-translate-y-0.5 hover:border-white/15"
        >
          <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-coral/30 blur-2xl" />
          <div className="relative flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-coral to-coral-600 text-white shadow-glow">
              <IconStudio width={20} height={20} />
            </span>
            <div className="flex-1">
              <h3 className="font-display text-base font-semibold text-ink">Thumbnail Studio</h3>
              <p className="text-xs text-ink-muted">Reference library + AI concept generation (not connected)</p>
            </div>
            <IconArrow width={16} height={16} />
          </div>
        </Link>
        <IntegrationCard slot={thumbnailSlot} />
      </div>

      <YoutubeChannelsPanel initialChannels={youtubeChannels} ventures={ventures} />
      <BlogsPanel initialBlogs={blogs} ventures={ventures} />

      <div className="mb-3 animate-fade-up">
        <h2 className="font-display text-lg font-semibold text-ink">Content pipeline</h2>
      </div>
      <PipelineStrip content={contentItems} />
    </div>
  );
}
