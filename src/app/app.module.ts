import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { LessonsService } from "./shared/model/lessons.service";

import { firebaseConfig } from "../environments/firebase.config";
import { AngularFireModule } from "angularfire2/index";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { LessonsListComponent } from './lessons-list/lessons-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LessonsListComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [LessonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }