import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Iasistente } from '../../interfaces/iasistente';

@Component({
  selector: 'app-form-template',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-template.component.html',
  styleUrl: './form-template.component.css'
})
export class FormTemplateComponent {

  arrData: Iasistente [] = []

  getDataForm(miFormulario: NgForm) {
    let asistente : Iasistente = miFormulario.value as Iasistente;
    this.arrData.push(asistente);
    console.log(asistente);
    miFormulario.resetForm();
  }

}
