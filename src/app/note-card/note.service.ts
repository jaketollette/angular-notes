import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: Note[] = [
    new Note(
      1,
      'Implement user authentication',
      new Date(2023, 3, 25),
      'Alice',
      '',
      'High',
      '',
      'To Do'
    ),
    new Note(
      2,
      'Design the landing page',
      new Date(2023, 3, 20),
      'Bob',
      'landing-page-design.pdf',
      'Medium',
      '',
      'Doing'
    ),
    new Note(
      3,
      'Fix the reported bugs',
      new Date(2023, 3, 18),
      'Carol',
      '',
      'Low',
      'There are 3 reported bugs to fix.',
      'Review'
    ),
    new Note(
      4,
      'Optimize database queries',
      new Date(2023, 3, 28),
      'David',
      '',
      'High',
      'Optimization is crucial for performance.',
      'Done'
    ),
    new Note(
      5,
      'Write unit tests for new features',
      new Date(2023, 3, 22),
      'Eve',
      '',
      'Medium',
      '',
      'Doing'
    ),
    // Add more notes here
  ];

  constructor() {}

  getNotes(): Note[] {
    return this.notes;
  }
}
