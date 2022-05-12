import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/entidades/pelicula';
import { Actor } from 'src/app/entidades/actor';
import { TipoPelicula } from 'src/utils/enumTipo';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {

  newPelicula:Pelicula;
  arrayTipos:Array<string>;
  constructor() { 
    this.newPelicula=new Pelicula()
    this.arrayTipos= Object.keys(TipoPelicula)
  }

  mostrarPeliculaNueva(){
    console.log(this.newPelicula)
  }

  actualizarActor(actor:Actor){
    this.newPelicula.actorPelicula = actor
  }

  ngOnInit(): void {
  }

}
