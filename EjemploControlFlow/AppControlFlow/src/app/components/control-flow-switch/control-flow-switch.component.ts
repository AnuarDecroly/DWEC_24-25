import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow-switch',
  standalone: true,
  imports: [],
  templateUrl: './control-flow-switch.component.html',
  styleUrl: './control-flow-switch.component.css'
})
export class ControlFlowSwitchComponent {
  roles: string [] = ["admin", "editor", "suscriptor", "otros"];
  role: string = this.roles[0];
  estudiantes : any[] = [];
  nElementos: number;

  constructor(){
    this.estudiantes = [
      { id: 1, name: "Frodo Bolson", age: 23 },
      { id: 2, name: "Sam Gamyi", age: 33 },
      { id: 3, name: "Gandalf", age: 2755 },
      { id: 4, name: "Aragorn", age: 85 },
      { id: 5, name: "Legolas", age: 5313 },
    ]

    this.nElementos = this.estudiantes.length
  }

  insertarEstudiante(): void{
    this.estudiantes.push({ id: this.nElementos+1, name: "Boromir", age: 35 })
    this.nElementos = this.estudiantes.length;
  }

}
