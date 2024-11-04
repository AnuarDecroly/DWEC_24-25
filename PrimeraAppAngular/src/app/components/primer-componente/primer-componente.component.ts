import { Component } from '@angular/core';

@Component({
  selector: 'app-primer-componente',
  standalone: true,
  imports: [],
  templateUrl: './primer-componente.component.html',
  styleUrl: './primer-componente.component.css'
})
export class PrimerComponenteComponent {

  nombre: string;
  apellidos: string;
  edad: number;
  email: string;
  alumnos: string [];

  constructor(){
    this.nombre = "Pepe";
    this.apellidos = "Grande";
    this.edad = 33;
    this.email = `${this.nombre}${this.apellidos}@mail.com`
    this.alumnos = ["Pepe", "Paco"];
    //this.nombre+this.apellidos+"@mail.com";
  }

  public nombreCompleto(){
    return `${this.nombre} ${this.apellidos}`
  }

}
