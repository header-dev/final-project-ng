import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { Courses } from "./courses";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class CoursesService {

  constructor(private af: AngularFireDatabase) { }

  findAllCourses(): Observable<Courses[]> {
    return this.af.list('courses')
      .map(Courses.fromJsonArray);
  }

}
