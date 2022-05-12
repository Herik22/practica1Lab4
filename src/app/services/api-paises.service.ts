import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class ApiPaisesService {

  url:string = 'https://restcountries.com/v2/alpha?codes=arg,ge,aus,co,ve'

  constructor(private http:HttpClient) { }
  
  
  obtenerPaises=()=>{
    return this.http.get(this.url)
  }
}





