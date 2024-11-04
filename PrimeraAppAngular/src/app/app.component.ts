import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimerComponenteComponent } from "./components/primer-componente/primer-componente.component";
import { SegundoComponenteComponent } from "./components/segundo-componente/segundo-componente.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimerComponenteComponent, SegundoComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PrimeraAppAngular';
}
