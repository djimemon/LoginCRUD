import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {CrudService} from "../../services/crud/crud.service";
import {FirestorageService} from "../../services/firestorage/firestorage.service";

@Component({
  selector: 'app-crud-create',
  templateUrl: './crud-create.component.html',
  styleUrls: ['./crud-create.component.css']
})
export class CrudCreateComponent implements OnInit{
  users: User[];

  user: User = {
    name: '',
    password: '',
    email: ''
  };
  constructor(private crudService: CrudService,private firestorageService: FirestorageService) { }

  ngOnInit(): void {
    this.firestorageService.getUsers().subscribe(users => {
      this.users = users;
    })


  }

  createUser(user: User){
    this.firestorageService.getUsers().subscribe(users => {
      var tempID = users.length+1; //TODO si borras y creas se pisan los id
      user.idn=tempID.toString();
      if (user.name!=""){ //TODO preguntar a andres
        this.firestorageService.addUser(user)
      }
      user.name=""
      user.password=""
      user.email="";
    })
  }

}
