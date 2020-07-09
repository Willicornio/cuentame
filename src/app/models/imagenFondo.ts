export class ImagenFondo{

         
    src: any;
    pos: any;
    id: any;
    tipo: any;
  
   
    constructor(
        src = '',
        pos = '',
        id = '',
        tipo ='',

    ) {

     this.src = src,
     this.pos = pos,
     this.id = id,
     this.tipo = tipo

    }
}