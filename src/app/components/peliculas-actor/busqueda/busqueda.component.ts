import { Component, OnInit} from '@angular/core';
import { Pelicula } from 'src/app/entidades/pelicula';
import { TipoPelicula } from 'src/utils/enumTipo';

import { Actor } from 'src/app/entidades/actor';
@Component({

  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  listadoPeliculas:Array<Pelicula>;
  peliSeleccionada:Pelicula;
 

  constructor() {
    this.listadoPeliculas=[
      {id:0,nombre:'peli1',tipo:TipoPelicula.terror,fechaDeEstreno:new Date(),cantidadDePublico:10,fotoPelicula:'https://picsum.photos/70/70',actorPelicula:new Actor(0,'raul')},
      {id:1,nombre:'peli2',tipo:TipoPelicula.amor,fechaDeEstreno:new Date(),cantidadDePublico:20,fotoPelicula:'https://picsum.photos/71/71',actorPelicula:new Actor(0,'juan')},
      {id:2,nombre:'peli3',tipo:TipoPelicula.comedia,fechaDeEstreno:new Date(),cantidadDePublico:30,fotoPelicula:'https://picsum.photos/72/72',actorPelicula:new Actor(0,'pepe')},
      {id:3,nombre:'peli4',tipo:TipoPelicula.otros,fechaDeEstreno:new Date(),cantidadDePublico:15,fotoPelicula:'https://picsum.photos/69/69',actorPelicula:new Actor(0,'myke')},
    ]
    this.peliSeleccionada=this.listadoPeliculas[0]
   }

  // ESCUCHAR el evento emitido por el hijo
  actualizarPeliculaSeleccionada(peli:Pelicula){
    this.peliSeleccionada=peli
  }
  
  

  ngOnInit(): void {
  }

}
