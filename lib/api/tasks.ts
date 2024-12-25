import { createClient } from '@/lib/supabase/client';
import { mockTasks } from '@/lib/data/mock';
import type { Task } from '@/lib/types';

// Check if Supabase is configured
const isSupabaseConfigured = () => {
  try {
    createClient();
    return true;
  } catch {
    return false;
  }
};

export async function getTasks(projectId: string | number): Promise<Task[]> {
  if (isSupabaseConfigured()) {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .eq('project_id', projectId)
      .order('created_at', { ascending: true });

    if (error) throw error;
    return data;
  }
  
  return mockTasks.filter(t => t.projectId.toString() === projectId.toString());
}

export async function createTask(task: Omit<Task, 'id'>): Promise<Task> {
  if (isSupabaseConfigured()) {
    const supabase = createClient();
    const taskData = {
      ...task,
      project_id: task.projectId,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    const { data, error } = await supabase
      .from('tasks')
      .insert(taskData)
      .select()
      .single();

    if (error) {
      console.error('Failed to create task:', error);
      throw error;
    }
    return data;
  }
  
  // Mock implementation
  const newTask = {
    id: Date.now(),
    ...task,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
  mockTasks.push(newTask);
  return newTask;
}

export async function updateTaskStatus(id: string | number, status: Task['status']): Promise<Task> {
  if (isSupabaseConfigured()) {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('tasks')
      .update({ status })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  }
  
  // Mock implementation
  const task = mockTasks.find(t => t.id.toString() === id.toString());
  if (!task) throw new Error('Task not found');
  task.status = status;
  return task;
}