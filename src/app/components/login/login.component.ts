import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user";
import { LoginService } from "../../services/login/login.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[] = [];
  username: string;
  password: string;

  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (this.loginService.getLoggedUser())
      this.router.navigate(['list'])
  }

  checkUser(): void{
    this.loginService.checkUser(this.username, this.password);
  }

}
