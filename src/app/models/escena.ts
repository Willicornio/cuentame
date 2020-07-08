export class Escena{

         
    fondo: any;
    personajes: any;
    textos: any;
  
   
    constructor(
        fondo = '',
        personajes = [],
        textos = []
        

    ) {

     this.fondo = fondo,
     this.personajes = personajes,
     this.textos = textos

    }
}