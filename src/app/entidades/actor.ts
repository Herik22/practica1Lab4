export class Actor 
{
    public id:number;
    public nombre:string;
    public apellido:string;
    public pais:string;
    public foto:string;

    constructor(id:number=0,nombre:string ='',apellido:string='',pais:string='',cantidadDePublico:number=0,foto:string='') {
        this.id=id;
        this.nombre=nombre;
        this.apellido= apellido;
        this.pais=pais;
        this.foto=foto;
    }

    
}