export class Frame{
         
    personajes: any;
    textos: any;
    portadaFrame: any;
    numero: any;
    id: any;
    escenaid: any;
    url: any;
   
    constructor(
        portadaFrame = '',
        personajes = [],
        textos = '',
        numero = 1

    ) {

     this.personajes = personajes,
     this.textos = textos,
     this.portadaFrame = portadaFrame,
     this.numero = numero

    }
}