import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Note } from '../note-card/note';
import { NoteService } from '../services/note/note.service';

@Component({
  selector: 'app-note-board',
  templateUrl: './note-board.component.html',
  styleUrls: ['./note-board.component.css']
})
export class NoteBoardComponent implements OnInit {
  notes: Note[] = [];
  todo: Note[] = [];
  done: Note[] = [];
  doing: Note[] = [];
  review: Note[] = [];
  @Input() status!: string;

  constructor(public noteService: NoteService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.todo = this.noteService.getNotesByStatus('To Do');
    this.doing = this.noteService.getNotesByStatus('Doing');
    this.review = this.noteService.getNotesByStatus('Review');
    this.done = this.noteService.getNotesByStatus('Done');

    this.notes = [...this.todo, ...this.doing, ...this.review, ...this.done];

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

  onDrop(event: CdkDragDrop<Note[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const toStatus = event.container.id;
      const note = event.item.data;
      this.noteService.updateNoteStatus(note, toStatus);
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

}
