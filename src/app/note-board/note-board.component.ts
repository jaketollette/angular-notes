import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Note } from '../note-card/note';
import { NoteService } from '../note-card/note.service';

@Component({
  selector: 'app-note-board',
  templateUrl: './note-board.component.html',
  styleUrls: ['./note-board.component.css']
})
export class NoteBoardComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService, private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
  }

  onNoteAdded(newNote: Note) {
    this.notes.push(newNote);
    this.changeDetector.detectChanges();
    this.notes = [...this.notes];
  }
}
