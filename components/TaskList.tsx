'use client';

import { Task } from '@/app/types';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar } from '@/components/ui/avatar';
import { format } from 'date-fns';

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return 'text-red-500 bg-red-100 dark:bg-red-900/20';
      case 'medium':
        return 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/20';
      case 'low':
        return 'text-green-500 bg-green-100 dark:bg-green-900/20';
    }
  };

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return 'text-green-500 bg-green-100 dark:bg-green-900/20';
      case 'in-progress':
        return 'text-blue-500 bg-blue-100 dark:bg-blue-900/20';
      case 'todo':
        return 'text-gray-500 bg-gray-100 dark:bg-gray-900/20';
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Task</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead>Assignee</TableHead>
          <TableHead>Due Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.id}>
            <TableCell>
              <div>
                <div className="font-medium">{task.title}</div>
                <div className="text-sm text-muted-foreground">
                  {task.description}
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge className={getStatusColor(task.status)}>
                {task.status}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge className={getPriorityColor(task.priority)}>
                {task.priority}
              </Badge>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6" />
                <span className="text-sm">{task.assignee}</span>
              </div>
            </TableCell>
            <TableCell>
              {task.dueDate && (
                <span className="text-sm">
                  {format(new Date(task.dueDate), 'MMM d, yyyy')}
                </span>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}