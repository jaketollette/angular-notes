import { EventEmitter, Injectable, Output } from '@angular/core';
import { Note } from './note';

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
    )
  ];

  private lastNoteId: number = this.notes.reduce((maxId, note) => Math.max(maxId, note.note_id), 0);
  @Output() noteAdded = new EventEmitter<Note>();
  @Output() noteDeleted = new EventEmitter<number>();

  constructor() {}

  getNotes(): Note[] {
    const notesInStorage = localStorage.getItem('notes');
    if (notesInStorage) {
      return this.notes = JSON.parse(notesInStorage);
    } else {
      return this.notes;
    }
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
      this.saveNotes();
    }
  }

  deleteNote(note_id: Number): void {
    this.notes = this.notes.filter(note => note.note_id !== note_id);
    this.saveNotes();
  }

  saveNotes() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

}
