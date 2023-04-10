export interface Note {
  id: number;
  description: string;
  dueDate: Date;
  assignee: string;
  attachments: string;
  priority: Priority;
  comments: string;
  status: NoteStatus;
}

export type NoteStatus = 'To Do' | 'Doing' | 'Review' | 'Done';

export type Priority = 'High' | 'Low' | 'Medium';

export const NULL_NOTE: Note = {
  id: 0,
  assignee: '',
  attachments: '',
  comments: '',
  description: '',
  dueDate: new Date(),
  priority: 'Low',
  status: 'To Do'
}
