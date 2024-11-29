import { Injectable } from '@angular/core';
import { ISerie } from '../interfaces/iserie.interface';

@Injectable({
  providedIn: 'root'
})
export class SeriesServicesService {
  
  private arrSeries: ISerie[] = [];

  constructor() {
    //Obtenemos mediante el fecth los datos de la API
    fetch("https://peticiones.online/api/series")
    .then(response => response.json())
    .then(series => {
        series.forEach((element: any) => {
          let serie = element as ISerie;
          this.arrSeries.push(serie);
          
        });
          this.arrSeries = series;
    }
  );

  }

  getAllSeries(): ISerie[]{
    return this.arrSeries;
  }

  
}
