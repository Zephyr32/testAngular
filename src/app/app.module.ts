import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { ModalCreateBoardComponent } from './modal-create-board/modal-create-board.component';
import  {DataService} from './state-service.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ModalCreateBoardComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [DataService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
