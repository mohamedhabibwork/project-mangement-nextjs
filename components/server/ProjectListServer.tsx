import { ProjectListClient } from '@/components/client/ProjectListClient';
import { getProjects } from '@/lib/data/projects';

export async function ProjectListServer() {
  const projects = await getProjects();
  
  return <ProjectListClient initialProjects={projects} />;
}