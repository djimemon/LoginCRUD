import {Injectable} from '@angular/core';
import {User} from "../../models/user";
import {USERS} from "../../datasets/mock-users";
import {ActivatedRoute, Router} from '@angular/router';
import {CRUDService} from "../CRUD/crud.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedUser: User;


  constructor(private crudService: CRUDService,private router: Router, private route: ActivatedRoute) {}

  checkUser(username: string, password: string): boolean{ //TODO mostrar alerta con login fallido y rehacer funcion para simplificar
    let users = this.crudService.downloadUsers()

    for (let i = 0; i < users.length; i++) {
      if (username==users[i].name&&password==users[i].password) {

        console.log("USUARIO CORRECTO")
        this.login(username)
        this.router.navigate(['list'])
        return true
      }
    }
    console.log("USUARIO INCORRECTO")
    console.log(username)
    console.log(password)
    return false
  }

  login(username: string): void{
      localStorage.setItem('loggedUser', username)
  }

  logout(): void{
      localStorage.removeItem('loggedUser')
  }

  getLoggedUser(): string | null{
    return localStorage.getItem('loggedUser')

  }
}
