import { TipoPelicula } from "src/utils/enumTipo";
import { Actor } from "./actor";
export class Pelicula 
{
    public id:number;
    public nombre:string;
    public tipo:TipoPelicula;
    //public tipo: string;
    public fechaDeEstreno:Date;
    public cantidadDePublico:number;
    public fotoPelicula:string;
    public actorPelicula:Actor;

    constructor(id=0,nombre = '',tipo:TipoPelicula=TipoPelicula.otros,fechaEstreno = new Date(),cantidadDePublico=0,fotoPelicula='',actor:Actor=new Actor()) {
        this.id=id;
        this.nombre=nombre;
        this.fechaDeEstreno= fechaEstreno;
        this.cantidadDePublico=cantidadDePublico;
        this.fotoPelicula=fotoPelicula;
        this.tipo =tipo
        this.actorPelicula=actor
    }

    
}