import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Actor } from 'src/app/entidades/actor';
import { ServicesFirebaseService } from 'src/app/services/services-firebase.service';

@Component({
  selector: 'app-tabla-actor2',
  templateUrl: './tabla-actor2.component.html',
  styleUrls: ['./tabla-actor2.component.scss']
})
export class TablaActor2Component implements OnInit {
  
  listActores:Array<Actor>;
  listaActores2:Array<Actor>=[];
  @Output() actorSeleccionado=new EventEmitter<Actor>();

  constructor(private apiFB:ServicesFirebaseService) {

    this.apiFB.traerColeccion('actoresCollection')
    .then(response=>{
      response?.subscribe(listaActores=>{
        listaActores.forEach(actor=>{
         let auxActor:any=actor.payload.doc.data();
         if(auxActor!=null){
          this.listaActores2.push(new Actor(auxActor.id,auxActor.nombre,auxActor.apellido,auxActor.pais,auxActor.foto))
         }
        })
      })
    })


    this.listActores = [
      {id:0,nombre:'Andres',apellido:'Peña',pais:'Colombia',foto:'https://randomuser.me/api/portraits/men/74.jpg'},
      {id:0,nombre:'Juan',apellido:'Qlr',pais:'Argentina',foto:'https://randomuser.me/api/portraits/men/75.jpg'},
      {id:0,nombre:'Rodrigo',apellido:'Tyron',pais:'Uruguay',foto:'https://randomuser.me/api/portraits/men/73.jpg'},
      {id:0,nombre:'Daniel',apellido:'Bromo',pais:'Peru',foto:'https://randomuser.me/api/portraits/men/76.jpg'},
      {id:0,nombre:'Santiago',apellido:'Perez',pais:'Chile',foto:'https://randomuser.me/api/portraits/men/72.jpg'}
    ]
   }
   comunicarActorSeleccionado(actor:Actor){
    this.actorSeleccionado.emit(actor);
  }

  ngOnInit(): void {
  }

}
