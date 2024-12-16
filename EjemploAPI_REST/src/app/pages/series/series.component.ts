import { Component, inject } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { ISeries } from '../../interfaces/iseries';
import { SeriesCardComponent } from "../../components/series-card/series-card.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [SeriesCardComponent, RouterLink],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {

  seriesService = inject(SeriesService);
  arrSeries : ISeries[];

  constructor(){
    this.arrSeries = [];
  }

  async ngOnInit() : Promise<void> {
    //Usando Obserbables
    // this.seriesService.getAllWithObservables().subscribe((data: ISeries[]) =>{
    //       this.arrSeries = data;
    // });

    //Usando promesas
    try{
        this.arrSeries = await this.seriesService.getAllWithPromises();
    }catch(err) {
      console.log('Error al conectar a la API: '+err);
    }


  }

}
