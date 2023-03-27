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
  editNoteVisible = false;
  changeDetector: any;

  constructor(private noteService: NoteService) {}

  expandNote() {
    this.editNoteVisible = true;
    const editNoteContainer = document.querySelector('.edit-note-container');
    if (editNoteContainer) {
      editNoteContainer.classList.add('dark-background');
    }
  }

  hideNewNote() {
    this.editNoteVisible = false;
    const editNoteContainer = document.querySelector('.edit-note-container');
    if (editNoteContainer) {
      editNoteContainer.classList.remove('dark-background');
    }
  }

  saveNote() {
    this.noteService.editNote(this.note);
    this.noteEdited.emit(this.note);
    this.changeDetector.detectChanges();
  }

  cancelEdit() {
    this.editNoteVisible = false;
    this.hideNewNote();
    this.changeDetector.detectChanges();
  }
}
