import { Component, OnInit } from '@angular/core';
import {ShowdialogsService} from 'src/app/services/Showdialogs/Showdialogs.service'

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {
  constructor(public showdialogsService: ShowdialogsService) { }
  ngOnInit(): void {
  }

}
