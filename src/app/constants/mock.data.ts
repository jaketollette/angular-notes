import { v4 as uuidv4 } from 'uuid';
import { Note } from "../interfaces/note.interface";

export const MOCK_NOTES: Note[] = [
  {
    id: uuidv4(),
    assignee: 'Alice',
    attachments: '',
    comments: '',
    description: 'Implement user authentication',
    dueDate: new Date(2023, 3, 25, 0, 0, 0),
    priority: 'High',
    status: 'To Do'
  },
  {
    id: uuidv4(),
    assignee: 'Bob',
    attachments: 'landing-page-design.pdf',
    comments: '',
    description: 'Design the landing page',
    dueDate: new Date(2023, 3, 20, 0, 0, 0),
    priority: 'Medium',
    status: 'Doing'
  },
  {
    id: uuidv4(),
    description: 'Fix the reported bugs',
    dueDate: new Date(2023, 3, 18),
    assignee: 'Carol',
    attachments: '',
    priority: 'Low',
    comments: 'There are 3 reported bugs to fix.',
    status: 'Review'
  },
  {
    id: uuidv4(),
    description: 'Optimize database queries',
    dueDate: new Date(2023, 3, 28),
    assignee: 'David',
    attachments: '',
    priority: 'High',
    comments: 'Optimization is crucial for performance.',
    status: 'Done'
  },
  {
    id: uuidv4(),
    description: 'Write unit tests for new features',
    dueDate: new Date(2023, 3, 22),
    assignee: 'Eve',
    attachments: '',
    priority: 'Medium',
    comments: '',
    status: 'Doing'
  },
  {
    id: uuidv4(),
    description: 'Create new login page',
    dueDate: new Date(2023, 4, 10),
    assignee: 'Alice',
    attachments: '',
    priority: 'Medium',
    comments: '',
    status: 'To Do'
  },
  {
    id: uuidv4(),
    description: 'Develop new search algorithm',
    dueDate: new Date(2023, 4, 3),
    assignee: 'Bob',
    attachments: '',
    priority: 'High',
    comments: '',
    status: 'Doing'
  },
  {
    id: uuidv4(),
    description: 'Update UI/UX design',
    dueDate: new Date(2023, 4, 12),
    assignee: 'Carol',
    attachments: '',
    priority: 'Low',
    comments: '',
    status: 'To Do'
  },
  {
    id: uuidv4(),
    description: 'Migrate to new server',
    dueDate: new Date(2023, 4, 30),
    assignee: 'David',
    attachments: '',
    priority: 'High',
    comments: '',
    status: 'Doing'
  },
  {
    id: uuidv4(),
    description: 'Implement new payment gateway',
    dueDate: new Date(2023, 4, 20),
    assignee: 'Eve',
    attachments: '',
    priority: 'Medium',
    comments: '',
    status: 'To Do'
  },
  {
    id: uuidv4(),
    description: 'Test website for mobile responsiveness',
    dueDate: new Date(2023, 4, 5),
    assignee: 'Alice',
    attachments: '',
    priority: 'Low',
    comments: '',
    status: 'Doing'
  },
  {
    id: uuidv4(),
    description: 'Improve website security',
    dueDate: new Date(2023, 4, 17),
    assignee: 'Bob',
    attachments: '',
    priority: 'High',
    comments: '',
    status: 'To Do'
  },
  {
    id: uuidv4(),
    description: 'Create new user dashboard',
    dueDate: new Date(2023, 4, 8),
    assignee: 'Carol',
    attachments: '',
    priority: 'Medium',
    comments: '',
    status: 'To Do'
  },
  {
    id: uuidv4(),
    description: 'Optimize website load times',
    dueDate: new Date(2023, 4, 22),
    assignee: 'David',
    attachments: '',
    priority: 'High',
    comments: '',
    status: 'Doing'
  },
  {
    id: uuidv4(),
    description: 'Integrate with social media platforms',
    dueDate: new Date(2023, 4, 15),
    assignee: 'Eve',
    attachments: '',
    priority: 'Medium',
    comments: '',
    status: 'Review'
  }
]
