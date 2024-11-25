import { Injectable } from '@angular/core';
import { IStudent } from '../interfaces/istudent';
import { ALUMNOS } from '../db/students.db';

@Injectable({
  providedIn: 'root'
})
export class ServicesStudentService {

  private arrAlumnos: IStudent[] = ALUMNOS;
  private id: number = 4;

  constructor() { }

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

  //deleteStudent
}
