'use client';

import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface ProjectActivityProps {
  projectId: number;
}

export function ProjectActivity({ projectId }: ProjectActivityProps) {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {/* Activity items would be fetched from the API */}
        <div className="flex items-start gap-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm">
              <span className="font-medium">John Doe</span> completed task{' '}
              <span className="font-medium">Update documentation</span>
            </p>
            <p className="text-xs text-muted-foreground">2 hours ago</p>
          </div>
        </div>
      </div>
    </Card>
  );
}