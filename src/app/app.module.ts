import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { NoteBoardComponent } from './note-board/note-board.component';
import { StatusFilterPipe } from './note-board/status-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NoteCardComponent,
    NoteBoardComponent,
    StatusFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
