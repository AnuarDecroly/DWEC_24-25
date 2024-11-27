import { Component, inject } from '@angular/core';
import { ServicesStudentService } from '../../services/services-student.service';
import { IStudent } from '../../interfaces/istudent';
import { StudentCardComponent } from "../student-card/student-card.component";
import { FilterCourseComponent } from "../filter-course/filter-course.component";

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [StudentCardComponent, FilterCourseComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {


  studentServices = inject(ServicesStudentService);
  alumnos: IStudent[] = [];

  ngOnInit(){
    this.alumnos = this.studentServices.getAll();
  }

  getCourse($event: string) {
    this.alumnos = this.studentServices.getStudentByCourse($event);
    
  }


}
