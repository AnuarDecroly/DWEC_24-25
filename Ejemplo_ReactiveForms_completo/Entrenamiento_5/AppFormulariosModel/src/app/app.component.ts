import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModelComponent } from "./components/forms-model/forms-model.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppFormulariosModel';
}
