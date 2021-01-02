import { ThrowStmt } from '@angular/compiler';

export class ImagenRecurso{

    nombre: string;
    tipo: string;
    especial: any;
    url: any;
    id: any;
    nombreToShow:string;
  
   
    constructor(
        nombre = '',
        tipo = '',
        especial= '',
        url='',
        id = 0,
        nombreToShow=''

    ) {

   
        this.nombre = nombre;
        this.especial = especial;
        this.tipo = tipo;
        this.url = url;
        this.id = id;
        this.nombreToShow = nombreToShow;
       
    }
}