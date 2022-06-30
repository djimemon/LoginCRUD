import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login/login.service";
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
    name: '',
    password: '',
    email: ''
  };

  //TODO validar solo correo en email

  constructor(private loginService: LoginService,private firestorageService: FirestorageService, private router: Router) { }

  ngOnInit(): void {
  }

  register(){
    let found = false;
    if (this.password === this.confirmPassword){
      this.firestorageService.getUsers().subscribe(users => {
        for (let i = 0; i < users.length; i++) {
          if (this.username===users[i].name&&this.password===users[i].password&&this.email===users[i].email) {
            //TODO modal usuario ya existe
            found = true
          }
        }
        if (!found){
          var tempID = users.length+1; //TODO si borras y creas se pisan los id
          this.user.idn =tempID.toString();
          this.user.name = this.username;
          this.user.password = this.password;
          this.user.email = this.email;
          this.firestorageService.addUser(this.user)
          this.loginService.login(this.username)
          this.router.navigate(['list'])
          found = true;
        }

      })

    }
  }

  login(){
    this.router.navigate([''])
  }
}
