import { Component, inject } from '@angular/core';
import { ServiciosServicesService } from '../../services/servicios-services.service';
import { Iservicio } from '../../interfaces/iservicio';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [ServiceCardComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

  serviciosService = inject(ServiciosServicesService);
  arrServicios: Iservicio[];

  constructor(){
    this.arrServicios = [];
  }

  ngOnInit(){
    this.arrServicios = this.serviciosService.getAll();
  }


}
