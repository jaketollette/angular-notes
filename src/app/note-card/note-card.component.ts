import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Note } from './note';
import { NoteService } from './note.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent {
  @Input() note!: Note;
  @Output() onDeleteNote = new EventEmitter<number>();
  isExpanded = false;

  constructor(private noteService: NoteService, private changeDetector: ChangeDetectorRef) {}

  deleteNote(note_id: Number) {
    if (confirm("DELETE?") != true) {
      return;
    } else {
      this.onDeleteNote.emit(this.note?.note_id);
      this.noteService.deleteNote(this.note.note_id);
    }
  }

  expandNote() {
    this.isExpanded = !this.isExpanded;
  }

}
