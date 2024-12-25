'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/client/ProjectCard';
import { ProjectHeader } from '@/components/client/ProjectHeader';
import type { Project } from '@/lib/types';

interface ProjectListClientProps {
  initialProjects: Project[];
}

export function ProjectListClient({ initialProjects }: ProjectListClientProps) {
  const [projects] = useState<Project[]>(initialProjects);

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <ProjectHeader />
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Project
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}