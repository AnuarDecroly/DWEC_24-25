import { Component, inject } from '@angular/core';
import { ISerie } from '../../interfaces/iserie.interface';
import { SeriesServicesService } from '../../services/series-services.service';
import { SerieCardComponent } from "../serie-card/serie-card.component";

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [SerieCardComponent],
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css'
})
export class SeriesListComponent {

  arrSeries!: ISerie[];
  seriesService = inject(SeriesServicesService);

  
  ngOnInit(){
    this.arrSeries = this.seriesService.getAllSeries();
  }



}
