import { Component, OnInit, Output } from '@angular/core';
import { Note } from '../note-card/note';
import { NoteService } from '../note-card/note.service';

@Component({
  selector: 'app-note-board',
  templateUrl: './note-board.component.html',
  styleUrls: ['./note-board.component.css']
})
export class NoteBoardComponent implements OnInit {
  notes: Note[] = [];
  newNoteDescription: string = 'new-note';
  @Output() newNote: Note = new Note(1, '', new Date(), '', '', '', '', 'To Do');
  newNoteVisible = false;

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
  }

  showNewNote() {
    this.newNoteVisible = true;
  }
  hideNewNote() {
    this.newNoteVisible = false;
  }

  addNote() {
    const newNote = new Note(
      this.notes.length + 1,
      this.newNoteDescription,
      new Date(),
      '',
      '',
      '',
      '',
      'To Do'
    );
    this.notes.push(newNote);
    this.newNoteDescription = '';
  }

  showStuff($event: any) {
    console.log($event)
  }
}
