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

        
    }
  );

  }

  getAllSeries(): ISerie[]{
    return this.arrSeries;
  }

  deleteByTitle(title : string) : ISerie[]{
    // this.arrSeries = this.arrSeries.filter(serie => serie.title !== title);
    let i = this.arrSeries.findIndex(serie => serie.title == title);
    if(i != -1 && i >= 0 && i < this.arrSeries.length){
      this.arrSeries.splice(i, 1);
    }
    

    console.log(this.arrSeries);

    return this.arrSeries;
  }

  
}
