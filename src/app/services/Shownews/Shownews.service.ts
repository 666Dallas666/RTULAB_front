import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Location} from '@angular/common'
 
@Injectable({
  providedIn: 'root'
})
export class Article1{
  id: number = 0;
  source: string = "";
  tags: string= "";
  author: string = "";
  title: string = "";
  description: string = "";
  coverImage: string= "";
  publishedAt: string= "";
  content: string= "";
}
@Injectable({
  providedIn: 'root'
})
export class ShownewsService {
  url = 'http://localhost:5500';
  token:string="";
  constructor(private http: HttpClient,private router: Router, private _location: Location) { }
  getnews(){
     return this.http.get(this.url + '/db', {})
     
  }
  changearticle(article: Article1){
    const headers ={'authorization': 'Bearer ' + localStorage.getItem('token'), 'Content-Type': 'application/json'}
    this.http.put(this.url+'/articles/'+[article.id],{
      "id": article.id,
      "source": article.source,
      "tags":article.tags.split(", "),
      "author":article.author,
      "title":article.title,
      "description":article.description,
      "coverImage": article.coverImage,
      "publishedAt" : article.publishedAt,
      "content" : article.content
    }, {headers})
    .subscribe((resp: any) => (
      this._location.back())
  );
}
createarticle(article:Article1){
  const headers ={'authorization': 'Bearer ' + localStorage.getItem('token'), 'Content-Type': 'application/json'}
    this.http.post(this.url+'/articles/',{
      "id": article.id,
      "source": "none",
      "tags":article.tags.split(", "),
      "author":article.author,
      "title":article.title,
      "coverImage": article.coverImage,
      "publishedAt" : Date.now().toString(),
      "content" : article.content,
      "description":article.content
    }, {headers})
    .subscribe((resp: any) => (
      this._location.back())
  );
}
}