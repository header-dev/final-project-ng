import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Lesson } from "app/shared/model/lesson";
import { Observable } from "rxjs/Rx";
import { LessonsService } from "app/shared/model/lessons.service";


@Injectable()
export class LessonResolver implements Resolve<Lesson>{

    constructor(private lessonsService: LessonsService) {

    }


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<Lesson> {
        return this.lessonsService.
            findLessonByUrl(route.params['id'])
            .first();
    }

}