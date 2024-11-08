import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iaficiones } from '../../interfaces/iaficiones';

@Component({
  selector: 'app-aficiones',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './aficiones.component.html',
  styleUrl: './aficiones.component.css'
})
export class AficionesComponent {

  arrAficiones: Iaficiones [] = [];

  newAficion: Iaficiones = {
    aficion: "",
    nombre: ""
  };

  guardarDatos():void{
    //Guardar los datos
    this.arrAficiones.push(this.newAficion);

    this.newAficion = {
      aficion: "",
      nombre: "",
    }
    console.log(this.arrAficiones);
  }

  cargarDatos(): string {
    let html : string = "";
    this.arrAficiones.forEach(element => {
      html += `<p>${element.aficion} - ${element.nombre}</p>`
    });
    return html;
  }

}
