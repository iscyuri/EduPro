import { Component, Input } from '@angular/core';
import { Student } from '../../interface/Student';

@Component({
  selector: 'app-students-list',
  standalone: false,
  templateUrl: './students-list.html',
  styleUrl: './students-list.css'
})
export class StudentsList {
@Input() students : Student[] = []
}
