import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {CRUDService} from "../../services/CRUD/crud.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crud-create',
  templateUrl: './crud-create.component.html',
  styleUrls: ['./crud-create.component.css']
})
export class CRUDCreateComponent implements OnInit {
  user: User = {
    id: 0,
    name: '',
    password: ''
  };
  constructor(private crudService: CRUDService, private router: Router) { }

  ngOnInit(): void {
  }

  createUser(user: User):void{ //TODO check for user input
    user.id = this.crudService.downloadUsers().length
    this.crudService.createNewUser(user)
    this.router.navigate(['list'])
  }

}
