import type { Project } from '@/lib/types';

export const mockProjects: Project[] = [
  {
    id: 1,
    name: 'Website Redesign',
    description: 'Complete overhaul of company website with modern design and improved user experience',
    progress: 65,
    tasks: 24,
    completedTasks: 16,
    status: 'active',
    team: ['Sarah Chen', 'Mike Johnson', 'Alex Wong'],
    dueDate: '2024-06-30',
  },
  {
    id: 2,
    name: 'Mobile App Development',
    description: 'Cross-platform mobile application for iOS and Android using React Native',
    progress: 30,
    tasks: 45,
    completedTasks: 14,
    status: 'active',
    team: ['John Smith', 'Emma Davis', 'Chris Lee'],
    dueDate: '2024-08-15',
  },
  {
    id: 3,
    name: 'E-commerce Platform',
    description: 'Building a scalable e-commerce solution with inventory management',
    progress: 85,
    tasks: 32,
    completedTasks: 27,
    status: 'active',
    team: ['Lisa Park', 'David Wilson'],
    dueDate: '2024-05-20',
  },
];