import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormTemplateComponent } from "./componenets/form-template/form-template.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormTemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppFormularios';
}
