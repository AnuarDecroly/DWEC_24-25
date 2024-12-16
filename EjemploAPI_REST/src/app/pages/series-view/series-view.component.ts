import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeriesService } from '../../services/series.service';
import { ISeries } from '../../interfaces/iseries';
import { BotoneraSerieComponent } from "../../components/botonera-serie/botonera-serie.component";

@Component({
  selector: 'app-series-view',
  standalone: true,
  imports: [RouterLink, BotoneraSerieComponent],
  templateUrl: './series-view.component.html',
  styleUrl: './series-view.component.css'
})
export class SeriesViewComponent {

  activatedRoute = inject(ActivatedRoute);
  seriesService = inject(SeriesService);

  miSerie!: ISeries;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( async (params: any) => {
      let id : string = params.idserie as string;

      try{
          this.miSerie = await this.seriesService.getById(id);
      }catch(err){
        console.log("Error al llamar a la API: "+err);
      }
    });
  }

}
