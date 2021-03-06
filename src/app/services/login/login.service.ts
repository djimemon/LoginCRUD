import {Injectable} from '@angular/core';
import {User} from "../../models/user";
import {Router} from '@angular/router';
import {CrudService} from "../crud/crud.service";
import {FirestorageService} from "../firestorage/firestorage.service";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})
export class LoginService {  //TODO no dejar registrar lo ya existente

  loggedUser: User;
  users: User[];
  provider = new GoogleAuthProvider();
  user: User = {
    name:'',
    email:'',
  }



  constructor(private crudService: CrudService,private firestorageService: FirestorageService, private router: Router) {}

  checkUser(username: string, password: string): boolean{

    this.firestorageService.getUsers().subscribe(users => {
      for (let i = 0; i < users.length; i++) {
        if ((username===users[i].name&&password===users[i].password) || (username===users[i].email&&password===users[i].password)) {
          this.login(users[i].name)
          this.router.navigate(['list'])
          return true
        }
      }
      return false;
    })

    return true; //TODO preguntar andres subscribeq
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

  loginGoogle(){
    const auth = getAuth();
    signInWithPopup(auth, this.provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // @ts-ignore
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        if (user.displayName != null) {
          if (user.email != null) {
            this.checkGoogleUser(user.displayName,user.email)
          }
        }

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

  checkGoogleUser(username: string, email: string){
    let found = false;
    this.firestorageService.getUsers().subscribe(users => {
      for (let i = 0; i < users.length; i++) {
        if (username===users[i].name&&email===users[i].email) {
          this.login(username)
          this.router.navigate(['list'])
          found = true
        }
      }
      if (!found){
        this.registerGoogleUser(username, email)
        this.login(username)
        found = true;
      }


    })
  }

  registerGoogleUser(name: string , mail: string,){
    let tempUser: User = {
      name:name,
      password:'GOOGLE',
      email:mail,
    }
    this.firestorageService.getUsers().subscribe(users => { //TODO bucle hasta que encuentre un hueco?
      var tempID = users.length+1; //TODO si borras y creas se pisan los id
      tempUser.idn=tempID.toString();
      if (tempUser.name!=""){ //TODO preguntar a andres
        this.firestorageService.addUser(tempUser)
      }
      tempUser.name="";
    })
  }
}
