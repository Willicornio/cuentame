import { ThrowStmt } from '@angular/compiler';

export class ImagenRecurso{

    nombre: string;
    tipo: string;
    especial: any;
    url: any;
    id: any;
  
   
    constructor(
        nombre = '',
        tipo = '',
        especial= '',
        url='',
        id = 0

    ) {

   
        this.nombre = nombre;
        this.especial = especial;
        this.tipo = tipo;
        this.url = url;
        this.id = id;
       
    }
}