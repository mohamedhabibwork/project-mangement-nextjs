import { createClient } from '@/lib/supabase/client';
import type { ProjectMember } from '@/lib/types';

export async function getProjectMembers(projectId: string): Promise<ProjectMember[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('project_members')
    .select(`
      *,
      user:user_id (
        name,
        email,
        avatar_url
      )
    `)
    .eq('project_id', projectId);

  if (error) throw error;
  return data || [];
}