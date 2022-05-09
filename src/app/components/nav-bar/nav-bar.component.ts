import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login/login.service";
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  username: String | null;

  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let loggedUser = this.loginService.getLoggedUser();
    if (loggedUser)
      this.username = loggedUser;
    else
      this.router.navigate([''])
  }

  logout(): void{
    this.loginService.logout();
  }

}
