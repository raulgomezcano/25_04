import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../objeto_curso/curso';
import { nivel } from '../objeto_curso/nivel';
import { ServicioCursosService } from '../servicio-cursos.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent {
  id=0
  nombre=""
  duracion:number
  hayID:boolean=true
  nivel: nivel;
  accion="Modificar curso"
constructor(public activatedRoute: ActivatedRoute, public miServicio:ServicioCursosService,private router:Router){
  
  // this.id = this.activatedRoute.snapshot.params["id"]
  if(this.id==undefined){
    this.hayID=false
    this.accion="Agregar curso"
  }
}
ngOnInit(){
  //data es el flujo de datos de parámetros, s epuede llamar de otra forma
  this.activatedRoute.params.subscribe(data=>{
    
    this.id=data['id'];
    this.nombre=this.miServicio.listaCursos[this.id -1]._nombre
    this.duracion=this.miServicio.listaCursos[this.id -1]._duracion
    this.nivel=this.miServicio.listaCursos[this.id -1]._nivel

  })
}

actualizaCurso(){
  this.miServicio.actualizaCursoServicio(new Curso(this.id, this.nombre, this.duracion, this.nivel))
  this.router.navigate([""]);
}
altaCurso(){
  this.miServicio.altaCursoServicio(new Curso(this.id, this.nombre, this.duracion, this.nivel))
  this.router.navigate([""]);
}
}
