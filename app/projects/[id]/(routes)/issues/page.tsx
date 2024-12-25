import { IssueList } from '@/components/project/issues/IssueList';
import { getProjectById } from '@/lib/api/projects';
import { getIssues } from '@/lib/api/issues';
import { notFound } from 'next/navigation';
import { mockProjects } from '@/lib/data/mock';

interface ProjectIssuesPageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return mockProjects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectIssuesPage({ params }: ProjectIssuesPageProps) {
  const project = await getProjectById(params.id);
  if (!project) {
    notFound();
  }

  const issues = await getIssues(params.id);

  return <IssueList projectId={params.id} initialIssues={issues} />;
}