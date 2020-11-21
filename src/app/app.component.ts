import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Board } from './board.class';
import { DataService } from './state-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private data:DataService){
    this.data.currentStateNav.subscribe(state => this.ModalIsOpen = state)
  }
  title = 'test';
  ModalIsOpen:boolean;
  boards:Board[]=[new Board("Safari",[],[],""),new Board('Fafari',[],[],"")];
  model:Board=this.boards[0];
  newBoard:Board;
  createBoards(nameBoard){

    this.boards.push(new Board(nameBoard,[],[],""));
    this.openModal();
  }
  onChange(newBoard:any){
this.model=newBoard;
  }
  openModal(){
    this.data.changeStateNav(!this.ModalIsOpen);
  }
}
