import { Component, inject } from '@angular/core';
import { Iservicio } from '../../interfaces/iservicio';
import { ServiciosServicesService } from '../../services/servicios-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicio-view',
  standalone: true,
  imports: [],
  templateUrl: './servicio-view.component.html',
  styleUrl: './servicio-view.component.css'
})
export class ServicioViewComponent {

  miServicio!: Iservicio;

  serviciosServices = inject(ServiciosServicesService);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void{
    this.activatedRoute.params.subscribe((params : any) =>{
      let url : string = params.url;
      if(url != undefined){
        let response = this.serviciosServices.getByUrl(url);
        if(response != undefined){
          this.miServicio = response as Iservicio;

          if(response.url == "error"){
            
          }
        }

      }
    })
  }

  


}
