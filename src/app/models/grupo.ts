export class grupo{

    Nombre: string;
    Descripcion: string;
    id: number;
  
  
   
    constructor(
        Nombre = '',
        Descripcion = '',
        id = ''
        

    ) {

   
        this.Nombre = Nombre;
        this.Descripcion = Descripcion;
        id = id;
       
    }
}