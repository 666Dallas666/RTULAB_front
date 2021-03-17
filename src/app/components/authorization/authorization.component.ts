import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { UserService} from '../../services/user/user.service';
 
@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  login = '';
  password = '';
   
  constructor(private userService: UserService) {
  }
  displayElement: boolean = false;
  Login() {
  this.userService.login(this.login, this.password);
  if (localStorage.getItem('token') == null){
    this.displayElement = true; 
  }
  }
 
  ngOnInit() { }
}