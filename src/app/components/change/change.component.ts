import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {ShownewsService} from 'src/app/services/Shownews/Shownews.service';
import {UserService} from 'src/app/services/user/user.service';
@Component({
  selector: 'app-article',
  template: './article.component.html',
  styleUrls: ['./change.component.css']
})
export class Article1{
  id: number = 0;
  source: string = "";
  tags: string = "";
  author: string = "";
  title: string = "";
  description: string = "";
  coverImage: string= "";
  publishedAt: string= "";
  content: string= "";
}
@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {
  id:number=1;
  constructor(private route: ActivatedRoute, public showNews: ShownewsService, public article: Article1, public userService: UserService,) { }
  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
  )
  .subscribe(data=> this.id = +data);
  this.showNews.getnews().subscribe((data:any) => this.article = data["articles"][this.id-1]);
}
}