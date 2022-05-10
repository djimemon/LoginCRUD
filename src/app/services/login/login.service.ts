import {Injectable} from '@angular/core';
import {User} from "../../models/user";
import {CRUDService} from "../CRUD/crud.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedUser: User;


  constructor(private crudService: CRUDService,private router: Router) {}

  checkUser(username: string, password: string): boolean{
    let users = this.crudService.downloadUsers()

    for (let i = 0; i < users.length; i++) {
      if (username==users[i].name&&password==users[i].password) {
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
  }

  getLoggedUser(): string | null{
    return localStorage.getItem('loggedUser')

  }
}
