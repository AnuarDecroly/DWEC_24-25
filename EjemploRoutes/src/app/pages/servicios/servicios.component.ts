import { Component, inject } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';
import { IServicio } from '../../interfaces/iservicio';
import { ServicioCardComponent } from "../../components/servicio-card/servicio-card.component";

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [ServicioCardComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  serviciosService = inject(ServiciosService);
  misServicios: IServicio[];

  constructor(){
    this.misServicios = [];
  }

  ngOnInit(){
    this.misServicios = this.serviciosService.getAll();
  }

}
