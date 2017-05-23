import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Lesson } from "app/shared/model/lesson";
import { LessonsService } from "app/shared/model/lessons.service";

@Component({
  selector: 'edit-lesson',
  templateUrl: './edit-lesson.component.html',
  styleUrls: ['./edit-lesson.component.css']
})
export class EditLessonComponent implements OnInit {

  lesson: Lesson;

  constructor(private route: ActivatedRoute,private lessonsService:LessonsService) {

    route.data
      .do(console.log)
      .subscribe(
      data => this.lesson = data['lesson']
      );

  }

  ngOnInit() {

  }

  save(lesson){
    this.lessonsService.saveLesson(this.lesson.$key,lesson).
    subscribe(
      ()=>{
        alert('lesson saved successfully.');
      },
      err=>alert(`error saving lesson ${err}`)
    )
  }

}