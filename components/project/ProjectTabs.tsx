'use client';

import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ListTodo } from 'lucide-react';
import { TaskList } from '@/components/tasks/TaskList';
import { mockTasks } from '@/lib/data/mock-data';

interface ProjectTabsProps {
  projectId: number;
}

export function ProjectTabs({ projectId }: ProjectTabsProps) {
  const projectTasks = mockTasks.filter(task => task.projectId === projectId);

  return (
    <Tabs defaultValue="tasks" className="space-y-4">
      <TabsList>
        <TabsTrigger value="tasks">
          <ListTodo className="mr-2 h-4 w-4" />
          Tasks
        </TabsTrigger>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="files">Files</TabsTrigger>
      </TabsList>

      <TabsContent value="tasks">
        <Card className="p-6">
          <TaskList tasks={projectTasks} />
        </Card>
      </TabsContent>

      <TabsContent value="overview">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Project Overview</h3>
          <p className="text-muted-foreground">
            Project details and statistics will be displayed here.
          </p>
        </Card>
      </TabsContent>

      <TabsContent value="files">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Project Files</h3>
          <p className="text-muted-foreground">
            Project files and documents will be displayed here.
          </p>
        </Card>
      </TabsContent>
    </Tabs>
  );
}