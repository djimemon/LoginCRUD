import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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

}
