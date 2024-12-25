import { mockProjects } from '@/lib/data/mock-data';

export function generateStaticParams() {
  return mockProjects.map((project) => ({
    id: project.id.toString(),
  }));
}