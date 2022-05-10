import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user";
import { LoginService } from "../../services/login/login.service";
import { Router} from '@angular/router';
import {CRUDService} from "../../services/CRUD/crud.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  wrongPassword: boolean = false
  users: User[] = [];
  username: string;
  password: string;

  constructor(private loginService: LoginService,private crudService: CRUDService, private router: Router) {}

  ngOnInit(): void {
    if (this.loginService.getLoggedUser())
      // cambiar a constante
      this.router.navigate(['list'])
  }

  checkUser(): void{
    if(!this.loginService.checkUser(this.username, this.password))
      this.launchPasswordModal()
  }

  closePasswordModal(): void{
    this.wrongPassword = false
  }

  launchPasswordModal(): void{
    this.wrongPassword = true
  }

  reloadUSERS(): void{
    this.crudService.uploadUsers();
  }

}
