import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaActorComponent } from './tabla-actor/tabla-actor.component';
import { TablaPaisesComponent } from './tabla-paises/tabla-paises.component';
import { TablaPeliculaComponent } from './tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './detalle-pelicula/detalle-pelicula.component';
import { PeliculasActorRoutingModule } from './peliculas-actor-routing.module';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { TablaActor2Component } from './shared-module/tabla-actor2/tabla-actor2.component';
import { TablaPeliculas2Component } from './shared-module/tabla-peliculas2/tabla-peliculas2.component';
import { SharedModuleModule } from './shared-module/shared-module.module';
//import { SharedModuleModule } from './shared-module/shared-module.module';
@NgModule({
  declarations: [
    //TablaActorComponent,
    //TablaPaisesComponent,
    BusquedaComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    TablaActor2Component,
   
  ],
  imports: [
    CommonModule,
    PeliculasActorRoutingModule,
    SharedModuleModule
  ]
})
export class PeliculasActorModule { }
