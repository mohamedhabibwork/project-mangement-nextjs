import { createClient } from '@/lib/supabase/client';
import type { Issue } from '@/lib/types';

export async function getIssues(projectId: string): Promise<Issue[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('issues')
    .select('*')
    .eq('project_id', projectId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
}