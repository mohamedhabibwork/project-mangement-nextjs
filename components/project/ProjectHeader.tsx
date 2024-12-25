'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Layout, Users, MessageSquare, Calendar } from 'lucide-react';
import { getProjectById } from '@/lib/api/projects';
import type { Project } from '@/lib/types';

interface ProjectHeaderProps {
  projectId: string;
}

export function ProjectHeader({ projectId }: ProjectHeaderProps) {
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const loadProject = async () => {
      const data = await getProjectById(projectId);
      if (data) {
        setProject(data);
      }
    };
    loadProject();
  }, [projectId]);

  if (!project) return null;

  return (
    <div className="border-b">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">{project.name}</h1>
            <p className="text-muted-foreground mt-1">{project.description}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Users className="mr-2 h-4 w-4" />
              Team ({project.team?.length || 0})
            </Button>
            <Button variant="outline" size="sm">
              <MessageSquare className="mr-2 h-4 w-4" />
              Comments
            </Button>
            {project.dueDate && (
              <Button variant="outline" size="sm">
                <Calendar className="mr-2 h-4 w-4" />
                Due {new Date(project.dueDate).toLocaleDateString()}
              </Button>
            )}
          </div>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Progress</span>
            <span className="text-sm text-muted-foreground">{project.progress}%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Tasks</span>
            <span className="text-sm text-muted-foreground">
              {project.completedTasks} / {project.tasks}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Status</span>
            <span className="text-sm text-muted-foreground capitalize">
              {project.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}