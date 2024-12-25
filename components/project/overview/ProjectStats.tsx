'use client';

import { Card } from '@/components/ui/card';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import type { Project } from '@/lib/types';

interface ProjectStatsProps {
  project: Project;
}

export function ProjectStats({ project }: ProjectStatsProps) {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Project Statistics</h2>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-green-500" />
          <div>
            <p className="text-sm font-medium">Completed</p>
            <p className="text-2xl font-bold">{project.completedTasks}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-blue-500" />
          <div>
            <p className="text-sm font-medium">In Progress</p>
            <p className="text-2xl font-bold">
              {project.tasks - project.completedTasks}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-yellow-500" />
          <div>
            <p className="text-sm font-medium">Total Tasks</p>
            <p className="text-2xl font-bold">{project.tasks}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}