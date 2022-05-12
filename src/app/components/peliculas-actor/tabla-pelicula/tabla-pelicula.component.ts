import { Component, Input, OnInit,Output,EventEmitter  } from '@angular/core';
import { Pelicula } from 'src/app/entidades/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss']
})
export class TablaPeliculaComponent implements OnInit {
/*
  3- (1pts)Componente “tablaPelicula” ( se utiliza en el componente” busqueda” y en “peliculaListado”
a. Recorrer los elementos que traen desde la base con *ngFor mostrarlas con el ( [src] en formato de grilla y
con una variable de TS como ruta .
b. componente búsqueda: (imagen ilustrativa) es toda la página completa incluida los componentes que la
componen.(círculo violeta)
  */

  @Input() listadoPeliculas:Array<Pelicula>=[];

  @Output() PeliculaSeleccionada = new EventEmitter<Pelicula>();

  
  constructor() {
   }

  ngOnInit(): void {
  }

  // funcion que se encarga de EMITIR el evento hacia el padre
  comunicarPelicula(peli:Pelicula){
    //Emito el evento con un valor como parametro
    this.PeliculaSeleccionada.emit(peli)
  }

}
