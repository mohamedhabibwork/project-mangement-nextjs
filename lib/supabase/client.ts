import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import { mockProjects } from '@/lib/data/mock';

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    // Return a mock client when Supabase is not configured
    return {
      auth: {
        getSession: async () => ({ data: { session: { user: { id: '1' } } } }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
        getUser: async () => ({ data: { user: { id: '1', email: 'demo@example.com' } } }),
      },
      from: () => ({
        select: () => ({
          eq: () => ({
            single: async () => ({ data: mockProjects[0] }),
            order: () => ({ data: mockProjects }),
          }),
          order: () => ({ data: mockProjects }),
        }),
      }),
    } as any;
  }

  return createSupabaseClient(supabaseUrl, supabaseKey);
}