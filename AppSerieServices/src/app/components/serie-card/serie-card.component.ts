import { Component, Input } from '@angular/core';
import { ISerie } from '../../interfaces/iserie.interface';

@Component({
  selector: 'app-serie-card',
  standalone: true,
  imports: [],
  templateUrl: './serie-card.component.html',
  styleUrl: './serie-card.component.css'
})
export class SerieCardComponent {


  @Input() miSerie!: ISerie;

}
