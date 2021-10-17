import { Component, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userName!:string;

  @Output() searchUser = new EventEmitter<any>();
    
    search(){
      this.searchUser.emit(this.userName)
      this.userName = ""
    }

  constructor() { }

  ngOnInit(): void {
  }

}
