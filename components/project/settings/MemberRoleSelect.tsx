'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MEMBER_ROLE_CONFIG } from '@/lib/types/member';
import type { MemberRole } from '@/lib/types';

interface MemberRoleSelectProps {
  memberId: string;
  currentRole: MemberRole;
  onRoleChange: (role: MemberRole) => void;
}

export function MemberRoleSelect({
  memberId,
  currentRole,
  onRoleChange,
}: MemberRoleSelectProps) {
  return (
    <Select value={currentRole} onValueChange={onRoleChange}>
      <SelectTrigger className="w-[140px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(MEMBER_ROLE_CONFIG).map(([role, config]) => (
          <SelectItem key={role} value={role}>
            <div className="flex flex-col">
              <span>{config.label}</span>
              <span className="text-xs text-muted-foreground">
                {config.description}
              </span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}