import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {CrudService} from "../../services/crud/crud.service";
import {FirestorageService} from "../../services/firestorage/firestorage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crud-create',
  templateUrl: './crud-create.component.html',
  styleUrls: ['./crud-create.component.css']
})
export class CrudCreateComponent implements OnInit{
  users: User[];

  user: User = {
    name: '',
    password: ''
  };
  constructor(private crudService: CrudService,private firestorageService: FirestorageService, private router: Router) { }

  ngOnInit(): void {
    this.firestorageService.getUsers().subscribe(users => {
      this.users = users;
    })


  }

  createUser(user: User){
    // user.id = this.crudService.getUsers().length.toString()
    // this.crudService.createNewUser(user)
    // this.router.navigate(['list'])
    this.firestorageService.addUser(user)
    user.name=""
    user.password=""
  }

}
