import { TaskBoard } from '@/components/project/board/TaskBoard';
import { getTasks } from '@/lib/api/tasks';
import { getProjectById } from '@/lib/api/projects';
import { notFound } from 'next/navigation';
import { mockProjects } from '@/lib/data/mock';

interface ProjectTasksPageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return mockProjects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectTasksPage({ params }: ProjectTasksPageProps) {
  const project = await getProjectById(params.id);
  if (!project) {
    notFound();
  }

  const tasks = await getTasks(params.id);

  return <TaskBoard projectId={params.id} initialTasks={tasks} />;
}