import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {map, Observable} from "rxjs";
import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  userDoc: AngularFirestoreDocument<User>

  usersRef: AngularFirestoreCollection<User>;
  constructor(private db: AngularFirestore) {
    // this.users = this.db.collection('users').valueChanges();

    this.usersCollection = this.db.collection('users');

    this.users = this.usersCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as User;
        data.id = a.payload.doc.id;
        return data;
      });
    }))
  }

  getUsers(){
    return this.users;
  }

  addUser(user: User){
    this.usersCollection.add(user);
  }

  deleteUser(user: User){
    this.userDoc = this.db.doc(`users/${user.id}`);
    this.userDoc.delete();
  }

}
