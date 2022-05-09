import { Injectable } from '@angular/core';
import {USERS} from "../../datasets/mock-users";
import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  constructor() { }

  downloadUsers(): User[]{
    return JSON.parse(localStorage.getItem('USERS') || '[]');

  }

  uploadUsers(){
    localStorage.setItem('USERS',JSON.stringify(USERS))
  }
}
