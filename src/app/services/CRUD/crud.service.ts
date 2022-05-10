import { Injectable } from '@angular/core';
import {USERS} from "../../datasets/mock-users";
import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  user: User
  constructor() { }

  downloadUsers(): User[]{
    return JSON.parse(localStorage.getItem('USERS') || '[]');

  }

  uploadUsers(){
    localStorage.setItem('USERS',JSON.stringify(USERS))
  }

  updateUsers(users: User[]): void{
    localStorage.setItem('USERS',JSON.stringify(users))
  }

  saveUser(user: User): void{
    let users = this.updateUserById(user, this.downloadUsers())

    this.updateUsers(users)

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

  removeUserById(user: User){
    let users = this.downloadUsers()

    users.splice(user.id)

    this.updateUsers(users)
  }

  createNewUser(user: User):void{
    let users = this.downloadUsers()
    users.push(user)
    this.updateUsers(users)

  }

  clearLocalStorage():void{
    localStorage.clear();
  }


}
