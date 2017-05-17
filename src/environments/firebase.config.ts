import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


export const firebaseConfig = {
    apiKey: "AIzaSyB7jPVDLE9StP3ERiVi3lXLNz1umZ3jhEA",
    authDomain: "final-project-ng2.firebaseapp.com",
    databaseURL: "https://final-project-ng2.firebaseio.com",
    projectId: "final-project-ng2",
    storageBucket: "final-project-ng2.appspot.com",
    messagingSenderId: "967965613057"
};




// export const authConfig = {

//   login() {
//     this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
//   }

//   logout() {
//     this.afAuth.auth.signOut();
//   }

    // AngularFireAuth.auth

    // provider: 
    // method: AngularFireAuthModule.
    
// };