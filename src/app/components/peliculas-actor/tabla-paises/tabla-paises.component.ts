import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ApiPaisesService } from 'src/app/services/api-paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {

  listaPaises:any=[]
  @Output() countrySelected = new EventEmitter<any>();
  constructor(private api:ApiPaisesService) { 

    this.api.obtenerPaises() // retorna Observable  .subscribe
    .subscribe((data:any)=>{ 
      console.log('DATA API')
      this.listaPaises=data
      
    })
   
  }

  lanzamientoEvento(peliculaSelecciona:any){
    this.countrySelected.emit(peliculaSelecciona)
  }

  ngOnInit(): void {
  }

  

}
