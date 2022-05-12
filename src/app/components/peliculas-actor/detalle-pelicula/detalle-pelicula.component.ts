import { Component, OnInit,Input } from '@angular/core';
import { Pelicula } from 'src/app/entidades/pelicula';
import { TipoPelicula } from 'src/utils/enumTipo';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent implements OnInit {


  @Input() peliculaMostrar :Pelicula=new Pelicula(0,'',TipoPelicula.otros,new Date(),0,'');

  constructor() { }

  ngOnInit(): void {
  }

}
