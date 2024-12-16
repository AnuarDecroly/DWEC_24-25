import { Component, inject, Input } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-botonera-serie',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './botonera-serie.component.html',
  styleUrl: './botonera-serie.component.css'
})
export class BotoneraSerieComponent {

  @Input() miId: string = "";
  @Input() parent: string = "";

  seriesService = inject(SeriesService);
  router = inject(Router);

  async borrarSerie(id: string) :Promise<void> {
    let confirmacion = confirm('Esta usted seguro que quiere borrar la serie: '+this.miId);
    if(confirmacion){
      let response = await this.seriesService.delete(id);
      if(response._id){
        alert("Se ha borrado correctamente la serie "+response.title);
        if(this.parent == 'view'){
          this.router.navigate(['/series']);
        }
      }
    }
  }
}
