import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-students-form',
  standalone: false,
  templateUrl: './students-form.html',
  styleUrl: './students-form.css'
})
export class StudentsForm {
  public formStudent: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formStudent = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });

  }
  onSubmit()
  {
    console.log(this.formStudent.value);
  }
}
