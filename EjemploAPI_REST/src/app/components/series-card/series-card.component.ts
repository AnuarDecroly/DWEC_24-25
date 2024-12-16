import { Component, Input } from '@angular/core';
import { ISeries } from '../../interfaces/iseries';
import { RouterLink } from '@angular/router';
import { BotoneraSerieComponent } from "../botonera-serie/botonera-serie.component";

@Component({
  selector: 'app-series-card',
  standalone: true,
  imports: [RouterLink, BotoneraSerieComponent],
  templateUrl: './series-card.component.html',
  styleUrl: './series-card.component.css'
})
export class SeriesCardComponent {
  @Input() miSerie!: ISeries;

}
