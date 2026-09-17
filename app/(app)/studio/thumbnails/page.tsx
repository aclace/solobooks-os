import { Topbar } from "@/components/layout/Topbar";
import { PageHeader } from "@/components/layout/PageHeader";
import { ThumbnailStudio } from "@/components/ThumbnailStudio";

export default function ThumbnailsPage() {
  return (
    <div>
      <Topbar title="Thumbnail Studio" />
      <PageHeader
        eyebrow="Creator Studio"
        title="Thumbnail Studio"
        subtitle="Upload reference images and draft a title — generation is disabled until you connect an AI key."
      />
      <ThumbnailStudio />
    </div>
  );
}
