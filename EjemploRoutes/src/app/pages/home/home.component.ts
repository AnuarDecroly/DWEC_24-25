import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  router = inject(Router);

  getSuscribe(suscribeForm: NgForm) {
    if(suscribeForm.value.email !== ""){
      //redirigir a otra page
      this.router.navigate(['/servicios']);
      //window.location.href = ''
      suscribeForm.reset();
    }else{
      alert("El email no puede estar vacio")
    }
  }

}
