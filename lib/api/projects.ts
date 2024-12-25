import { createClient } from '@/lib/supabase/client';
import { mockProjects } from '@/lib/data/mock';
import type { Project } from '@/lib/types';

// Check if Supabase is configured
const isSupabaseConfigured = () => {
  try {
    createClient();
    return true;
  } catch {
    return false;
  }
};

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