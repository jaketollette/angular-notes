import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent {
  @Input() note?: Note;
  @Output() onDeleteNote = new EventEmitter<number>();

  deleteNote() {
    if (confirm("DELETE?") != true) {
      return;
    } else {
      this.onDeleteNote.emit(this.note?.note_id);
    }
  }

}
