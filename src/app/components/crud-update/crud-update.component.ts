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

  wrongDeleteUser: boolean = false;
  users: User[];
  editState: boolean = false;
  userToEdit: User;

  constructor(private crudService: CrudService, private firestorageService: FirestorageService) { }

  ngOnInit(): void {
    this.firestorageService.getUsers().subscribe(users => {
      this.users = users;
    })

  }

  editUser(event: Event, user: User){
    this.editState = true;
    this.userToEdit = user;
  }

  updateUser(user: User){
    this.firestorageService.updateUser(user)
    this.clearState()
  }

  clearState(){
    this.editState=false;
  }


  delete(user: User): void{

    if (user.name === localStorage.getItem('loggedUser')){
      this.launchPasswordModal()
    }else {
      this.clearState()
      this.firestorageService.deleteUser(user)
    }

  }

  closePasswordModal(): void{
    this.wrongDeleteUser = false
  }

  launchPasswordModal(): void{
    this.wrongDeleteUser = true
  }

}
