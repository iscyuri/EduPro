import { Injectable } from '@angular/core';
import { Student } from './model/Student';
import { mockStudents } from './data/mock';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {
   private students: Student[] = mockStudents;
  private studentSubject = new BehaviorSubject<Student[]>([]);
  student$ = this.studentSubject.asObservable();

  constructor() {
    this.studentSubject.next(this.students);
  }

  getStudents() {
    this.studentSubject.next(this.students);
  }

  getStudent(id: number) {
    return of(this.students.find((course) => course.id === id));
  }

  addStudent(student: Student) {
    const newId = this.students[this.students.length - 1].id + 1;
    student.id = newId;
    this.students.push(student);
    this.studentSubject.next([...this.students]);
  }

  updateStudent(student: Student) {
    const updatedStudents = this.students.map((c) => (c.id === student.id ? student : c));
    this.studentSubject.next(updatedStudents);
    this.students = updatedStudents;
  }

  deleteStudent(id: number) {
    const deleteStudents = this.students.filter((c) => c.id !== id);
    this.studentSubject.next(deleteStudents);
    this.students = deleteStudents;
  }
}
