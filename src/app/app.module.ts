import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

import { LessonsService } from "./shared/model/lessons.service";
import { CoursesService } from "./shared/model/courses.service";

import { firebaseConfig } from "../environments/firebase.config";
import { AngularFireModule } from "angularfire2/index";
// import { AngularFireDatabaseModule } from "angularfire2";
// import { AngularFireAuthModule } from "angularfire2";
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { RouterModule } from "@angular/router";
import { routerConfig } from "app/router.config";
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';
import { SafeUrlPipe } from './shared/security/safe-url.pipe';
import { NewLessonComponent } from './new-lesson/new-lesson.component';
import { LessonFormComponent } from './lesson-form/lesson-form.component';
import { EditLessonComponent } from './edit-lesson/edit-lesson.component';
import { LessonResolver } from "app/shared/model/lessons.resolver";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LessonsListComponent,
    TopMenuComponent,
    CoursesComponent,
    CourseDetailComponent,
    LessonDetailComponent,
    SafeUrlPipe,
    NewLessonComponent,
    LessonFormComponent,
    EditLessonComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    FormsModule,
    HttpModule,
    // AngularFireDatabaseModule,
    // AngularFireAuthModule,
    RouterModule.forRoot(routerConfig),
    ReactiveFormsModule
  ],
  providers: [LessonsService, CoursesService, LessonResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }