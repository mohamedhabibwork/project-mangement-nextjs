'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard';
import { ProjectHeader } from '@/components/ProjectHeader';
import type { Project } from '@/lib/types';

export default function ProjectList() {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      name: 'Website Redesign',
      description: 'Complete overhaul of company website',
      progress: 65,
      tasks: 24,
      completedTasks: 16,
      status: 'active',
    },
    {
      id: 2,
      name: 'Mobile App Development',
      description: 'Cross-platform mobile application',
      progress: 30,
      tasks: 45,
      completedTasks: 14,
      status: 'active',
    },
  ]);

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