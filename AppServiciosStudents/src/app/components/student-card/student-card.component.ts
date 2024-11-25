import { Component, Input } from '@angular/core';
import { IStudent } from '../../interfaces/istudent';

@Component({
  selector: 'app-student-card',
  standalone: true,
  imports: [],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.css'
})
export class StudentCardComponent {
  @Input() miAlumno!: IStudent;

}
