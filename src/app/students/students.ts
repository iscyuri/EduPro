import { Component } from '@angular/core';
import { Student } from './interface/Student'; 



@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.html',
  styleUrl: './students.css'
})
export class Students {

students: Student[] = []; 


}

