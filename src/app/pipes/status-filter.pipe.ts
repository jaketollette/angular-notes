import { Pipe, PipeTransform } from '@angular/core';
import { Note } from '../interfaces/note.interface';

@Pipe({
  name: 'statusFilter',
  standalone: true,
})
export class StatusFilterPipe implements PipeTransform {
  transform(notes: Note[], status: string): Note[] {
    return notes.filter(note => note.status === status);
  }
}
