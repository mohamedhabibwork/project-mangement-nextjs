export type ProjectStatus = 'active' | 'completed' | 'on-hold';

export interface Project {
  id: number;
  name: string;
  description: string;
  progress: number;
  tasks: number;
  completedTasks: number;
  status: ProjectStatus;
  dueDate?: string;
  team?: string[];
}