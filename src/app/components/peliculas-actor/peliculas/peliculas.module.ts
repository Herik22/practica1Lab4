import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PeliculasRoutingModule } from './peliculas-routing.module';
import { PeliculaAltaComponent } from './pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './pelicula-listado/pelicula-listado.component';
import { TablaActorComponent } from '../tabla-actor/tabla-actor.component';

@NgModule({
  declarations: [
    PeliculaAltaComponent,
    PeliculaListadoComponent,
    TablaActorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PeliculasRoutingModule,

  ]
})
export class PeliculasModule { }
