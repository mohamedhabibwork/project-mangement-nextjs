'use client';

import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface ProjectTeamProps {
  members: string[];
}

export function ProjectTeam({ members }: ProjectTeamProps) {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Team Members</h2>
      <div className="space-y-4">
        {members.map((member, index) => (
          <div key={index} className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>
                {member.split(' ').map(n => n[0]).join('').toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{member}</p>
              <p className="text-sm text-muted-foreground">Team Member</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}