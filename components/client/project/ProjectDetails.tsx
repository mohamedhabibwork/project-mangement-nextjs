'use client';

import { Button } from '@/components/ui/button';
import { Users, MessageSquare, Calendar } from 'lucide-react';
import type { Project } from '@/lib/types';

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-2">{project.name}</h1>
      <p className="text-muted-foreground mb-4">{project.description}</p>
      <div className="flex gap-4">
        <Button variant="outline" size="sm">
          <Users className="mr-2 h-4 w-4" />
          Team
        </Button>
        <Button variant="outline" size="sm">
          <MessageSquare className="mr-2 h-4 w-4" />
          Comments
        </Button>
        <Button variant="outline" size="sm">
          <Calendar className="mr-2 h-4 w-4" />
          Timeline
        </Button>
      </div>
    </div>
  );
}