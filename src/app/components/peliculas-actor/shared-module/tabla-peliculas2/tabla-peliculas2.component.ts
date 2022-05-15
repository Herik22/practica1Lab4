import {Component, Input, OnInit,Output,EventEmitter  } from '@angular/core';
import { Pelicula } from 'src/app/entidades/pelicula';

@Component({
  selector: 'app-tabla-peliculas2',
  templateUrl: './tabla-peliculas2.component.html',
  styleUrls: ['./tabla-peliculas2.component.scss']
})
export class TablaPeliculas2Component implements OnInit {

  @Input() listadoPeliculas:Array<Pelicula>=[];

  @Output() PeliculaSeleccionada = new EventEmitter<Pelicula>();

  constructor() { }

  ngOnInit(): void {
  }
  // funcion que se encarga de EMITIR el evento hacia el padre
  comunicarPelicula(peli:Pelicula){
    //Emito el evento con un valor como parametro
    this.PeliculaSeleccionada.emit(peli)
  }
}
