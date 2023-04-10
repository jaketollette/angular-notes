import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, switchMap, tap } from 'rxjs';
import { Note } from '../../interfaces/note.interface';
import { NoteService } from './note.service';

interface StoreState {
  notes: Note[],
  selectedNote: Note,
}

@Injectable({
  providedIn: 'root'
})
export class NoteStore extends ComponentStore<StoreState> {
  public readonly notes$ = this.select(state => state.notes);
  public readonly selected$ = this.select(state => state.selectedNote);

  public readonly fetchNotes = this.effect((_: Observable<void>) =>
    _.pipe(
      switchMap(() => this.noteService.getNotes()),
      tapResponse(
        (notes) => this.updateNotes(notes),
        (err) => console.error(err)
      )
    ));

  public readonly deleteNote = this.effect((id: Observable<string>) =>
    id.pipe(
      tap(() => console.log('here')),
      tapResponse(
        (id) => {
          const currentNotes = this.get().notes;
          this.noteService.deleteNote(id);
          console.log('currentNotes', {
            storeNotes: currentNotes,
            onlyIds: currentNotes.map(n => n.id),
            selectedId: id,
            found: currentNotes.map(n => n.id).includes(id)
          })
          this.updateNotes(currentNotes.filter(n => n.id !== id));
        },
        (err) => console.error(err)
      )
    ))

  public readonly selectNote = this.effect((note: Observable<Note>) =>
    note.pipe(
      tapResponse(
        (note) => this.updateSelectedNote(note),
        (err) => console.error(err)
      )
    ));

  private readonly updateNotes = this.updater((state, notes: Note[]) => ({
    ...state,
    notes
  }));

  private readonly updateSelectedNote = this.updater((state, selectedNote: Note) => ({
    ...state,
    selectedNote
  }));

  constructor(private readonly noteService: NoteService) {
    super({
      notes: [],
      selectedNote: {} as Note
    })
    console.log('id', Math.random())
  }
}
