'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { format } from 'date-fns';
import type { Issue } from '@/lib/types/issue';

interface IssueCardProps {
  issue: Issue;
}

export function IssueCard({ issue }: IssueCardProps) {
  const getPriorityColor = (priority: Issue['priority']) => {
    const colors = {
      critical: 'text-red-500 bg-red-100 dark:bg-red-900/20',
      high: 'text-orange-500 bg-orange-100 dark:bg-orange-900/20',
      medium: 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/20',
      low: 'text-green-500 bg-green-100 dark:bg-green-900/20',
    };
    return colors[priority];
  };

  const getTypeColor = (type: Issue['type']) => {
    const colors = {
      bug: 'text-red-500 bg-red-100 dark:bg-red-900/20',
      feature: 'text-blue-500 bg-blue-100 dark:bg-blue-900/20',
      improvement: 'text-green-500 bg-green-100 dark:bg-green-900/20',
      question: 'text-purple-500 bg-purple-100 dark:bg-purple-900/20',
    };
    return colors[type];
  };

  return (
    <Card className="p-4 space-y-3 hover:shadow-md transition-shadow">
      <div>
        <h4 className="font-medium line-clamp-2">{issue.title}</h4>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
          {issue.description}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Badge className={getPriorityColor(issue.priority)}>
            {issue.priority}
          </Badge>
          <Badge className={getTypeColor(issue.type)}>
            {issue.type}
          </Badge>
        </div>
        {issue.assigneeId && (
          <Avatar className="h-6 w-6">
            <AvatarFallback>
              {issue.assigneeId.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        )}
      </div>

      <div className="text-xs text-muted-foreground">
        Updated {format(new Date(issue.updatedAt), 'MMM d, yyyy')}
      </div>
    </Card>
  );
}