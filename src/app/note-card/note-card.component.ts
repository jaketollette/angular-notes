import { Component, Input } from '@angular/core';
import { Note } from '../interfaces/note.interface';
import { NoteService } from '../services/note/note.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent {
  @Input() note!: Note;
  isExpanded = false;

  constructor(private readonly noteService: NoteService) { }

  deleteNote() {
    if (confirm("DELETE?")) {
      this.noteService.noteDeleted.emit(this.note.id);
      this.noteService.deleteNote(this.note.id);
    }
  }

  editNotePush() {
    this.noteService.editNotePushed.emit(this.note);
  }


  expandNote() {
    this.isExpanded = !this.isExpanded;
  }

}
