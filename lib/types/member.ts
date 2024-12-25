export type MemberRole = 'owner' | 'admin' | 'member' | 'viewer';

export interface ProjectMember {
  id: string;
  userId: string;
  projectId: number;
  role: MemberRole;
  joinedAt: string;
  user: {
    name: string;
    email: string;
    avatarUrl?: string;
  };
}

export const MEMBER_ROLE_CONFIG: Record<MemberRole, { label: string; description: string }> = {
  owner: {
    label: 'Owner',
    description: 'Full access to all features and settings',
  },
  admin: {
    label: 'Admin',
    description: 'Can manage project settings and members',
  },
  member: {
    label: 'Member',
    description: 'Can create and edit tasks',
  },
  viewer: {
    label: 'Viewer',
    description: 'Can view project content only',
  },
};