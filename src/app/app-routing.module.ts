import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { ModificarComponent } from './modificar/modificar.component';

const routes: Routes = [
  {path:"", component:CursosComponent, children:[
    {path:"modificar/:id", component:ModificarComponent},
    {path:"alta", component:ModificarComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
