import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Location} from '@angular/common'
 
@Injectable({
  providedIn: 'root'
})
 
export class UserService {
 
  url = 'http://localhost:5500';
  
  constructor(private http: HttpClient,private router: Router, private _location: Location) { }
  login(login: string, password: string) {
    this.http.post(this.url + '/login', {login: login,password: password})
    .subscribe((resp: any) => {
      this._location.back();
      localStorage.setItem('token', resp.accessToken);
      })
       
    }
    logout() {
      localStorage.removeItem('token');
    }
   
    public get logIn(): boolean {
      return (localStorage.getItem('token') != null);
    }
}