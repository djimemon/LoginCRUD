import { Component, OnInit } from '@angular/core';

import {User} from "../../models/user";
import {CrudService} from "../../services/crud/crud.service";
import {FirestorageService} from "../../services/firestorage/firestorage.service";

@Component({
  selector: 'app-crud-display',
  templateUrl: './crud-display.component.html',
  styleUrls: ['./crud-display.component.css']
})
export class CrudDisplayComponent implements OnInit {


  users: User[];

  constructor(private crudService: CrudService, private firestorageService: FirestorageService) { }

  ngOnInit(): void {
    this.firestorageService.getUsers().subscribe(users => {
      this.users = users;
    })
  }

}
