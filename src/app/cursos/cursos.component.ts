import { Component } from '@angular/core';
import { Curso } from '../objeto_curso/curso';
import { nivel } from '../objeto_curso/nivel';
import { ServicioCursosService } from '../servicio-cursos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  constructor(public miServicio:ServicioCursosService, private router: Router){}
  
  id=0
  nombre=""
  duracion=0
  nivel:nivel=nivel.iniciacion
  //para que el enum funcione sacando la palabra en lugar del índice
  opciones: string[] = Object.values(this.nivel).map((v,i,arr)=> v as string);

  actualizarCurso(){
    this.miServicio.actualizaCursoServicio(new Curso(this.id, this.nombre, this.duracion, this.nivel))
    this.router.navigate(['modificar', this.id])
  }
  
  altaCurso(){
    this.miServicio.altaCursoServicio(new Curso(this.id, this.nombre, this.duracion, this.nivel))
    this.router.navigate(['modificar'])
  }
}
