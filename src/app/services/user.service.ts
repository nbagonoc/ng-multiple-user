import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database";
import * as firebase from "firebase";
import { AppUser } from "../models/app-user";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private angularFireDatabase: AngularFireDatabase) {}

  save(user: firebase.User) {
    this.angularFireDatabase.object("/users/" + user.uid).update({
      name: user.displayName,
      email: user.email,
      photo: user.photoURL
    });
  }
  get(uid: string): Observable<any> {
    return this.angularFireDatabase.object("/users/" + uid).valueChanges();
  }
}
