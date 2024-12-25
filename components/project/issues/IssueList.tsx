'use client';

import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { IssueCard } from './IssueCard';
import { NewIssueDialog } from './NewIssueDialog';
import type { Issue, IssueStatus } from '@/lib/types/issue';

interface IssueListProps {
  projectId: string;
  initialIssues: Issue[];
}

const issueColumns: { id: IssueStatus; title: string }[] = [
  { id: 'open', title: 'Open' },
  { id: 'in-progress', title: 'In Progress' },
  { id: 'resolved', title: 'Resolved' },
  { id: 'closed', title: 'Closed' },
];

export function IssueList({ projectId, initialIssues }: IssueListProps) {
  const [issues, setIssues] = useState<Issue[]>(initialIssues);

  const onDragEnd = async (result: any) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;

    const newStatus = destination.droppableId as IssueStatus;
    const updatedIssues = issues.map(issue =>
      issue.id.toString() === draggableId
        ? { ...issue, status: newStatus }
        : issue
    );

    setIssues(updatedIssues);

    try {
      // Add API call to update issue status
      // await updateIssueStatus(draggableId, newStatus);
    } catch (error) {
      console.error('Failed to update issue status:', error);
      setIssues(issues); // Revert on error
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Issues</h2>
        <NewIssueDialog projectId={projectId} />
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {issueColumns.map(column => {
            const columnIssues = issues.filter(
              issue => issue.status === column.id
            );

            return (
              <div key={column.id} className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{column.title}</h3>
                  <Badge variant="secondary">{columnIssues.length}</Badge>
                </div>

                <Droppable droppableId={column.id}>
                  {(provided) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="space-y-3 min-h-[200px] p-4 bg-muted/50 rounded-lg"
                    >
                      {columnIssues.map((issue, index) => (
                        <Draggable
                          key={issue.id}
                          draggableId={issue.id.toString()}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <IssueCard issue={issue} />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            );
          })}
        </div>
      </DragDropContext>
    </div>
  );
}