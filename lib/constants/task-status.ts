import type { TaskStatus } from '@/lib/types';

export const TASK_STATUS_CONFIG: Record<TaskStatus, { label: string; color: string }> = {
  todo: {
    label: 'To Do',
    color: 'text-gray-500 bg-gray-100 dark:bg-gray-900/20',
  },
  'in-progress': {
    label: 'In Progress',
    color: 'text-blue-500 bg-blue-100 dark:bg-blue-900/20',
  },
  completed: {
    label: 'Completed',
    color: 'text-green-500 bg-green-100 dark:bg-green-900/20',
  },
};