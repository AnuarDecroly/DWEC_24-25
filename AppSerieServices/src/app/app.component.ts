import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeriesListComponent } from "./components/series-list/series-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SeriesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppSerieServices';
}
