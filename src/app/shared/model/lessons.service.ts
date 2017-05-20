import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { Lesson } from "./lesson";

import { AngularFireDatabase } from "angularfire2/database";
import { FirebaseListFactoryOpts } from "angularfire2/interfaces";

@Injectable()
export class LessonsService {

  constructor(private db: AngularFireDatabase) { }

  findAllLessons(): Observable<Lesson[]> {

    return this.db.list('lessons')
      .do(console.log)
      .map(Lesson.fromJsonList);

  }

  findLessonByUrl(url: string): Observable<Lesson> {

    return this.db.list('lessons', {
      query: {
        orderByChild: 'url',
        equalTo: url
      }
    })
      .filter(results => results && results.length > 0)
      .map(results => Lesson.fromJson(results[0]))
      .do(console.log);

  }

  findLessonKeyPerCourseUrl(courseUrl: string, query: FirebaseListFactoryOpts = {}):Observable<string[]> {
    return
  }
}