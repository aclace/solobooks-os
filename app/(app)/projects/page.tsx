import { Topbar } from "@/components/layout/Topbar";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectsBoard } from "@/components/ProjectsBoard";
import { projects, ventures } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <div>
      <Topbar title="Projects — demo data" />
      <PageHeader
        eyebrow="Things you're building"
        title="Projects"
        subtitle="A product, a client engagement, an ecom drop — anything with a start and an end."
      />
      <ProjectsBoard initialProjects={projects} ventures={ventures} />
    </div>
  );
}
