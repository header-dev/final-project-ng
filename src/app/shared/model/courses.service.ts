import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { Courses } from "./courses";
import { AngularFireDatabase } from "angularfire2/database";
import { Lesson } from "app/shared/model/lesson";
import { FirebaseListFactoryOpts } from "angularfire2/interfaces";

@Injectable()
export class CoursesService {

  constructor(private db: AngularFireDatabase) { }

  findAllCourses(): Observable<Courses[]> {
    return this.db.list('courses')
      .map(Courses.fromJsonArray);
  }

  findCourseByUrl(courseUrl: string): Observable<Courses> {
    return this.db.list('courses', {
      query: {
        orderByChild: 'url',
        equalTo: courseUrl
      }
    })
      .map(results => results[0]);
  }

  findLessonKeysPerCourseUrl(courseUrl: string,
    query: FirebaseListFactoryOpts = {}): Observable<string[]> {

    return this
      .findCourseByUrl(courseUrl)
      .filter(course => !!course)
      .switchMap(course => this.db.list(`lessonsPerCourse/${course.$key}`, query))
      .map(lspc => lspc.map(lpc => lpc.$key));

  }

  findLessonsForLessonKeys(lessonKey$: Observable<string[]>): Observable<Lesson[]> {
    return lessonKey$
      .map(lspc => lspc.map(lessonKey => this.db.object('lessons/' + lessonKey)))
      .flatMap(fbojs => Observable.combineLatest(fbojs));
  }


  findLessonsForCourse(courseUrl: string): Observable<Lesson[]> {

    return this.findLessonsForLessonKeys(this.findLessonKeysPerCourseUrl(courseUrl));

  }

  loadFirstLessonsPage(courseUrl: string, pageSize: number): Observable<Lesson[]> {

    const firstPageLessonKey$ = this.findLessonKeysPerCourseUrl(courseUrl,
      {
        query: {
          limitToFirst: pageSize
        }
      });

    return this.findLessonsForLessonKeys(firstPageLessonKey$);

  }

  loadNextPage(courseUrl: string, lessonKey: string, pageSize: number): Observable<Lesson[]> {

    const lessonKey$ = this.findLessonKeysPerCourseUrl(courseUrl,
      {
        query: {
          orderByKey: true,
          startAt: lessonKey,
          limitToFirst: pageSize + 1
        }
      });


    return this.findLessonsForLessonKeys(lessonKey$)
      .map(lessons => lessons.slice(1, lessons.length));

  }

  loadPreviousPage(courseUrl: string, lessonKey: string, pageSize: number): Observable<Lesson[]> {

    const lessonKey$ = this.findLessonKeysPerCourseUrl(courseUrl,
      {
        query: {
          orderByKey: true,
          endAt: lessonKey,
          limitToLast: pageSize + 1
        }
      });


    return this.findLessonsForLessonKeys(lessonKey$)
      .map(lessons => lessons.slice(0, lessons.length - 1));

  }

}