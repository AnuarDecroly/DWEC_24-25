import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICurso } from '../../interfaces/icurso';
import { ServicesStudentService } from '../../services/services-student.service';

@Component({
  selector: 'app-filter-course',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter-course.component.html',
  styleUrl: './filter-course.component.css'
})
export class FilterCourseComponent {

  filterForm: any;
  cursos: ICurso[];
  studentServices = inject(ServicesStudentService);
  @Output() cursoSeleccionado: EventEmitter<string> = new EventEmitter();

  constructor(){
    this.cursos = [];
  }

  ngOnInit(){
    this.cursos = this.studentServices.getAllCourses();
  }
  
  getDataFilter(form: any) {
    this.cursoSeleccionado.emit(form.value.curso);
  }

}
