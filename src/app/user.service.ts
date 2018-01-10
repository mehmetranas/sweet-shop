import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from "angularfire2/database";
import * as firebase from 'firebase';
import {AngularFireAuth} from "angularfire2/auth";
import {UserModel} from "./models/user.model";
import {Observable} from "rxjs/Observable";
import {FirebaseObjectObservable} from "angularfire2/database-deprecated";
import {equal} from "assert";

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) {

  }

  public save(user: firebase.User){
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  get(uid: string): Observable<UserModel | null>{
    return this.db.object<UserModel>('/users/' + uid).valueChanges();
  }
}
