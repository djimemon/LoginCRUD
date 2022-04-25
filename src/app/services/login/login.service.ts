import { Injectable } from '@angular/core';
import {User} from "../../models/user";
import { USERS } from "../../datasets/mock-users";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  getUsers(): User[]{
    return USERS;
  }
  constructor() { }
}
