import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {CrudService} from "../../services/crud/crud.service";
import {FirestorageService} from "../../services/firestorage/firestorage.service";

@Component({
  selector: 'app-crud-update',
  templateUrl: './crud-update.component.html',
  styleUrls: ['./crud-update.component.css']
})
export class CrudUpdateComponent implements OnInit {

  users: User[];
  constructor(private crudService: CrudService, private firestorageService: FirestorageService) { }

  ngOnInit(): void {
    this.firestorageService.getUsers().subscribe(users => {
      this.users = users;
    })
  }

  save(user: User): void{
    this.crudService.saveUser(user)
    console.log(user.name + " " + user.password)
  }

  //TODO si es el propio usuario no dejar borrar y sacar un modal para confirmar
  delete(user: User): void{
    // this.crudService.removeUserById(user)
    this.firestorageService.deleteUser(user)
    // window.location.reload()
  }

}
