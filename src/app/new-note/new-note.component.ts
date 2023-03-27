import { NoteService } from './../note-card/note.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { Note } from '../note-card/note';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent {
  newNoteDescription: string = 'new-note';
  @Output() newNote: Note = new Note(0, '', new Date(), '', '', '', '', 'To Do');
  newNoteVisible = false;
  @Output() noteAdded = new EventEmitter<Note>();

  constructor(private NoteService: NoteService) {}

  showNewNote() {
    this.newNoteVisible = true;
    const newNoteContainer = document.querySelector('.new-note-container');
    if (newNoteContainer) {
      newNoteContainer.classList.add('dark-background');
    }
  }

  hideNewNote() {
    this.newNoteVisible = false;
    const newNoteContainer = document.querySelector('.new-note-container');
    if (newNoteContainer) {
      newNoteContainer.classList.remove('dark-background');
    }
  }


  addNote(newNote: Note) {
    const noteToAdd = new Note(
      newNote.note_id,
      newNote.note_description,
      newNote.due_date,
      newNote.assignee,
      newNote.attachments,
      newNote.priority_level,
      newNote.comments,
      'To Do'
    );
    this.newNote = new Note(0, '', new Date(), '', '', '', '', 'To Do');
    this.noteAdded.emit(noteToAdd);
    this.hideNewNote();
  }
}
