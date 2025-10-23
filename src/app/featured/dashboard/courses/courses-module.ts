import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing-module';
import { Courses } from './courses';
import { CoursesForm } from './courses-form/courses-form';
import { CoursesList } from './courses-list/courses-list';


@NgModule({
  declarations: [
    Courses,
    CoursesForm,
    CoursesList
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }