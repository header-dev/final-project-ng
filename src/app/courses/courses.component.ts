import { Component, OnInit } from '@angular/core';
import { CoursesService } from "../shared/model/courses.service";
import { Observable } from "rxjs/Rx";
import { Courses } from "../shared/model/courses";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Courses[]>;

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.courses$ = this.coursesService.findAllCourses();
  }

}