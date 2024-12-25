export interface Project {
  id: number;
  name: string;
  description: string;
  progress: number;
  tasks: number;
  completedTasks: number;
  status: 'active' | 'completed' | 'on-hold';
  dueDate?: string;
  team?: string[];
}

export interface Task {
  id: number;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  assignee?: string;
  dueDate?: string;
  projectId: number;
}