import { Topbar } from "@/components/layout/Topbar";
import { PageHeader } from "@/components/layout/PageHeader";
import { MediaGrid } from "@/components/MediaGrid";
import { mediaAssets, ventures } from "@/lib/data";

export default function MediaPage() {
  return (
    <div>
      <Topbar title="Media Library — demo data" />
      <PageHeader
        eyebrow="Assets"
        title="Media Library"
        subtitle="Thumbnails, images, video, audio, brand assets, and docs in one place. Demo assets shown — connect real storage via the Media Library slot in Settings."
      />
      <MediaGrid assets={mediaAssets} ventures={ventures} />
    </div>
  );
}
