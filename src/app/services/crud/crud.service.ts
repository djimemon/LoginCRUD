import {Injectable, OnInit} from '@angular/core';
import {USERS} from "../../datasets/mock-users";
import {User} from "../../models/user";
import {FirestorageService} from "../firestorage/firestorage.service";


@Injectable({
  providedIn: 'root'
})
export class CrudService {



  constructor(private firestorageService: FirestorageService) {}


  getUsers(): User[]{
    return JSON.parse(localStorage.getItem('USERS') || '[]');

  }

  setUsers(){
    localStorage.setItem('USERS',JSON.stringify(USERS))
  }

  updateUsers(users: User[]): void{
    localStorage.setItem('USERS',JSON.stringify(users))
  }

  updateUserById(user: User, users: User[]): User[]{
    for (let i = 0; i < users.length; i++) {
      if (user.id == users[i].id){
        users[i].name = user.name
        users[i].password = user.password
      }
    }
    return users
  }

  saveUser(user: User): void{
    let users = this.updateUserById(user, this.getUsers())

    this.updateUsers(users)

  }

  removeUserById(user: User){
    let users = this.getUsers()

    // users.splice(user.id)

    this.updateUsers(users)
  }

  createNewUser(user: User):void{
    let users = this.getUsers()
    users.push(user)
    this.updateUsers(users)

  }

  clearLocalStorage():void{
    localStorage.clear();
  }


}
