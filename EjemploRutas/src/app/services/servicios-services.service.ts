import { Injectable } from '@angular/core';
import { Iservicio } from '../interfaces/iservicio';
import { SERVICIOS } from '../db/servicios.db';

@Injectable({
  providedIn: 'root'
})
export class ServiciosServicesService {

  private arrServicios: Iservicio[];

  constructor() { 
    this.arrServicios = SERVICIOS;
  }

  getAll(): Iservicio[]{
    return this.arrServicios;
  }

  getByUrl(miUrl: string): Iservicio{
    let servicio : Iservicio;
    let response = this.arrServicios.find(s=> s.url == miUrl);
    if(response != undefined){
      servicio = response as Iservicio;
    }
    else{
      servicio = {
        title: "Servicio no encontrado",
        description: "Contacte con el adminsitrador",
        url: "error"
      }
    }
    return servicio;
  }

  insertEmail(email: string){
    //LLamaria a la API y guardo el email en la BBDD
  }
}
