import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { BusquedaComponent } from './components/peliculas-actor/busqueda/busqueda.component';


const routes: Routes = [
  {path:'', component: BienvenidoComponent},
  {
    path: "peliculas-actor",
    loadChildren: () => import('./components/peliculas-actor/peliculas-actor.module').then(m => m.PeliculasActorModule),
  },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
