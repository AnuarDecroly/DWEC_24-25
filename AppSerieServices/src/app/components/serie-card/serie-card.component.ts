import { Component, inject, Input } from '@angular/core';
import { ISerie } from '../../interfaces/iserie.interface';
import { SeriesServicesService } from '../../services/series-services.service';

@Component({
  selector: 'app-serie-card',
  standalone: true,
  imports: [],
  templateUrl: './serie-card.component.html',
  styleUrl: './serie-card.component.css'
})
export class SerieCardComponent {


serieService = inject(SeriesServicesService);
  @Input() miSerie!: ISerie;

  deleteSerie(serie : ISerie) {
    this.serieService.deleteByTitle(serie.title);
  }

}
