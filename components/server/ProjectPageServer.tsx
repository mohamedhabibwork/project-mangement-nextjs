import { ProjectDetails } from '@/components/client/project/ProjectDetails';
import { ProjectTabs } from '@/components/client/project/ProjectTabs';
import type { Project } from '@/lib/types';

interface ProjectPageServerProps {
  project: Project;
}

export function ProjectPageServer({ project }: ProjectPageServerProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProjectDetails project={project} />
      <ProjectTabs projectId={project.id} />
    </div>
  );
}