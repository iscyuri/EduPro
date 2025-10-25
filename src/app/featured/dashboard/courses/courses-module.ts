import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing-module';
import { Courses } from './courses';
import { CoursesForm } from './courses-form/courses-form';
import { SharedModule } from '../../../shared/shared-module';
import { CoursesList } from './courses-list/courses-list';

@NgModule({
  declarations: [Courses, CoursesList, CoursesForm],
  imports: [CommonModule, CoursesRoutingModule, SharedModule],
})
export class CoursesModule {}