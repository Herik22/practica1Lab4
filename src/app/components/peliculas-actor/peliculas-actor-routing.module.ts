import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './busqueda/busqueda.component';
const routes: Routes = [
  {
    path:'busqueda',
    component:BusquedaComponent
  },

  {
    path: "actor",
    loadChildren: () => import('./actor/actor.module').then(m => m.ActorModule),
  },
  {
    path: "peliculas",
    loadChildren: () => import('./peliculas/peliculas.module').then(m => m.PeliculasModule),
  },
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasActorRoutingModule { }
