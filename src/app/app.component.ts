import { Component } from '@angular/core';
import { initializeApp, database } from 'firebase';
import 'rxjs/add/operator/map';
import { firebaseConfig } from "../environments/firebase.config";
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app works!';



  courses$: FirebaseListObservable<any>;
  lesson$: FirebaseObjectObservable<any>;
  firstCourse: any;

  constructor(private af: AngularFireDatabase) {

    this.courses$ = af.list('courses');
    this.courses$.subscribe(console.log);


    this.lesson$ = af.object('lessons/-Kk-Rvb6TEG06rnqfKEJ');
    this.lesson$.subscribe(console.log);

    this.courses$.map(courses => courses[0])
      .subscribe(
      course => this.firstCourse = course
      );
  }


  listPush() {
    this.courses$.push({ description: 'TEST NEW COURSES' })
      .then(
      () => console.log('List Push Done'),
      console.error
      );
  }

  listRemove() {
    this.courses$.remove(this.firstCourse);
  }

  listUpdate() {
    this.courses$.update(this.firstCourse, {
      description: 'Angular 2 HTTP Modified'
    }
    );
  }

  objUpdate() {
    this.lesson$.update({ description: 'NEW DESCRIPTION' });
  }

  objSet() {
    this.lesson$.set({ description: 'NEW DESCRIPTION' });
  }

  objRemove() {
    this.lesson$.remove();
  }


}
