'use client';

import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { updateTaskStatus } from '@/lib/api/tasks';
import { TASK_STATUS_CONFIG } from '@/lib/constants/task-status';
import type { Task, TaskStatus } from '@/lib/types';
import { NewTaskDialog } from './NewTaskDialog';
import { QuickAddTask } from './QuickAddTask';
import { TaskCard } from './TaskCard';

interface Column {
  id: TaskStatus;
  title: string;
  tasks: Task[];
}

interface TaskBoardProps {
  projectId: string;
  initialTasks: Task[];
}

export function TaskBoard({ projectId, initialTasks }: TaskBoardProps) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const columns: Column[] = [
    {
      id: 'todo',
      title: 'To Do',
      tasks: tasks.filter(task => task.status === 'todo'),
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      tasks: tasks.filter(task => task.status === 'in-progress'),
    },
    {
      id: 'completed',
      title: 'Completed',
      tasks: tasks.filter(task => task.status === 'completed'),
    },
  ];

  const onDragEnd = async (result: any) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;

    const sourceColumn = columns.find(col => col.id === source.droppableId);
    const destColumn = columns.find(col => col.id === destination.droppableId);
    
    if (!sourceColumn || !destColumn) return;

    try {
      await updateTaskStatus(draggableId, destination.droppableId as TaskStatus);

      setTasks(prevTasks => 
        prevTasks.map(task => 
          task.id.toString() === draggableId
            ? { ...task, status: destination.droppableId as TaskStatus }
            : task
        )
      );
    } catch (error) {
      console.error('Failed to update task status:', error);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Tasks</h2>
        <NewTaskDialog projectId={projectId} onTaskCreated={(task) => setTasks(prev => [...prev, task])} />
      </div>

      <QuickAddTask
        projectId={projectId}
        onTaskCreated={(task) => setTasks(prev => [...prev, task])}
      />
      
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map(column => (
            <div key={column.id} className="space-y-4">
              <h3 className="font-semibold text-lg">{column.title}</h3>
              <Droppable droppableId={column.id}>
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="space-y-3 min-h-[200px] p-4 bg-muted/50 rounded-lg"
                  >
                    {column.tasks.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                          >
                            <TaskCard
                              task={task}
                              dragHandleProps={provided.dragHandleProps}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}