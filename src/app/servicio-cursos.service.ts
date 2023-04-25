import { Injectable } from '@angular/core';
import { Curso } from './objeto_curso/curso';
import { nivel } from './objeto_curso/nivel';

@Injectable({
  providedIn: 'root'
})
export class ServicioCursosService {

  
  constructor() { }
  listaCursos:Curso[]=[
    new Curso(1, "Matematicas", 3, nivel.iniciacion),
    new Curso(2, "Lengua", 5, nivel.intermedio),
    new Curso(3, "Ciencias", 4, nivel.avanzado)
  ]
  actualizaCursoServicio(cursoObjeto:Curso){
    //buscar indice
    let elementIndex = this.listaCursos.findIndex((obj => obj._id == cursoObjeto._id));
    //modificacion
    this.listaCursos[elementIndex]._id = cursoObjeto._id;
    this.listaCursos[elementIndex]._nombre = cursoObjeto._nombre;
    this.listaCursos[elementIndex]._duracion = cursoObjeto._duracion;
    this.listaCursos[elementIndex]._nivel = cursoObjeto._nivel;
    //console.log("After update: ", osArray[elementIndex]);
  }
  altaCursoServicio(cursoObjeto:Curso){
      this.listaCursos.push(cursoObjeto)
  }
}
