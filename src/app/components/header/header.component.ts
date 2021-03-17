import { UserService} from '../../services/user/user.service';
import {Router} from '@angular/router';
import {MainpageComponent} from 'src/app/components/mainpage/mainpage.component';
@Component({
  selector: 'ngbd-collapse-navbar',
   template: './header.component.html',
   styleUrls: ['./header.component.css']
})
export class NgbdCollapseNavbar {
  public isMenuCollapsed = true;
}
@Component({
  selector: 'ngbd-dropdown-basic',
  template: './dropdown-basic.html',
})
export class NgbdDropdownBasic {
}
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public userService: UserService, private router: Router, public maincomponent: MainpageComponent) {
  }
  tag= "";

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['main']);
  }
  cleartag(){
    localStorage.setItem("tag", "");
  }
  ngOnInit() {
  }
  public isMenuCollapsed = true;
}