export class TextoFrame{

         
    texto: any;
    tiempo: any;
    escrito: any;
   
    constructor(
        texto = '',
        tiempo = [],
        escrito=  false

    ) {

     this.texto = texto,
     this.tiempo = tiempo
     this.escrito = escrito;

    }
}