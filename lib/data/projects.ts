import { mockProjects } from './mock-data';
import type { Project } from '@/lib/types';

export async function getProjects(): Promise<Project[]> {
  // In a real app, this would fetch from an API or database
  return mockProjects;
}

export async function getProjectById(id: number): Promise<Project | undefined> {
  // In a real app, this would fetch from an API or database
  return mockProjects.find(p => p.id === id);
}