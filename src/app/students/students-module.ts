import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Students } from './students';
import { StudentsList } from './componets/students-list/students-list';
import { StudentsForm } from './componets/students-form/students-form';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    Students,
    StudentsList,
    StudentsForm
  ],
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule
]})
export class StudentsModule { }
