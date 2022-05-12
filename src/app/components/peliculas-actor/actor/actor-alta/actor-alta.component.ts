import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Actor } from 'src/app/entidades/actor';
import { ServicesFirebaseService } from 'src/app/services/services-firebase.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent implements OnInit {

  newActor:Actor;


  country:any={
    name:'',
    flag:'',
  };

  constructor( private apiFB:ServicesFirebaseService ) {
    this.newActor=new Actor()
   }
   

  ngOnInit(): void {
  }

  addActor(){
    console.log(this.newActor)
    this.apiFB.agregarActor(this.newActor)
    .then(res=>{
        console.log('res LOGS addActor')
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
   
  
  }
  mostrarActor(){
    alert(JSON.stringify(this.newActor))
  }

  actualizarPais(pais:any){
    this.newActor.pais=pais.name
    //this.country = pais
  }
}
