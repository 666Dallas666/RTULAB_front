import { Component, OnInit } from '@angular/core';
import {ShowmessagesService} from 'src/app/services/Showmessages/Showmessages.service'

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {
  message: string;
  constructor(public showmessagesService: ShowmessagesService) {
    this.message = "";
   }
  test:string = this.showmessagesService.getMessages()[1][0];
  ngOnInit() {
  }

}