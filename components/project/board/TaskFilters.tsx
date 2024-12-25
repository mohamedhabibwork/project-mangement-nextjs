'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TASK_STATUS_CONFIG } from '@/lib/constants/task-status';
import type { TaskStatus } from '@/lib/types';

interface TaskFiltersProps {
  onFilterChange: (filters: { search: string; status: TaskStatus | 'all'; assignee: string | 'all' }) => void;
  assignees: string[];
}

export function TaskFilters({ onFilterChange, assignees }: TaskFiltersProps) {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<TaskStatus | 'all'>('all');
  const [assignee, setAssignee] = useState<string | 'all'>('all');

  const handleSearchChange = (value: string) => {
    setSearch(value);
    onFilterChange({ search: value, status, assignee });
  };

  const handleStatusChange = (value: TaskStatus | 'all') => {
    setStatus(value);
    onFilterChange({ search, status: value, assignee });
  };

  const handleAssigneeChange = (value: string | 'all') => {
    setAssignee(value);
    onFilterChange({ search, status, assignee: value });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="pl-8"
        />
      </div>
      <Select value={status} onValueChange={handleStatusChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Statuses</SelectItem>
          {Object.entries(TASK_STATUS_CONFIG).map(([value, { label }]) => (
            <SelectItem key={value} value={value}>{label}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={assignee} onValueChange={handleAssigneeChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by assignee" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Assignees</SelectItem>
          {assignees.map((name) => (
            <SelectItem key={name} value={name}>{name}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}