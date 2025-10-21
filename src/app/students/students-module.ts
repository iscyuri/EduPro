import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Students } from './students';
import { StudentsList } from './componets/students-list/students-list';
import { StudentsForm } from './componets/students-form/students-form';



@NgModule({
  declarations: [
    Students,
    StudentsList,
    StudentsForm
  ],
  imports: [
    CommonModule
  ]
})
export class StudentsModule { }
