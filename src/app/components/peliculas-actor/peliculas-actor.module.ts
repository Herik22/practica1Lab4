import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaActorComponent } from './tabla-actor/tabla-actor.component';
import { TablaPaisesComponent } from './tabla-paises/tabla-paises.component';
import { TablaPeliculaComponent } from './tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './detalle-pelicula/detalle-pelicula.component';
import { PeliculasActorRoutingModule } from './peliculas-actor-routing.module';
import { BusquedaComponent } from './busqueda/busqueda.component';


@NgModule({
  declarations: [
    //TablaActorComponent,
    //TablaPaisesComponent,
    BusquedaComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent
  ],
  imports: [
    CommonModule,
    PeliculasActorRoutingModule,
    
  ]
})
export class PeliculasActorModule { }
