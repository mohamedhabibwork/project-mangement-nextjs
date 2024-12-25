'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { createTask } from '@/lib/api/tasks';

interface QuickAddTaskProps {
  projectId: string;
}

export function QuickAddTask({ projectId }: QuickAddTaskProps) {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    setIsLoading(true);
    try {
      await createTask({
        title,
        description: '',
        priority: 'medium',
        status: 'todo',
        projectId,
      });
      setTitle('');
      router.refresh();
    } catch (error) {
      console.error('Failed to create task:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1"
      />
      <Button type="submit" disabled={isLoading || !title.trim()}>
        Add
      </Button>
    </form>
  );
}