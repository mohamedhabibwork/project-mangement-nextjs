import type { Project, Task } from '@/lib/types';

export const mockProjects: Project[] = [
  {
    id: 1,
    name: 'Website Redesign',
    description: 'Complete overhaul of company website',
    progress: 65,
    tasks: 24,
    completedTasks: 16,
    status: 'active',
  },
  {
    id: 2,
    name: 'Mobile App Development',
    description: 'Cross-platform mobile application',
    progress: 30,
    tasks: 45,
    completedTasks: 14,
    status: 'active',
  },
];

export const mockTasks: Task[] = [
  {
    id: 1,
    title: 'Design System Implementation',
    description: 'Create a comprehensive design system for the project',
    status: 'in-progress',
    priority: 'high',
    assignee: 'Sarah Chen',
    projectId: 1,
  },
  {
    id: 2,
    title: 'API Integration',
    description: 'Integrate third-party APIs for enhanced functionality',
    status: 'todo',
    priority: 'medium',
    assignee: 'Mike Johnson',
    projectId: 1,
  },
  {
    id: 3,
    title: 'User Authentication',
    description: 'Implement secure user authentication system',
    status: 'completed',
    priority: 'high',
    assignee: 'John Smith',
    projectId: 1,
  },
];