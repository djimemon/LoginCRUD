import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login/login.service";


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  username: String | null;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    let loggedUser = this.loginService.getLoggedUser();
    if (loggedUser)
      this.username = loggedUser;
  }

  logout(): void{
    this.loginService.logout();
  }

}
