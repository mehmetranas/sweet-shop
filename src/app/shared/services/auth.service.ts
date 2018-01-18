import { Injectable } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from "firebase/app";
import {Observable} from "rxjs/Observable";

import {UserService} from "shared/services/user.service";
import {UserModel} from "shared/models/user.model";

@Injectable()
export class LoginService {
  public user$: Observable<firebase.User>;


  constructor(public af: AngularFireAuth, private userService: UserService) {
    this.user$ = af.authState
  }

  public loginByGoogle(){
    return this.af.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )}

  public logout(){
     this.af.auth.signOut();
  }

  get currentUser$(): Observable<UserModel | null>{
    return this.user$
      .switchMap(user => user?this.userService.get(user.uid): Observable.of(null))
 }

}
