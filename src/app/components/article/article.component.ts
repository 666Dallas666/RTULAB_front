import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {ShownewsService} from 'src/app/services/Shownews/Shownews.service';
import {UserService} from 'src/app/services/user/user.service';
@Component({
  selector: 'app-article',
  template: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class Article{
  source: string = "";
  tags: Array<string> = [];
  author: string = "";
  title: string = "";
  description: string = "";
  coverImage: string= "";
  publishedAt: string= "";
  content: string= "";
}
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private route: ActivatedRoute, private showNews: ShownewsService, public article: Article, public userService: UserService) {
   }
   id:number=1;
  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
  )
  .subscribe(data=> this.id = +data);
  this.showNews.getnews().subscribe((data:any) => this.article = data["articles"][this.id-1]);
}
  
}


