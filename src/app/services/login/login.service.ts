import {Injectable} from '@angular/core';
import {User} from "../../models/user";
import {Router} from '@angular/router';
import {CrudService} from "../crud/crud.service";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedUser: User;
  users: User[];
  provider = new GoogleAuthProvider();


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
  }

  getLoggedUser(): string | null{
    return localStorage.getItem('loggedUser')
  }

  testGoogle(){
    const auth = getAuth();
    signInWithPopup(auth, this.provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // @ts-ignore
        const token = credential.accessToken;
        console.log(token)
        // The signed-in user info.
        const user = result.user;
        console.log(user)
        // ...
      }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }
}
