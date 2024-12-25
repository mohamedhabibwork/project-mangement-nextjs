'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProjectDetailsForm } from './ProjectDetailsForm';
import { ProjectMembers } from './ProjectMembers';
import { ProjectDangerZone } from './ProjectDangerZone';
import type { Project, ProjectMember } from '@/lib/types';

interface ProjectSettingsProps {
  project: Project;
  members: ProjectMember[];
}

export function ProjectSettings({ project, members }: ProjectSettingsProps) {
  return (
    <Tabs defaultValue="details" className="space-y-6">
      <TabsList>
        <TabsTrigger value="details">Project Details</TabsTrigger>
        <TabsTrigger value="members">Members</TabsTrigger>
        <TabsTrigger value="danger">Danger Zone</TabsTrigger>
      </TabsList>

      <TabsContent value="details">
        <ProjectDetailsForm project={project} />
      </TabsContent>

      <TabsContent value="members">
        <ProjectMembers members={members} projectId={project.id} />
      </TabsContent>

      <TabsContent value="danger">
        <ProjectDangerZone project={project} />
      </TabsContent>
    </Tabs>
  );
}