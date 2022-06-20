import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user";
import {FormControl, Validators} from "@angular/forms";
import { LoginService } from "../../services/login/login.service";
import { Router} from '@angular/router';
import {RouterTestingModule} from "@angular/router/testing";
import {CrudService} from "../../services/crud/crud.service";

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

  constructor(private loginService: LoginService, private crudService: CrudService, private router: Router) {}

  ngOnInit(): void {
    if (this.loginService.getLoggedUser())
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
    this.crudService.setUsers();
  }

  test(){
    this.loginService.testGoogle()
  }

}
