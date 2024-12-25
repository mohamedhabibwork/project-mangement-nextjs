'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { InviteMemberDialog } from './InviteMemberDialog';
import { MemberRoleSelect } from './MemberRoleSelect';
import { MEMBER_ROLE_CONFIG } from '@/lib/types/member';
import type { ProjectMember } from '@/lib/types';

interface ProjectMembersProps {
  members: ProjectMember[];
  projectId: number;
}

export function ProjectMembers({ members, projectId }: ProjectMembersProps) {
  const [showInviteDialog, setShowInviteDialog] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Project Members</h2>
          <p className="text-sm text-muted-foreground">
            Manage who has access to this project
          </p>
        </div>
        <Button onClick={() => setShowInviteDialog(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Invite Member
        </Button>
      </div>

      <Card className="divide-y">
        {members.map((member) => (
          <div
            key={member.id}
            className="flex items-center justify-between p-4"
          >
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>
                  {member.user.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{member.user.name}</p>
                <p className="text-sm text-muted-foreground">
                  {member.user.email}
                </p>
              </div>
            </div>
            <MemberRoleSelect
              memberId={member.id}
              currentRole={member.role}
              onRoleChange={() => {}}
            />
          </div>
        ))}
      </Card>

      <InviteMemberDialog
        projectId={projectId}
        open={showInviteDialog}
        onOpenChange={setShowInviteDialog}
      />
    </div>
  );
}