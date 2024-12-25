import { ProjectOverview } from '@/components/project/overview/ProjectOverview';
import { getProjectById } from '@/lib/api/projects';
import { notFound } from 'next/navigation';
import { mockProjects } from '@/lib/data/mock';

interface ProjectOverviewPageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return mockProjects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectOverviewPage({ params }: ProjectOverviewPageProps) {
  const project = await getProjectById(params.id);
  if (!project) {
    notFound();
  }

  return <ProjectOverview project={project} />;
}