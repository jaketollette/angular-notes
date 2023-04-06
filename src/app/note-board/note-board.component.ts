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

  toDoNotesHidden = false;
  doingNotesHidden = false;
  reviewNotesHidden = false;
  doneNotesHidden = false;

  constructor(private noteService: NoteService, private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();

    this.noteService.noteAdded.subscribe((newNote: Note) => {
      this.onNoteAdded(newNote);
    });
    this.noteService.noteDeleted.subscribe((note_id: number) => {
      this.onNoteDeleted(note_id);
    });
  }

  onNoteAdded(newNote: Note) {
    this.noteService.addNote(newNote);
    this.notes = this.noteService.getNotes();
    this.changeDetector.detectChanges();
  }

  onNoteDeleted(note_id: number) {
    this.notes = this.notes.filter(note => note.note_id !== note_id);
  }

  toggleNotes(container: string) {
    const noteContainer = document.querySelector(`.note-container.${container}`);
    if (noteContainer) {
      const noteList = noteContainer.querySelector('.note-list');
      if (noteList) {
        noteList.classList.toggle('hidden');
        // Get the button element inside the note container
        const toggleButton = noteContainer.querySelector('button');
        if (toggleButton) {
          // Update the inner text of the button
          toggleButton.innerText = noteList.classList.contains('hidden') ? 'Show Notes' : 'Hide Notes';
        }
      }
    }
  }

}
