import { EventEmitter, Injectable, Output } from '@angular/core';
import { Note } from '../../note-card/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: Note[] = [
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
    new Note(
      6,
      'Create new login page',
      new Date(2023, 4, 10),
      'Alice',
      '',
      'Medium',
      '',
      'To Do'
    ),
    new Note(
      7,
      'Develop new search algorithm',
      new Date(2023, 4, 3),
      'Bob',
      '',
      'High',
      '',
      'Doing'
    ),
    new Note(
      8,
      'Update UI/UX design',
      new Date(2023, 4, 12),
      'Carol',
      '',
      'Low',
      '',
      'To Do'
    ),
    new Note(
      9,
      'Migrate to new server',
      new Date(2023, 4, 30),
      'David',
      '',
      'High',
      '',
      'Doing'
    ),
    new Note(
      10,
      'Implement new payment gateway',
      new Date(2023, 4, 20),
      'Eve',
      '',
      'Medium',
      '',
      'To Do'
    ),
    new Note(
      11,
      'Test website for mobile responsiveness',
      new Date(2023, 4, 5),
      'Alice',
      '',
      'Low',
      '',
      'Doing'
    ),
    new Note(
      12,
      'Improve website security',
      new Date(2023, 4, 17),
      'Bob',
      '',
      'High',
      '',
      'To Do'
    ),
    new Note(
      13,
      'Create new user dashboard',
      new Date(2023, 4, 8),
      'Carol',
      '',
      'Medium',
      '',
      'To Do'
    ),
    new Note(
      14,
      'Optimize website load times',
      new Date(2023, 4, 22),
      'David',
      '',
      'High',
      '',
      'Doing'
    ),
    new Note(
      15,
      'Integrate with social media platforms',
      new Date(2023, 4, 15),
      'Eve',
      '',
      'Medium',
      '',
      'Review'
    )
  ];

  private lastNoteId: number = this.notes.reduce((maxId, note) => Math.max(maxId, note.note_id), 0);
  @Output() noteAdded = new EventEmitter<Note>();
  @Output() noteDeleted = new EventEmitter<number>();
  @Output() editNotePushed = new EventEmitter<Note>();
  @Output() noteEdited = new EventEmitter<Note>();

  constructor() { }

  getNotes(): Note[] {
    const notesInStorage = localStorage.getItem('notes');
    if (notesInStorage) {
      return this.notes = JSON.parse(notesInStorage);
    } else {
      return this.notes;
    }
  }

  getNotesByStatus(status: string): Note[] {
    return this.notes.filter(note => note.note_status === status);
  }

  addNote(note: Note): void {
    note.note_id = ++this.lastNoteId;
    this.notes.push(note);
    this.saveNotes();
  }

  editNote(updatedNote: Note): void {
    const index = this.notes.findIndex(note => note.note_id === updatedNote.note_id);
    if (index > -1) {
      this.notes[index] = updatedNote;
      this.calculateDaysUntilDue(updatedNote.due_date);
      this.saveNotes();
    }
  }

  updateNoteStatus(updatedNote: Note, toStatus: string) {
    const index = this.notes.findIndex(note => note.note_id === updatedNote.note_id);
    if (index > -1) {
      updatedNote.note_status = toStatus;
      this.notes[index] = updatedNote;
      this.saveNotes();
    }
    console.log("UpdatedNote: ", updatedNote);
    console.log(toStatus)
  }

  deleteNote(note_id: Number): void {
    this.notes = this.notes.filter(note => note.note_id !== note_id);
    this.saveNotes();
  }

  saveNotes() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  calculateDaysUntilDue(due_date: Date): number {
    if (due_date instanceof Date && !isNaN(due_date.getTime())) {
      let one_day = 1000 * 60 * 60 * 24;
      let today = new Date();
      return Math.round((due_date.getTime() - today.getTime()) / one_day);
    } else {
      console.error("Invalid date:", due_date);
      return 0;
    }
  }

}
