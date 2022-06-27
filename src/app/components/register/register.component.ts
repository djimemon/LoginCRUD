import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login/login.service";
import {CrudService} from "../../services/crud/crud.service";
import {FirestorageService} from "../../services/firestorage/firestorage.service";
import {Router} from "@angular/router";
import {User} from "../../models/user";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  user: User = {
    id: '',
    name: '',
    password: '',
    email: ''
  };

  //TODO validar solo correo en email

  constructor(private loginService: LoginService,private firestorageService: FirestorageService, private router: Router) { }

  ngOnInit(): void {
  }

  register(){
    if (this.password === this.confirmPassword){
      //TODO comprobar que no existe el usuario
      this.user.id = '1';
      this.user.name = this.username;
      this.user.password = this.password;
      this.user.email = this.email;

      this.firestorageService.addUser(this.user)
    }
  }

  login(){
    this.router.navigate([''])
  }
}
