import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_NOTES } from 'src/app/constants/mock.data';
import { v4 as uuidv4 } from 'uuid';
import { Note, NoteStatus } from '../../interfaces/note.interface';

const NOTES_KEY = 'notes';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: Note[] = MOCK_NOTES;

  @Output() noteAdded = new EventEmitter<Note>();
  @Output() editNotePushed = new EventEmitter<Note>();
  @Output() noteEdited = new EventEmitter<Note>();

  constructor() { }

  getNotes(): Observable<Note[]> {
    const notesInStorage = localStorage.getItem(NOTES_KEY);
    if (notesInStorage) {
      return of(JSON.parse(notesInStorage));
    } else {
      return of(this.notes);
    }
  }

  getNotesByStatus(status: string): Note[] {
    return this.notes.filter(note => note.status === status);
  }

  addNote(note: Note): void {
    note.id = uuidv4();
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

  deleteNote(id: string): void {
    this.notes = this.notes.filter(note => note.id !== id);
    this.saveNotes();
  }

  saveNotes() {
    localStorage.setItem(NOTES_KEY, JSON.stringify(this.notes));
  }
}
