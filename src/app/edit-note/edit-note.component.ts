import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../note-card/note';
import { NoteService } from '../note-card/note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent {
  @Input() note!: Note;
  @Output() noteEdited = new EventEmitter<Note>();
  isExpanded = false;

  constructor(private noteService: NoteService) {}

  expandNote() {
    this.isExpanded = true;
    const editNoteContainer = document.querySelector('.edit-note-container');
    if (editNoteContainer) {
      editNoteContainer.classList.add('dark-background');
    }
  }

  hideNewNote() {
    this.isExpanded = false;
    const editNoteContainer = document.querySelector('.edit-note-container');
    if (editNoteContainer) {
      editNoteContainer.classList.remove('dark-background');
    }
  }
  
}
