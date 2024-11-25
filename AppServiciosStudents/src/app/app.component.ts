import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentListComponent } from "./components/student-list/student-list.component";
import { StudentFormComponent } from "./components/student-form/student-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentListComponent, StudentFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppServiciosStudents';
}
