import { Component, OnInit } from '@angular/core';
import {ShownewsService} from 'src/app/services/Shownews/Shownews.service'
@Component({
  selector: 'app-mainpage',
  template: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})

export class Article{
  id: number = 0;
  source: string ="";
  tags: Array<string> =[];
  author: string = "";
  title: string = "";
  description: string ="";
  coverImage: string="";
  publishedAt: string="";
  content: string="";
  
}
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})

export class MainpageComponent implements OnInit {
  articles: Article[]=[];
  tag1:string="";
  constructor(public showNews: ShownewsService) {
  }
  settag(tag:string){
    this.tag1 = tag;
    localStorage.setItem("tag", this.tag1);
    window.location.reload();
  }
  arr:Array<string> = [];
  checktag(arr:Array<string>){
    for(let i = 0; i < arr.length;i++){
      if(arr[i] == localStorage.getItem("tag") || localStorage.getItem("tag") == "")
      return 1;
    }
    return 0;
  }
  tag2:string|null=""
  localtag(){
    if(localStorage.getItem("tag") != ""){
      this.tag2 = localStorage.getItem("tag")
      return 1;
    }
    else return 0;
  }
  ngOnInit() {
    this.showNews.getnews().subscribe((data:any) => this.articles = data["articles"]);
  }

}
