import { Component, Input } from '@angular/core';
import { Iservicio } from '../../interfaces/iservicio';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css'
})
export class ServiceCardComponent {

  @Input() miServicio!: Iservicio;

}
