import { Pipe, PipeTransform } from '@angular/core';
import { Note } from '../note-card/note';

@Pipe({
  name: 'statusFilter'
})
export class StatusFilterPipe implements PipeTransform {
  transform(notes: Note[], status: string): Note[] {
    return notes.filter(note => note.note_status === status);
  }
}
