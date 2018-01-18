import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import * as firebase from 'firebase';
import {Observable} from "rxjs/Observable";

import {UserModel} from "shared/models/user.model";

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

  public get(uid: string): Observable<UserModel | null>{
    return this.db.object<UserModel>('/users/' + uid).valueChanges();
  }

  public user$(){
    return firebase.auth().currentUser;
  }
}
