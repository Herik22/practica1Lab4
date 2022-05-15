import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaActor2Component } from './tabla-actor2/tabla-actor2.component';
import { TablaPeliculas2Component } from './tabla-peliculas2/tabla-peliculas2.component';


@NgModule({
  declarations: [ 
    TablaActor2Component,
    TablaPeliculas2Component
  ],
  exports:[TablaActor2Component,TablaPeliculas2Component],
  imports: [
    CommonModule
  ]
})
export class SharedModuleModule { }
