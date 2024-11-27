import { Injectable } from '@angular/core';
import { IStudent } from '../interfaces/istudent';
import { ALUMNOS } from '../db/students.db';
import { ICurso } from '../interfaces/icurso';
import { CURSOS } from '../db/cursos.db';

@Injectable({
  providedIn: 'root'
})
export class ServicesStudentService {


  private arrAlumnos: IStudent[];
  private arrCurso: ICurso[];
  private id: number;
  private arrSeries : any;

  constructor() {
    this.arrAlumnos = ALUMNOS;
    this.id = 4;
    this.arrCurso = CURSOS;

        //Obtenemos mediante el fecth los datos de la API
    //http://jsonblob.com/1285969973124915200
    fetch("https://peticiones.online/api/series")
    .then(response => response.json())
    .then(series => {
          this.arrSeries = series;
          console.log(series);
        
    });


  }

  getAll():IStudent []{
    return this.arrAlumnos;
  }

  getById(id: number) : IStudent | undefined{
    return this.arrAlumnos.find(student => student.id == id);
  }

  addStudent(student: IStudent){
    student.id = this.id;
    this.arrAlumnos.push(student);
    this.id++;
  }

  getAllCourses(): ICurso[]{
    return this.arrCurso;
  }

  getStudentByCourse(course: string): IStudent[] {
    return this.arrAlumnos.filter(alumno => alumno.curso.includes(course));
  }

  getAllSeries(): any[]
  {
      return this.arrSeries;
  }

  //deleteStudent
}
