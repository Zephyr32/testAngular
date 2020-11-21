import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { DataService } from '../state-service.service';


@Component({
  selector: 'app-modal-create-board',
  templateUrl: './modal-create-board.component.html',
  styleUrls: ['./modal-create-board.component.css']
})
export class ModalCreateBoardComponent implements OnInit {
  isOpen:boolean;
  constructor(private data:DataService) {
    data.currentStateNav.subscribe(state=>this.isOpen=state);
   }
  @Output() onCreate = new EventEmitter();
  isEmpty:boolean=true;
  nameBoard:string;
  
  changeText(){
    if(this.nameBoard.trim().length>2){
      this.isEmpty=false;
    }
    else{
      this.isEmpty=true;
    }
  }
  createBoard(){
    this.onCreate.emit(this.nameBoard);
  }
  ngOnInit(): void {
  }
  closeWindow(){
    this.data.changeStateNav(!this.isOpen);
  }

}
