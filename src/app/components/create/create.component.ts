import { Component, OnInit } from '@angular/core';
import {ShownewsService} from 'src/app/services/Shownews/Shownews.service';
import {UserService} from 'src/app/services/user/user.service';
@Component({
  selector: 'app-create',
  template: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class Article2{
  id: number = 0;
  source: string = "";
  tags: string ="";
  author: string = "";
  title: string = "";
  description: string = "";
  coverImage: string= "";
  publishedAt: string= "";
  content: string= "";
}
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(public article: Article2, public userService: UserService,public showNews: ShownewsService,) { }

  ngOnInit() {
  }

}
