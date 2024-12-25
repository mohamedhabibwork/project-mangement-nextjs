import type { Task } from '@/lib/types';

export const mockTasks: Task[] = [
  // Website Redesign Tasks
  {
    id: 1,
    title: 'Design System Implementation',
    description: 'Create a comprehensive design system including color palette, typography, and components',
    status: 'in-progress',
    priority: 'high',
    assignee: 'Sarah Chen',
    projectId: 1,
    dueDate: '2024-04-15',
  },
  {
    id: 2,
    title: 'API Integration',
    description: 'Integrate third-party APIs for enhanced functionality',
    status: 'todo',
    priority: 'medium',
    assignee: 'Mike Johnson',
    projectId: 1,
    dueDate: '2024-05-01',
  },
  {
    id: 3,
    title: 'User Authentication',
    description: 'Implement secure user authentication system with OAuth support',
    status: 'completed',
    priority: 'high',
    assignee: 'Alex Wong',
    projectId: 1,
    dueDate: '2024-04-01',
  },

  // Mobile App Tasks
  {
    id: 4,
    title: 'iOS Development',
    description: 'Develop and test iOS version of the mobile app',
    status: 'in-progress',
    priority: 'high',
    assignee: 'John Smith',
    projectId: 2,
    dueDate: '2024-07-01',
  },
  {
    id: 5,
    title: 'Android Development',
    description: 'Develop and test Android version of the mobile app',
    status: 'todo',
    priority: 'high',
    assignee: 'Emma Davis',
    projectId: 2,
    dueDate: '2024-07-15',
  },
  {
    id: 6,
    title: 'Push Notifications',
    description: 'Implement push notification system for both platforms',
    status: 'todo',
    priority: 'medium',
    assignee: 'Chris Lee',
    projectId: 2,
    dueDate: '2024-06-30',
  },

  // E-commerce Tasks
  {
    id: 7,
    title: 'Payment Gateway Integration',
    description: 'Integrate multiple payment gateways for secure transactions',
    status: 'completed',
    priority: 'high',
    assignee: 'Lisa Park',
    projectId: 3,
    dueDate: '2024-05-01',
  },
  {
    id: 8,
    title: 'Inventory Management',
    description: 'Develop inventory tracking and management system',
    status: 'in-progress',
    priority: 'medium',
    assignee: 'David Wilson',
    projectId: 3,
    dueDate: '2024-05-15',
  },
];