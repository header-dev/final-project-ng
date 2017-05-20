import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { LessonsService } from "app/shared/model/lessons.service";
import { Lesson } from "app/shared/model/lesson";

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {

  lesson: Lesson;

  constructor(private route: ActivatedRoute,
    private lessonsService: LessonsService) {

  }

  ngOnInit() {
    const lessonUrl = this.route.snapshot.params['id'];
    const lesson$ = this.lessonsService.findLessonByUrl(lessonUrl);

    lesson$.do(console.log).subscribe(lessons => this.lesson = lessons);
  }

}
