import { Component, Input } from '@angular/core';
import { ISeries } from '../../interfaces/iseries';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-series-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './series-card.component.html',
  styleUrl: './series-card.component.css'
})
export class SeriesCardComponent {
  @Input() miSerie!: ISeries;

}
