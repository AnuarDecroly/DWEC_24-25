import { Component, inject, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ServicesStudentService } from '../../services/services-student.service';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {

  registerStudents: FormGroup;
  studentServices = inject(ServicesStudentService);

  constructor(){
    this.registerStudents = new FormGroup({
      nombre: new FormControl(null, []),
      edad: new FormControl(null, []),
      email: new FormControl(null, []),
      curso: new FormControl(null, []),
    }, []);

  }

  getDataForm() {
    console.log(this.registerStudents.value);
    this.studentServices.addStudent(this.registerStudents.value);
    this.registerStudents.reset();
  }

}
