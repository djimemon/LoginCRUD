import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../services/login/login.service";

import {User} from "../../models/user";
import {CRUDService} from "../../services/CRUD/crud.service";

@Component({
  selector: 'app-crud-display',
  templateUrl: './crud-display.component.html',
  styleUrls: ['./crud-display.component.css']
})
export class CRUDDisplayComponent implements OnInit {


  users: User[];

  constructor(private crudService: CRUDService) { }

  ngOnInit(): void {
    this.users = this.crudService.downloadUsers();
  }

}
