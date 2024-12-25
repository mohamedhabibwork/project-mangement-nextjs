'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { TASK_STATUS_CONFIG } from '@/lib/constants/task-status';
import type { Task } from '@/lib/types';

interface TaskCardProps {
  task: Task;
  dragHandleProps?: any;
}

export function TaskCard({ task, dragHandleProps }: TaskCardProps) {
  const [showDescription, setShowDescription] = useState(false);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

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

  return (
    <Card
      {...dragHandleProps}
      className="p-4 space-y-2 cursor-move hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between">
        <h4 className="font-medium">{task.title}</h4>
        <Button
          variant="ghost"
          size="sm"
          className="h-6 w-6 p-0"
          onClick={() => setShowDescription(!showDescription)}
        >
          {showDescription ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </div>
      
      {showDescription && task.description && (
        <p className="text-sm text-muted-foreground">{task.description}</p>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Badge className={getPriorityColor(task.priority)}>
            {task.priority}
          </Badge>
          <Badge className={TASK_STATUS_CONFIG[task.status].color}>
            {TASK_STATUS_CONFIG[task.status].label}
          </Badge>
        </div>
        {task.assignee && (
          <Avatar className="h-6 w-6">
            <AvatarFallback className="text-xs">
              {getInitials(task.assignee)}
            </AvatarFallback>
          </Avatar>
        )}
      </div>
    </Card>
  );
}