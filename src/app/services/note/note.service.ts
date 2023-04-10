import { EventEmitter, Injectable, Output } from '@angular/core';
import { MOCK_NOTES } from 'src/app/constants/mock.data';
import { Note, NoteStatus } from '../../interfaces/note.interface';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: Note[] = MOCK_NOTES;

  private lastNoteId: number = this.notes.reduce((maxId, note) => Math.max(maxId, note.id), 0);
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
    return this.notes.filter(note => note.status === status);
  }

  addNote(note: Note): void {
    note.id = ++this.lastNoteId;
    this.notes.push(note);
    this.saveNotes();
  }

  editNote(updatedNote: Note): void {
    const index = this.notes.findIndex(note => note.id === updatedNote.id);
    if (index > -1) {
      this.notes[index] = updatedNote;
      this.saveNotes();
    }
  }

  updateNoteStatus(updatedNote: Note, toStatus: NoteStatus) {
    const index = this.notes.findIndex(note => note.id === updatedNote.id);
    if (index > -1) {
      updatedNote.status = toStatus;
      this.notes[index] = updatedNote;
      this.saveNotes();
    }
    console.log("UpdatedNote: ", updatedNote);
    console.log(toStatus)
  }

  deleteNote(id: Number): void {
    this.notes = this.notes.filter(note => note.id !== id);
    this.saveNotes();
  }

  saveNotes() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
}
