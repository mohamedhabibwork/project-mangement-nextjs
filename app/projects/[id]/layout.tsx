'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProjectHeader } from '@/components/project/ProjectHeader';
import { usePathname, useRouter } from 'next/navigation';
import type { Project } from '@/lib/types';

interface ProjectLayoutProps {
  children: React.ReactNode;
  params: { id: string };
}

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'tasks', label: 'Tasks' },
  { id: 'issues', label: 'Issues' },
  { id: 'settings', label: 'Settings' },
];

export default function ProjectLayout({ children, params }: ProjectLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const currentTab = pathname.split('/').pop() || 'overview';

  const handleTabChange = (value: string) => {
    router.push(`/projects/${params.id}/${value}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <ProjectHeader projectId={params.id} />
      <div className="border-b">
        <div className="container mx-auto px-4">
          <Tabs value={currentTab} onValueChange={handleTabChange}>
            <TabsList>
              {tabs.map(tab => (
                <TabsTrigger key={tab.id} value={tab.id}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}