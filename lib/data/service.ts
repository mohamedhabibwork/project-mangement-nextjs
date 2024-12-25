import { createClient } from '@/lib/supabase/client';
import { mockProjects, mockTasks } from './mock-data';
import type { Project, Task } from '@/lib/types';

// Check if Supabase is configured
const isSupabaseConfigured = () => {
  try {
    createClient();
    return true;
  } catch {
    return false;
  }
};

// Projects
export async function getProjects(): Promise<Project[]> {
  if (isSupabaseConfigured()) {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  }
  
  return mockProjects;
}

export async function getProjectById(id: string | number): Promise<Project | undefined> {
  if (isSupabaseConfigured()) {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  }
  
  return mockProjects.find(p => p.id.toString() === id.toString());
}

// Tasks
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
    const { data, error } = await supabase
      .from('tasks')
      .insert(task)
      .select()
      .single();

    if (error) throw error;
    return data;
  }
  
  // Mock implementation
  const newTask = {
    id: Date.now(),
    ...task,
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