import { ProjectSettings } from '@/components/project/settings/ProjectSettings';
import { getProjectById } from '@/lib/api/projects';
import { getProjectMembers } from '@/lib/api/members';
import { notFound } from 'next/navigation';
import { mockProjects } from '@/lib/data/mock';

interface ProjectSettingsPageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return mockProjects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectSettingsPage({ params }: ProjectSettingsPageProps) {
  const project = await getProjectById(params.id);
  if (!project) {
    notFound();
  }

  const members = await getProjectMembers(params.id);

  return <ProjectSettings project={project} members={members} />;
}