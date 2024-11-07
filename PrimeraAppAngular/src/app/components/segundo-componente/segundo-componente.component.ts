import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-segundo-componente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './segundo-componente.component.html',
  styleUrl: './segundo-componente.component.css'
})
export class SegundoComponenteComponent {

  mitexto: string;
  @Input() textoH: string = "";
  @Input() longitud: number = 0;

  @Output() borrar = new EventEmitter();


  constructor(){
    this.mitexto = "";
    this.textoH = "He sido modificado en el constructor";
    this.longitud = -23;
    console.log("Estoy en el constructor");
  }

  onDelete(n: number){
    this.borrar.emit(n);
  }


  ngOnInit(): void {
    console.log("Se ha ejecutado el ngOninit");
    //Tipico pedir datos a la api
    
  }

  ngOnChanges(): void{
    console.log("Se ha ejecutado el ngOnchanges()");
  }

  

  hacerClick(): void {
    alert("He sido pusaldo");
    this.textoH = "He sido modificado en el boton";
    this.longitud++;
  }

  validarNombre($event: any): void{
    let nombre: string = $event.target.value as string;
    if(nombre.length < 3){
      alert("El nombre debe de tener al menos 3 caracteres");
    }

  }



}
