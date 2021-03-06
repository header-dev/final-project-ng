import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from "rxjs/Rx";
import { AngularFireAuth } from "angularfire2/auth";
import { AuthInfo } from "app/shared/security/auth-info";
import { Router } from "@angular/router";
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  static UNKNOW_USER = new AuthInfo(null);

  authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthService.UNKNOW_USER);

  constructor(private afAuth: AngularFireAuth, private router:Router) { }

  login(email, password): Observable<AuthInfo> {

    return this.fromFirebaseAuthPromise(this.afAuth.auth.signInWithEmailAndPassword(email,password));

  }

  signUp(email, password) {
    return this.fromFirebaseAuthPromise(this.afAuth.auth.createUserWithEmailAndPassword( email, password));
  }

  fromFirebaseAuthPromise(promise): Observable<any> {

    const subject = new Subject<any>();

    promise
      .then(
      res => {
        const authInfo = new AuthInfo(this.afAuth.auth.currentUser.uid);
        this.authInfo$.next(authInfo);
        subject.next(res);
        subject.complete();
      },
      err => {
        this.authInfo$.error(err);
        subject.error(err);
        subject.complete();
      });

    return subject.asObservable();
  }

  logout() {
    this.afAuth.auth.signOut();
    this.authInfo$.next(AuthService.UNKNOW_USER);
    this.router.navigate(['/home']);
  }


}
