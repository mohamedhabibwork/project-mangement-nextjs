'use client';

import { Card } from '@/components/ui/card';
import { ProjectStats } from './ProjectStats';
import { ProjectActivity } from './ProjectActivity';
import { ProjectTeam } from './ProjectTeam';
import type { Project } from '@/lib/types';

interface ProjectOverviewProps {
  project: Project;
}

export function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-6">
        <ProjectStats project={project} />
        <ProjectActivity projectId={project.id} />
      </div>
      <div className="space-y-6">
        <ProjectTeam members={project.team || []} />
      </div>
    </div>
  );
}