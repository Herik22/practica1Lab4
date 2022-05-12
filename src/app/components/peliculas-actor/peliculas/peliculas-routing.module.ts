import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculaListadoComponent } from './pelicula-listado/pelicula-listado.component';
import { PeliculaAltaComponent} from './pelicula-alta/pelicula-alta.component';
const routes: Routes = [
  {
    path:'alta',
    component:PeliculaAltaComponent
  },
  {
    path:'listado',
    component:PeliculaListadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
