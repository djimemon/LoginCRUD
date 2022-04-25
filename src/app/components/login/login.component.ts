import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user";
import { LoginService } from "../../services/login/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User[] = [];
  username: String;
  password: String;
  constructor(private loginService: LoginService) { }

  getUsers(): void{
    this.users = this.loginService.getUsers();
  }

  ngOnInit(): void {
    this.getUsers();
  }

  checkUser(): boolean{

    for (let i = 0; i < this.users.length; i++) {
      if (this.username==this.users[i].name&&this.password==this.users[i].password) { //TODO añadir al localstorage y validacion
        console.log("USUARIO CORRECTO")
        return true
      }
    }
    console.log("USUARIO INCORRECTO")
    return false
  }

}
