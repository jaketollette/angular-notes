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
  editNote: Note = new Note(0, '', new Date(), '', '', '', '', 'To Do');
  isExpanded = false;
  changeDetector: any;

  constructor(private noteService: NoteService) {}

  expandNote() {
    this.isExpanded = true;
    const editNoteContainer = document.querySelector('.edit-note-container');
    if (editNoteContainer) {
      editNoteContainer.classList.add('dark-background');
    }
    this.editNote = this.note;
  }

  hideNewNote() {
    this.isExpanded = false;
    const editNoteContainer = document.querySelector('.edit-note-container');
    if (editNoteContainer) {
      editNoteContainer.classList.remove('dark-background');
    }
  }

  saveNote() {
    this.noteService.editNote(this.editNote);
    this.noteEdited.emit(this.editNote);
    this.changeDetector.detectChanges();
  }

  cancelEdit() {
    this.isExpanded = false;
    this.hideNewNote();
    this.changeDetector.detectChanges();
  }
}
