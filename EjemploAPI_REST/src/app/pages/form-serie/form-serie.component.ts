import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ISeries } from '../../interfaces/iseries';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-form-serie',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './form-serie.component.html',
  styleUrl: './form-serie.component.css'
})
export class FormSerieComponent {

  seriesForm: FormGroup;
  tipo: string = "Añadir";

  activatedRoute = inject(ActivatedRoute);
  seriesService = inject(SeriesService);
  router = inject(Router);


  constructor(){
    this.seriesForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      creator: new FormControl('', [Validators.required]),
      rating: new FormControl('', [Validators.required, Validators.min(0), Validators.max(10)]),
      dates: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      channel: new FormControl('',[Validators.required])
    }, []);
  }

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(async (params: any) =>{
      if(params.idserie){
        //pedir serie por id
        this.tipo = "Actualizar";
        const response = await this.seriesService.getById(params.idserie);

        this.seriesForm = new FormGroup({
          _id: new FormControl(response._id, []),
          title: new FormControl(response.title, [Validators.required]),
          creator: new FormControl(response.creator, [Validators.required]),
          rating: new FormControl(response.rating, [Validators.required, Validators.min(0), Validators.max(10)]),
          dates: new FormControl(response.dates, [Validators.required]),
          image: new FormControl(response.image, [Validators.required]),
          channel: new FormControl(response.channel,[Validators.required])
        }, []);
      }
    });
  }

  async getDataForm() {
    
    let serie: ISeries = this.seriesForm.value;

    if(serie.title != ''){
          
      if(serie._id){
        //Actualizar
        const response = await this.seriesService.update(serie);

        if (response.id) {
          alert(`La serie ${response.title} se ha actualizado correctamente`);
        this.router.navigate(['/series']);
        } else {
          alert(`Ha ocurrido un problema en la actualizacion`);
        }
      }
      else{
        //Insertar
        const response = await this.seriesService.insert(serie);
        if(response.id){
          alert(`La serie ${response.title} se ha añadido correctamente`);
          this.router.navigate(['/series']);
        }
        else {
          alert(`Ha ocurrido un problema en la insercion`);
        }
      }
    }else{
      alert(`Debe de rellenar todos los campos`);
    }
  }

}
