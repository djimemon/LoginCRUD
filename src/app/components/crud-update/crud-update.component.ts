import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {CRUDService} from "../../services/CRUD/crud.service";

@Component({
  selector: 'app-crud-update',
  templateUrl: './crud-update.component.html',
  styleUrls: ['./crud-update.component.css']
})
export class CRUDUpdateComponent implements OnInit {

  users: User[];
  constructor(private crudService: CRUDService) { }

  ngOnInit(): void {
    this.users = this.crudService.downloadUsers();
  }

  save(user: User): void{
    this.crudService.saveUser(user)
    console.log(user.name + " " + user.password)
  }

  //TODO si es el propio usuario no dejar borrar y sacar un modal para confirmar
  delete(user: User): void{
    this.crudService.removeUserById(user)
    window.location.reload()
  }

}
