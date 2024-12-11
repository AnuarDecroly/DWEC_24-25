import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ServiciosServicesService } from '../../services/servicios-services.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  router = inject(Router);
  servicioServices = inject(ServiciosServicesService);
  email: string = "";

  getSusbribe(suscribe: NgForm) {
    if(suscribe.value.email !== ""){
      this.router.navigate(['/dashboard','servicios']);
      this.email = suscribe.value.email;
      this.servicioServices.insertEmail(this.email);
      suscribe.reset();
    }
    else{
      alert("El email debe de estar cumplimentado");
    }
  }

}
