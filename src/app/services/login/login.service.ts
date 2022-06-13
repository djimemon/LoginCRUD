import {Injectable} from '@angular/core';
import {User} from "../../models/user";
import {Router} from '@angular/router';
import {CrudService} from "../crud/crud.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedUser: User;
  users: User[];


  constructor(private crudService: CrudService, private router: Router) {}

  checkUser(username: string, password: string): boolean{
    this.users = this.crudService.getUsers()

    for (let i = 0; i < this.users.length; i++) {
      if (username===this.users[i].name&&password===this.users[i].password) {
        this.login(username)
        this.router.navigate(['list'])
        return true
      }
    }
    return false
  }



  login(username: string): void{
      localStorage.setItem('loggedUser', username)
  }

  logout(): void{
      localStorage.removeItem('loggedUser')
    console.log(this.getLoggedUser())
  }

  getLoggedUser(): string | null{
    return localStorage.getItem('loggedUser')
  }
}
