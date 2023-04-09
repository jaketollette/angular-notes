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
  isExpanded = false;

  constructor(private noteService: NoteService, private changeDetector: ChangeDetectorRef) {}

  deleteNote() {
    if (confirm("DELETE?") != true) {
      return;
    } else {
      this.noteService.noteDeleted.emit(this.note.note_id);
      this.noteService.deleteNote(this.note.note_id);
    }
  }

  editNotePush() {
    this.noteService.editNotePushed.emit(this.note);
  }


  expandNote() {
    this.isExpanded = !this.isExpanded;
  }

  daysUntilDue(due_date: Date) {
    return this.noteService.calculateDaysUntilDue(due_date);
  }

}
